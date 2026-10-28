import { chromium } from "@playwright/test";
import fs from "node:fs";
const base = process.env.TEST_BASE_URL || "http://127.0.0.1:3000";
const browser = await chromium.launch({
  headless: true,
  executablePath:
    process.env.CHROME_EXECUTABLE_PATH ||
    (fs.existsSync("C:/Program Files/Google/Chrome/Application/chrome.exe")
      ? "C:/Program Files/Google/Chrome/Application/chrome.exe"
      : undefined),
});
const page = await browser.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
const results = [];
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};
try {
  for (const width of [1440, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 950 });
    for (const route of [
      "/",
      "/about",
      "/services",
      "/testimonials",
      "/contact",
    ]) {
      const response = await page.goto(base + route, {
        waitUntil: "domcontentloaded",
        timeout: 60000,
      });
      assert(response?.status() === 200, "Route failed: " + route);
      assert(
        (await page.locator("h1").count()) === 1,
        "Heading hierarchy: " + route,
      );
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      );
      assert(!overflow, "Horizontal overflow at " + width + " on " + route);
      results.push(width + "px " + route + " OK");
      console.log(width + "px " + route + " OK");
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base, { waitUntil: "domcontentloaded" });
  const menu = page.getByRole("button", { name: "Open navigation" });
  await menu.click();
  assert(
    await page.locator("#mobile-navigation").isVisible(),
    "Mobile menu did not open",
  );
  await page.keyboard.press("Escape");
  assert(
    (await menu.getAttribute("aria-expanded")) === "false",
    "Escape did not close menu",
  );
  await menu.click();
  await page
    .locator("#mobile-navigation")
    .getByRole("link", { name: "Services" })
    .click();
  await page.waitForURL("**/services");
  assert(
    (await page.locator("#mobile-navigation").count()) === 0,
    "Navigation menu stayed open",
  );
  await page.goto(base + "/contact", { waitUntil: "domcontentloaded" });
  await page
    .getByRole("button", { name: "Request an Estimate", exact: true })
    .click();
  await page.locator("[aria-invalid=true]").first().waitFor();
  assert(
    (await page.locator("[aria-invalid=true]").count()) >= 3,
    "Invalid form did not display validation",
  );
  assert(
    await page
      .locator("#full-name")
      .evaluate((e) => e === document.activeElement),
    "Invalid form did not focus name",
  );
  await page.getByLabel("Name", { exact: false }).fill("Website QA");
  await page.getByLabel("Email", { exact: false }).fill("qa@example.com");
  await page
    .getByLabel("Project details", { exact: false })
    .fill("Local QA request checking the unconfigured delivery fallback.");
  await page
    .getByRole("button", { name: "Request an Estimate", exact: true })
    .click();
  await page
    .getByText("Online estimates are not available just yet.", { exact: false })
    .waitFor();
  assert(
    (await page
      .getByText("Your estimate request has been sent", { exact: false })
      .count()) === 0,
    "False success state",
  );
  const invalid = await page.request.post(base + "/api/estimate", {
    data: { name: "A", email: "invalid", phone: "", details: "short" },
  });
  assert(invalid.status() === 400, "Server validation failed");
  const malformed = await page.request.post(base + "/api/estimate", {
    data: "{bad",
    headers: { "Content-Type": "application/json" },
  });
  assert(malformed.status() === 400, "Malformed JSON handling failed");
  const foreign = await page.request.post(base + "/api/estimate", {
    data: {},
    headers: { Origin: "https://other.example" },
  });
  assert(foreign.status() === 403, "Origin validation failed");
  fs.mkdirSync("output/qa", { recursive: true });
  for (const [name, width, height] of [
    ["desktop", 1440, 1000],
    ["mobile", 390, 844],
  ]) {
    await page.setViewportSize({ width, height });
    await page.goto(base, { waitUntil: "domcontentloaded" });
    await page.evaluate(async () => {
      await Promise.all(
        Array.from(document.images).map((img) => {
          img.loading = "eager";
          return img.decode().catch(() => {});
        }),
      );
    });
    const broken = await page
      .locator("img")
      .evaluateAll((imgs) =>
        imgs.filter((i) => !i.complete || !i.naturalWidth).map((i) => i.alt),
      );
    assert(broken.length === 0, "Broken images: " + broken.join(", "));
    await page.screenshot({
      path: "output/qa/home-" + name + ".png",
      fullPage: true,
    });
  }
  assert(errors.length === 0, "Browser errors: " + errors.join("; "));
  results.push(
    "Mobile menu, form validation, API fallback, malformed requests, origin checks, image loading, and browser error checks passed.",
  );
  fs.writeFileSync("output/qa/browser-results.txt", results.join("\n"));
  console.log(results.join("\n"));
} finally {
  await browser.close();
}

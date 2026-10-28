"use client";
import { useEffect, useState } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { estimateSchema } from "@/lib/validation";
import { site } from "@/lib/site";
export default function EstimateForm({ full = false }: { full?: boolean }) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const prefix = full ? "full-" : "quick-";
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const result = estimateSchema.safeParse(
      Object.fromEntries(new FormData(form)),
    );
    if (!result.success) {
      const next: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        next[String(i.path[0])] = i.message;
      });
      setErrors(next);
      setStatus("idle");
      form
        .querySelector<HTMLElement>('[name="' + Object.keys(next)[0] + '"]')
        ?.focus();
      return;
    }
    setErrors({});
    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(
          data.message || "Please call or email us to discuss your project.",
        );
      setStatus("success");
      setMessage(data.message);
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Please call or email us.",
      );
    }
  }
  const field = (
    name: string,
    label: string,
    type = "text",
    required = false,
  ) => (
    <div className="field">
      <label htmlFor={prefix + name}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <input
        id={prefix + name}
        name={name}
        type={type}
        required={required}
        autoComplete={name === "phone" ? "tel" : name}
        maxLength={name === "name" ? 100 : name === "email" ? 254 : 30}
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? prefix + name + "-error" : undefined}
      />
      {errors[name] && (
        <span className="field-error" id={prefix + name + "-error"}>
          {errors[name]}
        </span>
      )}
    </div>
  );
  return (
    <form className="estimate-form" onSubmit={submit} noValidate>
      <div className="form-row">
        {field("name", "Name", "text", true)}
        {field("email", "Email", "email", true)}
      </div>
      {field("phone", "Phone", "tel")}
      {full && (
        <div className="field">
          <label htmlFor="service">Service needed</label>
          <select id="service" name="service">
            {[
              "Not sure yet",
              "Kitchen renovation",
              "Bathroom renovation",
              "Basement renovation",
              "Full-home renovation",
              "Addition / construction",
            ].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      )}
      <div className="field">
        <label htmlFor={prefix + "details"}>
          Project details <span aria-hidden="true">*</span>
        </label>
        <textarea
          name="details"
          id={prefix + "details"}
          rows={full ? 5 : 3}
          maxLength={5000}
          required
          placeholder="What do you have in mind?"
          aria-invalid={!!errors.details}
          aria-describedby={
            errors.details ? prefix + "details-error" : undefined
          }
        />
        {errors.details && (
          <span className="field-error" id={prefix + "details-error"}>
            {errors.details}
          </span>
        )}
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor={prefix + "website"}>Leave this blank</label>
        <input
          id={prefix + "website"}
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <button
        className="button"
        disabled={!ready || status === "sending"}
        type="submit"
      >
        {status === "sending" ? "Sending your request?" : "Request an Estimate"}
        {status === "sending" ? (
          <LoaderCircle className="spin" size={17} />
        ) : (
          <ArrowRight size={17} />
        )}
      </button>
      <p className="form-note">
        A conversation is the first step. No obligation.
      </p>
      <div aria-live="polite" aria-atomic="true">
        {message && (
          <div className={"form-message " + status}>
            <p>{message}</p>
            {status === "error" && (
              <p>
                <a href={site.tel}>{site.phone}</a> ?{" "}
                <a href={"mailto:" + site.email}>Email Jasper</a>
              </p>
            )}
          </div>
        )}
      </div>
    </form>
  );
}

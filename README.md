# Jasper Construction & Development Inc.

A responsive, five-page Next.js App Router website using TypeScript, Tailwind CSS, and SVG icons.

## Run locally

Requires Node.js 20.9 or newer.

1. Run npm install.
2. Copy .env.example to .env.local and configure email delivery if needed.
3. Run npm run dev and visit http://127.0.0.1:3000.

## Production

Run npm run build, then npm start. Deploy to a host supporting Next.js server routes, such as Vercel or a Node.js server. Set environment variables in the hosting dashboard. Connect the business domain through that host's DNS instructions.

## Estimate delivery

The /api/estimate route uses the Resend HTTP API. Configure RESEND_API_KEY and ESTIMATE_FROM using an address on a domain verified in your Resend account. ESTIMATE_TO defaults to jasperconstructioninc@gmail.com. Never expose these secrets to browser code.

Both client and server validate the form. A hidden honeypot catches basic automated submissions. Success appears only after the provider returns an email ID, confirming acceptance rather than inbox delivery. Missing configuration returns an honest phone/email fallback. Add host-level rate limiting before public campaigns.

## Pages and content

Each of the five pages has a dedicated App Router route and page components. Shared navigation, footer, images, buttons, and forms live in components/. Business details and image URLs are centralized in lib/site.ts.

The SVG monogram is provisional and can be replaced with the client's approved logo. All six architectural images were created with the built-in image generation tool and are illustrative renovation concepts, not completed Jasper projects or verified before/after pairs. Optimized WebP assets are stored locally in public/images/jasper/. Full-resolution originals, exact prompts, and the asset manifest are in output/imagegen/. The social-sharing image is a 1200x630 crop derived from the kitchen image. No customer reviews or unsupported business credentials have been invented.

## Verification

npm run typecheck
npm run build

Building requires network access to download Google fonts through next/font. Email delivery needs the environment variables above and a verified sender domain.

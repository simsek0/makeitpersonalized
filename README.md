# makeitpersonalized

Private storefront preview for custom apparel, embroidery, engraving and drinkware.

## Customer flow
Choose a service and item, enter quantity and personalization, optionally upload a PNG/JPG/PDF up to 5 MB, then submit contact details and consent. The server validates and saves requests in D1 and artwork in private R2 storage. It returns a reference only after persistence succeeds. No checkout, payment collection or automated email sending is configured.

## Studio review
/requests requires platform sign-in. ADMIN_EMAIL is a server-side allowlist for the studio operator's ChatGPT email. The matching signed-in operator can view all requests and update progress. Other signed-in visitors see only their own requests. Without ADMIN_EMAIL the inbox falls back to the visitor's own requests and disables administrative actions. Authorization is enforced on every data/artwork route. Site access remains owner-private. Before any public release, confirm business identity, policies, final prices, fulfillment, staff access and notification delivery.

## Development
npm install
npm run dev -- --host 127.0.0.1 --port 4173
npm run db:generate
npm run build

Migrations in drizzle/ must be applied to local D1 for local submissions. Hosted Sites applies packaged migrations. Env example lists optional studio access configuration. Production values are configured through Sites, never hosting.json.

## Content and assets
Business services, contact details and background were derived from makeitpersonalized.com on 2026-09-20. The homepage product image is an original AI-generated concept image, not evidence of customer work. No customer reviews or sales claims are invented. robots is noindex for this private review build.

## Validation
Use TypeScript, build, and focused non-browser integration tests for validation, durable submissions, upload access controls and inbox isolation. WebMCP exposes draft staging and readback only; no submission is hidden in draft tools.

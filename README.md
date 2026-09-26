# Make It Personalized

## GitHub Pages storefront

The current design storefront is published at https://simsek0.github.io/makeitpersonalized/ by the **Publish personalized storefront preview** workflow. A push to `main` runs the same GitHub Pages workflow already connected to this repository. GitHub Settings → Pages must use **GitHub Actions**.

The public preview is a standalone storefront using 27 dated product listings from MakeItPersonalized.com. It shows the original store photos and links, available colors and sizes, the product designer, and a local quote bag. Mockups are illustrative. Listed product prices and documented option surcharges do not include custom print/engraving, tax, or delivery.

The preview does not connect to the order API or database and does not transmit quote information. Designs and uploaded art stay in the visitor's browser. The primary hosted app remains in the existing Next/Vinext source tree, with its server-side request storage, staff inbox, migrations, and runtime configuration intact. This GitHub Pages replacement does not deploy a new production Sites version or alter the live `makeitpersonalized.com` WordPress/Ecwid shop.

Pages content lives in `pages-storefront/`. Run `node scripts/build-pages.mjs`, then `node scripts/check-pages.mjs` to stage and verify the `/makeitpersonalized/` GitHub Pages output. The workflow runs both on pushes to `main` and on manual dispatch.

## Existing hosted app

Private storefront for custom apparel, embroidery, engraving and drinkware.

### Customer flow

Choose a service and item, enter quantity and personalization, optionally upload a PNG/JPG/PDF up to 5 MB, then submit contact details and consent. The server validates and saves requests in D1 and artwork in private R2 storage. It returns a reference only after persistence succeeds. No checkout, payment collection or automated email sending is configured.

### Studio review

`/requests` requires platform sign-in. `ADMIN_EMAIL` is a server-side allowlist for the studio operator's ChatGPT email. The matching signed-in operator can view all requests and update progress. Other signed-in visitors see only their own requests. Without `ADMIN_EMAIL` the inbox falls back to the visitor's own requests and disables administrative actions. Authorization is enforced on every data/artwork route.

### Development

```sh
npm install
npm run dev -- --host 127.0.0.1 --port 4173
npm run db:generate
npm run build
```

Migrations in `drizzle/` must be applied to local D1 for local submissions. Hosted Sites applies packaged migrations. Production values are configured through Sites, never `hosting.json`.

## Catalog source and design preview

The Pages catalog data and original product photographs were captured from https://www.makeitpersonalized.com/shop/ on September 26, 2026. This is a snapshot, not live inventory synchronization. Color swatches and product mockups approximate appearance; the store must confirm availability, print locations, setup fees and final prices.

Flow reference: https://www.customink.com/ and https://www.customink.com/lab. Original page design and code; no Custom Ink assets or code are used.

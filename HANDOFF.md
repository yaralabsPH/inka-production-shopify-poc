# INKA Production Shopify POC — Handoff

## Purpose

Minimal feasibility proof for a Shopify Orders bulk action. The intended flow is:

1. Shopify Admin → Orders
2. Select multiple orders
3. Actions / More actions → **Send to INKA Production**
4. Open a Shopify-native modal
5. Show selection count and a `Codename` field
6. `Test` only displays success and logs selected Shopify IDs locally

No Make webhook, database, API integration, dashboard, Google Sheets, metafields, or production automation has been added.

## App and extension

- Shopify app name: `INKA Production`
- Development store: `inka-production-poc.myshopify.com`
- Extension target: `admin.order-index.selection-action.render`
- Extension: `extensions/send-to-inka-production`
- Main UI file: `extensions/send-to-inka-production/src/ActionExtension.jsx`

## Current state

- The extension builds with `shopify app build`.
- In the POC store, selecting two orders exposes **Send to INKA Production** under the selected-order Actions menu.
- Clicking it opens Shopify's native modal shell.
- Current blocker: Shopify's local dev preview renders the modal body blank, including when reduced to the current CLI-generated Admin action pattern. The source contains the intended minimal UI but the selection count, text field, and Test result have not yet been visually verified in Shopify.

## Local setup on a new computer

1. Install a supported Node.js version and Shopify CLI.
2. Clone this private repository.
3. Run `npm install` from the repository root.
4. Sign in with `shopify auth login`.
5. Start the preview with:

   ```powershell
   shopify app dev --store inka-production-poc.myshopify.com --client-id <app-client-id> --no-update
   ```

6. In Shopify Admin → Orders, select both POC test orders and open Actions.

Do not commit `.env` files, Make webhook URLs, access tokens, or browser profiles.

## Next technical task

Resolve the blank Admin action modal body in local development before adding any Make webhook relay or production integration.

## Agreed product scope after the POC

The intended paid implementation is deliberately small: selected order IDs plus Codename are posted through a secure, server-side relay to a Make webhook. The Make URL must not be embedded in the extension browser code.

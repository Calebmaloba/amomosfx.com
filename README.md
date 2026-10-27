# AmomosFX starter website

A beginner-friendly, responsive static website designed for GitHub Pages. It has no server, database, account system, payment processing, live trading feed, or analytics.

## Included pages
- `index.html` — homepage
- `learn.html` — beginner lessons
- `insights.html` — educational market insights (not live prices/signals)
- `risk-disclosure.html` — general trading risk disclosure
- `about.html` — about AmomosFX
- `partner.html` — Deriv partner information and referral placeholder
- `privacy.html` — starter privacy policy
- `terms.html` — starter terms of use
- `contact.html` — contact placeholder
- `assets/style.css` — responsive design
- `assets/site.js` — mobile menu, footer year, referral link configuration

## Before publishing
1. Apply to Deriv's official partner program and ask whether your proposed website/domain is approved.
2. Do not claim a Deriv partnership until it is approved.
3. Replace `YOUR-EMAIL@example.com` in `contact.html` and the same placeholder text where relevant with an email address you control.
4. Review `privacy.html`, `terms.html`, and `risk-disclosure.html` for your actual business, jurisdiction, and partner requirements. These are starter templates, not legal advice.
5. Only after you receive your actual approved Deriv referral URL, open `assets/site.js` and replace the empty value here:
   `const APPROVED_DERIV_REFERRAL_URL = '';`
   with the exact URL in single quotes. Keep `https://` at the beginning. Do not add passwords, API tokens, or private credentials.
6. Test the referral button and all pages on mobile and desktop before sharing the site.

## Publish free with GitHub Pages
1. Sign in at https://github.com/ and create a new **public** repository named `amomosfx-website` (or another name you prefer).
2. Extract this ZIP on your device.
3. Upload the website files and folders into the repository's root. Make sure `index.html` is in the root, not nested inside another folder.
4. On GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose branch `main` and folder `/(root)`, then click **Save**.
7. Wait for GitHub Pages to publish the site. The Pages section will show the website address, commonly `https://YOUR-USERNAME.github.io/amomosfx-website/`.
8. Test every navigation link and the mobile menu.
9. For a custom domain, buy `amomosfx.com` from a reputable registrar, then configure it under **Settings → Pages → Custom domain** and follow GitHub's DNS instructions. Do not set DNS records based on guesses.

## Important
- This website is educational, not a broker, and does not accept deposits.
- The trading button is intentionally disabled until an approved referral URL is configured.
- GitHub Pages is suitable for static content. It cannot run server-side code or securely store secret API keys.
- Do not add a Deriv API token or users' login credentials to these files.

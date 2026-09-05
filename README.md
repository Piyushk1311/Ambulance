# Patna Ambulance Services

Static two-page site. 24×7 ambulance service in Patna — emergency, ICU, patient
transfer, dead body freezer, long distance and air ambulance.

## Files

- `index.html` — home page (hero, services grid, charges, fleet carousel, booking form, FAQs)
- `services.html` — service detail page, one section per service, each with a photo slider
- `support.js`, `image-slot.js` — runtime scripts, required
- `images/` — all photos
- `robots.txt`, `sitemap.xml` — search engine files
- `.nojekyll` — tells GitHub Pages to serve the files as-is

## Hosting on GitHub Pages

1. Create a new **public** repository on GitHub.
2. Click **Add file → Upload files** and drag in everything from this folder
   (keep `images/` as a folder). Commit.
3. Go to **Settings → Pages**.
4. Under *Source* choose **Deploy from a branch**, branch `main`,
   folder `/ (root)`. Save.
5. Wait 1–2 minutes. The site is live at
   `https://<your-username>.github.io/<repo-name>/`

## Using your own domain

1. Add a file named `CNAME` at the repo root containing just the domain,
   i.e. `ambulanceinpatna.com`
2. At your domain registrar, point the apex record at GitHub's IPs:
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. For `www`, add a CNAME record pointing to `<your-username>.github.io`
4. Back in **Settings → Pages**, tick **Enforce HTTPS** once the certificate is issued.

## After going live

- Submit `sitemap.xml` in Google Search Console.
- Create or claim the Google Business Profile and use the exact same business
  name, phone and address as the footer.
- Add the full street address and pincode to the footer and to the
  `LocalBusiness` structured data in `index.html` — it is currently only
  "Patna, Bihar".

## Phone

All call and WhatsApp links point to **9731007202**. To change the number,
find and replace `9731007202` across `index.html` and `services.html`.

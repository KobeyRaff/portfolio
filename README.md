# Kobey Rafferty Engineering Portfolio

A static engineering portfolio designed for deployment to Cloudflare Pages.

## Why this setup

This version uses plain HTML, CSS and JavaScript. There is no framework, package
manager or build step, so it is fast, reliable and particularly simple to deploy
on Cloudflare Pages.

## 1. Personalise the site

Open `index.html` and replace:

- `YOUR_EMAIL@example.com`
- `YOUR-LINKEDIN`
- `YOUR-GITHUB`
- Any project or employment wording that needs correction

Place your résumé at:

`assets/documents/Kobey-Rafferty-Resume.pdf`

## 2. Add project media

The page already contains graceful placeholders when files are missing.

Recommended filenames:

- `assets/videos/tvc-simulator.mp4`
- `assets/images/tvc-poster.jpg`
- `assets/images/pcb-main.jpg`
- `assets/images/social-card.jpg`

For best loading performance:

- Use MP4 with H.264 video
- Keep looping homepage videos short, muted and ideally below 10–15 MB
- Export photos as WebP or compressed JPEG at roughly 1600–2400 px wide
- Remove metadata or content that is confidential, export-controlled or owned by
  an employer/team without permission

## 3. Preview locally

From the project folder, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Opening `index.html` directly also works, but a local server more closely matches
the deployed site.

## 4. Push to GitHub

Create a new GitHub repository, then run:

```bash
git init
git add .
git commit -m "Initial engineering portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB/YOUR-REPOSITORY.git
git push -u origin main
```

## 5. Deploy with Cloudflare Pages

In Cloudflare:

1. Open **Workers & Pages**.
2. Choose **Create application**.
3. Select **Pages** and import your existing Git repository.
4. Select this repository.
5. Use these build settings:
   - Framework preset: `None`
   - Build command: leave blank
   - Build output directory: `/`
6. Deploy.

Every future push to the selected production branch will trigger a deployment.

## 6. Connect your domain

In the Pages project:

1. Open **Custom domains**.
2. Select **Set up a custom domain**.
3. Enter your domain, such as `kobeyrafferty.com`.
4. Because the domain is already managed by Cloudflare, allow Cloudflare to
   create the required DNS record.
5. Optionally add both the apex domain and `www` version, then redirect one to
   the other.

## Direct upload alternative

You can also upload this project without Git:

1. Zip the contents or use the included ZIP.
2. In **Workers & Pages**, create a Pages project using direct upload.
3. Upload the site files.

Git integration is recommended because future updates deploy automatically.

## File structure

```text
.
├── index.html
├── styles.css
├── script.js
├── favicon.svg
├── _headers
├── robots.txt
├── sitemap.xml
└── assets
    ├── documents
    ├── images
    └── videos
```

## Before sharing with Fab2

- Replace every placeholder.
- Confirm the résumé link works.
- Test on mobile.
- Compress all media.
- Make individual contributions explicit.
- Add measurements and test evidence where possible.
- Remove confidential, proprietary or export-controlled material.
- Update `sitemap.xml` and `robots.txt` with your actual domain.

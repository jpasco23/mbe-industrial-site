# MBE Industrial Website

Static site (HTML/CSS/JS, no build step) for MBE Industrial — electrical automation, programming, instrumentation, termination services, and electrical component supply.

## Structure

- `index.html` — Home
- `about.html` — About Us
- `services.html` — Services
- `products.html` — Products
- `contact.html` — Contact Us
- `css/style.css` — Styles
- `js/script.js` — Nav toggle, active link highlighting
- `CNAME` — Custom domain for GitHub Pages (`mbeindustrial.com`)

## Local preview

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Deployment (GitHub Pages)

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Set the source to the `main` branch, root folder.
4. Under **Custom domain**, confirm it shows `mbeindustrial.com` (from the `CNAME` file) and enable **Enforce HTTPS** once DNS is verified.

### DNS setup at your domain registrar

Point `mbeindustrial.com` at GitHub Pages:

**Apex domain (`mbeindustrial.com`)** — add these A records:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**www subdomain (optional, `www.mbeindustrial.com`)** — add a CNAME record:
```
jpasco23.github.io
```

DNS changes can take up to 24 hours to propagate.

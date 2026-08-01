# Portfolio site — setup

A small, dependency-free, 4-page site. No build step, no framework.

## Files
- `index.html` — homepage (hero + quick links to the other 3 pages)
- `projects.html` — selected work
- `experience.html` — work experience + education
- `about.html` — bio, skills/stack, hobbies, other info
- `style.css` — design tokens (`:root` variables at the top) + all layout
- `script.js` — scroll-reveal animation + date stamp (shared by every page)
- `profile-README.md` — separate template for your GitHub *profile* README
  (goes in a different, special repo — see the comment at the top of that
  file for setup steps)

Contact info (email / GitHub / LinkedIn) lives in the footer "title block"
on every page, so there's no separate contact page.

Every page shares the same `style.css`/`script.js` and includes the same
nav bar and footer — edit those in each `.html` file if you add or rename
a page.

## 1. Customize
Open each `.html` file and replace every `[bracketed placeholder]` — name,
role, bio, projects, work history, education, hobbies, contact links.
Colors and fonts live at the top of `style.css` under `:root`.

## 2. Preview locally
Open `index.html` directly in a browser, or run a quick local server:
```
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

## 3. Deploy with GitHub Pages (uploading via github.com)
1. Create a new GitHub repo (e.g. `portfolio`), set to Public.
2. On the repo page: **Add file → Upload files**, drag in `index.html`,
   `projects.html`, `experience.html`, `about.html`, `style.css`, and
   `script.js` (6 files — skip `profile-README.md`, that one's separate).
3. Commit directly to `main`.
4. Go to **Settings → Pages**.
5. Under "Build and deployment," set **Source** to "Deploy from a branch,"
   branch **main**, folder **/ (root)**, click **Save**.
6. Wait ~1–2 minutes, refresh that page — your live URL will appear:
   `https://YOUR_USERNAME.github.io/portfolio/`

To use a custom domain, add a `CNAME` file with your domain name to the
repo, and point your DNS to GitHub Pages per
[GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

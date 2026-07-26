# Portfolio site — setup

A small, dependency-free, multi-page site. No build step, no framework.

## Files
- `index.html` — homepage (hero + quick links to other pages)
- `about.html` — bio + stack/skills
- `projects.html` — selected work
- `experience.html` — role history
- `contact.html` — contact details
- `style.css` — design tokens (`:root` variables at the top) + all layout
- `script.js` — scroll-reveal animation + date stamp (shared by every page)
- `profile-README.md` — separate template for your GitHub *profile* README
  (see the comment at the top of that file for setup steps)

Every page shares the same `style.css`/`script.js` and includes the same
nav bar and footer "title block" — edit those in each `.html` file if you
add/rename a page.

## 1. Customize
Open each `.html` file and replace every `[bracketed placeholder]` — name,
role, bio, projects, experience, contact links. Colors and fonts live at
the top of `style.css` under `:root`.

## 2. Preview locally
Open `index.html` directly in a browser, or run a quick local server:
```
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

## 3. Deploy with GitHub Pages (uploading via github.com)
1. Create a new GitHub repo (e.g. `portfolio`), set to Public.
2. On the repo page: **Add file → Upload files**, drag in all the files
   above (all six .html/.css/.js files — skip `profile-README.md`, that
   one goes in a different, special repo — see below).
3. Commit directly to `main`.
4. Go to **Settings → Pages**.
5. Under "Build and deployment," set **Source** to "Deploy from a branch,"
   branch **main**, folder **/ (root)**, click **Save**.
6. Wait ~1–2 minutes, refresh that page — your live URL will appear:
   `https://YOUR_USERNAME.github.io/portfolio/`

Because these are plain linked pages (not anchors on one page), the nav
bar takes visitors to `about.html`, `projects.html`, etc. — all of that
already works once the files are uploaded together in the same repo root.

To use a custom domain, add a `CNAME` file with your domain name to the
repo, and point your DNS to GitHub Pages per
[GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

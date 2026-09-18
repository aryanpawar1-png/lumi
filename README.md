# Lumi — Study Buddy Website

A small 3-page site: a home page with a mood log and mode cards, a chatbot
page with a keyword-based chatbot and study-plan builder, and a reflection
page on how AI was used to build it.

## Files
- `lumi.html` — home page
- `chatbot.html` — chatbot + study plan builder
- `reflection.html` — "How I used AI" writeup
- `style.css` — shared stylesheet for all three pages
- `script.js` — shared JavaScript for all three pages

## Before you push
`lumi.html` references `assets/firefly_reading_book.png`, but that image
wasn't included in the export this site was built from. Add your own image
at `assets/firefly_reading_book.png` (an empty `assets/` folder is included),
or update the `<img src="...">` line in `lumi.html` to point somewhere else.

## Deploying with GitHub Pages
1. Create a new GitHub repo and push these files to it (see commands below).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch",
   pick the `main` branch and `/ (root)` folder, then save.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/lumi.html`
   after a minute or two.

```bash
git init
git add .
git commit -m "Initial commit: Lumi study buddy site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

# Your Portfolio

Plain HTML, CSS and JavaScript. No build step, no framework, no npm install.

This is a **multi-page** site — each section lives on its own page (Home, Experience, Education, Skills, Projects, Certificates, Contact). All pages share the same content, styles and engine, so you still only edit **one** file.

## Files

| File | What it's for |
|---|---|
| `data.js` | **Your content.** This is the only file you need to edit. |
| `styles.css` | All styling, shared by every page. |
| `main.js` | The engine that builds the nav/footer and renders `data.js`. Leave it alone. |
| `index.html` | Home page (the intro / hero). |
| `experience.html`, `education.html`, `skills.html`, `projects.html`, `certificates.html`, `contact.html` | One page per section. |
| `assets/` | Your photo, company logos, project screenshots. |

The nav bar, footer and the "Next:" buttons link the pages together, so a visitor can either use the top menu or walk through them in order. You don't need to touch any of the `.html` files — they're just thin shells that the engine fills in from `data.js`.

## Getting started

1. Open `data.js` in any text editor (VS Code, Notepad, whatever).
2. Replace the placeholder text between the quotes with your own.
3. Drop your photo into `assets/` as `profile.jpg`.
4. Double-click `index.html` to see it in your browser.

To add another job, project, or certificate: copy one whole `{ ... }` block, paste it below, and edit it. Keep the comma between blocks.

## Images

Every image field accepts either a local file or a URL:

```js
logo: "assets/company1.png"
logo: "https://example.com/logo.png"
```

Leave it as `""` and the image is skipped. A broken path hides itself rather than showing a broken icon, so nothing looks broken while you're still filling things in.

For skill icons, use any name from the devicon set:

```
https://cdn.jsdelivr.net/gh/devicons/devicon/icons/NAME/NAME-original.svg
```

Swap `NAME` for `python`, `tensorflow`, `docker`, `figma`, and so on.

## Changing the colors

Top of `styles.css`, in the `:root` block:

```css
--accent:#2563eb;   /* every button, link and highlight */
```

Change that one value and the whole site follows.

## Publishing on GitHub Pages

1. Create a repository named `portfolio`.
2. Upload all these files to it (drag and drop works on github.com).
3. Go to **Settings → Pages**, set Source to `main` branch, `/ (root)`, and save.
4. A minute later your site is live at `https://YOURUSERNAME.github.io/portfolio/`.

## The contact form

It opens the visitor's email app with the message pre-filled — no server required.

If you'd rather receive messages straight to your inbox, sign up at [formspree.io](https://formspree.io), get your form ID, and replace the submit handler at the bottom of `main.js` with a `fetch` POST to your Formspree URL.

# Edward Prince Akachukwu — Interactive Biography

A chapter-based, book-style portfolio site. Built with React + Vite + Tailwind CSS.

## Editing your content

Everything you'll want to personalize lives in **one file**:

```
src/data/biography.js
```

Anything written like `[Add ...]` is a placeholder — replace the text inside
the brackets with your own words. Nothing else in the codebase needs to
change for basic content updates.

## Running it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Building for production

```bash
npm run build
npm run preview
```

The production files will be in the `dist/` folder — deploy that folder to
any static host (Vercel, Netlify, GitHub Pages, etc.).

## How the navigation works

- **Desktop**: a vertical chapter rail on the right (hover to see labels),
  a progress line, and prev/next controls bottom-left.
- **Mobile**: a compact top bar showing the current chapter, tap the menu
  icon for a full-screen chapter list.
- **Keyboard**: Left/Right arrow keys (or Page Up/Down) move between chapters.
- **Mouse wheel**: scrolling down/up moves to the next/previous chapter.
- **Touch**: swipe left/right on mobile.

## The contact form

The contact form in the final chapter is currently **front-end only** — it
does not send an email anywhere. To make it functional, wire it up to a
service like [Formspree](https://formspree.io) or
[EmailJS](https://www.emailjs.com/), or build a small backend endpoint.

## Adding real project case studies, photos, etc.

- Project details live in the `projectsChapter` object in `biography.js`.
- To add real photos anywhere on the site, drop image files into the
  `public/` folder and reference them as `/your-image.jpg` in the relevant
  chapter component.

# Cover Letter Site

This is a minimal Vue-based site for a personal cover letter. The page now uses Tailwind CSS for styling alongside Vue (Composition API) via CDN and can be deployed to GitHub Pages.

## Local Preview
Open `index.html` in a browser to see the page. The site automatically matches
your operating system's light or dark mode. You can also use the **dark mode**
button to switch themes manually and the **contact toggle** to reveal contact
details.

## Deploy to GitHub Pages
1. Push the contents of this repository to GitHub.
2. In the repository settings, enable **GitHub Pages** and select the `main` branch (or the branch you use) as the source.
3. Your site will be available at `https://chungchung234.github.io/cover_letter/`.

You can customize the contents in `main.js` and extend the Tailwind classes in `index.html` or add custom styles in `style.css`.

## Mobile & Hybrid Usage
The site now provides a `manifest.json` and registers a service worker so it can
be installed on mobile devices like a native app. Load `index.html` in a modern
browser to add it to your home screen and access the page offline.

## Responsive Layout
The layout now adapts from mobile to desktop sizes. On small screens the navigation menu collapses behind a hamburger button, while larger screens show the full menu.

## Personalization
Edit the values near the top of `main.js` (around lines 5–11) to update your
name, role, location, and other details shown on the site. You can also modify
`email`, `phone` and `github` there if you wish to publish different contact
information.

The hero section in `index.html` (around line 38) loads an image named
`profile.jpg`. Replace that file in the project root with your own photograph or
adjust the `src` attribute if you prefer a different path. If you do not want to
include a photo, you can remove the `<img>` tag entirely.

Before sharing the page publicly, you may remove or anonymize sensitive data
from `main.js` such as your phone number or email address.

## Running Tests
To run the Python unit tests, execute:

```bash
python -m unittest
```

This will run all tests found in the `tests/` folder.

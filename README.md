# Cover Letter Site

This is a minimal Vue-based site for a personal cover letter. The page uses Tailwind CSS for styling via CDN and can be deployed to GitHub Pages.

## Local Preview
Open `index.html` in a browser to see the page. The site automatically matches
your operating system's light or dark mode. A **dark mode** toggle with a
sun/moon icon is fixed to the top right corner for quick access. Use it to
switch themes manually and the **contact toggle** to reveal a styled contact
card with your email, phone, and address. The selected mode is saved to local
storage so your preference is kept when you reload the page.

## Deploy to GitHub Pages
1. Push the contents of this repository to GitHub.
2. In the repository settings, enable **GitHub Pages** and select the `main` branch (or the branch you use) as the source.
3. Your site will be available at `https://<your-username>.github.io/cover_letter/`.

You can customize the contents in `main.js` and extend the Tailwind classes in `index.html` or add custom styles in `style.css`.

## Mobile & Hybrid Usage
The site provides a `manifest.json` and registers a service worker so it can
be installed on mobile devices like a native app. Load `index.html` in a modern
browser to add it to your home screen and access the page offline.

## Responsive Layout
The layout adapts from mobile to desktop sizes. On small screens the navigation menu collapses behind a hamburger button, while larger screens show the full menu.

## Enhanced Readability
Content sections are wrapped with Tailwind's `prose` classes for better typography. A floating **scroll to top** button fades in after scrolling down, letting you quickly return to the beginning of the page.

## Personalization
Edit the values near the top of `main.js` (around lines 5–11) to update your
name, role, location, and other details shown on the site. You can also modify `email`,
`phone` and `github` there if you wish to publish different contact
information.

The hero section in `index.html` (around line 103) loads an image named
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

This command runs all tests located in the `tests/` folder, including a check
that `profile.jpg` exists and is not empty.

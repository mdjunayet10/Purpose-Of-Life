# Purpose of Life

A quiet guided-reflection website that asks one question at a time about life, purpose, death, happiness, morality, justice, and what comes after.

The website is designed to feel like a private conversation, not a normal article or quiz. Each answer leads to a different next question, helping users reflect step by step.

Live site:

```txt
https://purpose-of-life.netlify.app/
```

---

## About the Project

**Purpose of Life** starts with simple universal questions:

- What are you chasing?
- What comes after success?
- Can temporary pleasure fully satisfy the heart?
- Is death the end?
- Who decides right and wrong?
- Can injustice be ignored forever?
- Is there final accountability?

The beginning stays simple and mysterious so that anyone can open the site without feeling judged or pushed away.

Later, based on the user’s answers, the website can guide them toward deeper reflection about the Creator, final justice, the afterlife, Paradise, Hell, and Islam.

---

## Features

- One-question-at-a-time guided experience
- Branching question paths based on user answers
- English and Bangla language support
- Simple language for general users
- Mobile-friendly responsive design
- Local progress saving
- Continue previous reflection option
- Main menu, back, and restart controls
- Static website with no backend
- Netlify-ready deployment
- Link to IslamQUIZ for learning correct aqeedah

---

## Live Website

```txt
https://purpose-of-life.netlify.app/
```

---

## Related Project

The final learning path can guide users to **IslamQUIZ**, an Islamic quiz project focused on correct aqeedah.

```txt
https://islamquiz-app.web.app/
```

---

## Tech Stack

This project is intentionally simple.

- HTML
- CSS
- JavaScript
- LocalStorage
- Netlify Hosting

No backend, database, login system, or tracking system is required for the current version.

---

## Run Locally

Clone the repository:

```bash
git clone https://github.com/mdjunayet10/Purpose-Of-Life.git
cd Purpose-Of-Life
```

Run with a local server:

```bash
python3 -m http.server 5173
```

Then open:

```txt
http://localhost:5173
```

You can also open the folder in VS Code and use the **Live Server** extension.

---

## Deploy to Netlify

From the project folder, run:

```bash
netlify deploy --prod --dir .
```

The production site is:

```txt
https://purpose-of-life.netlify.app/
```

---

## Project Structure

```txt
Purpose-Of-Life/
├── index.html
├── styles.css
├── script.js
├── site.webmanifest
├── favicon.ico
├── favicon.svg
├── icon-192.png
├── icon-512.png
├── apple-touch-icon.png
├── data/
│   └── conversationTree.js
├── README.md
└── LICENSE
```

---

## Content Direction

The website follows a gradual flow:

```txt
Worldly goals
→ Inner emptiness
→ Death
→ Morality
→ Justice
→ The Creator
→ Accountability
→ Afterlife
→ Islam
→ Tawheed
→ Practical next step
```

The early part avoids direct religious wording so that non-Muslim users, doubtful users, and people far from religion can continue reflecting without turning away immediately.

Islamic content appears later when the user is more prepared, or earlier if the user identifies as Muslim.

---

## Language Style

The website supports:

- English
- বাংলা

The language should remain simple and easy to understand.

The goal is not to sound academic or complicated. The goal is to make the user think deeply using clear words.

Example:

```txt
Do you think life has a purpose?
আপনি কি মনে করেন জীবনের কোনো উদ্দেশ্য আছে?
```

---

## Privacy

This is a static website.

The current version:

- does not require login
- does not collect personal information
- does not use a database
- does not send answers to a server
- stores progress only in the user’s browser using LocalStorage

---

## Future Improvements

Possible future updates:

- More refined question paths
- More Bangla polishing
- Better mobile animations
- More afterlife reflection sections
- More Muslim-specific reminders
- More non-Muslim seeker paths
- Better result summaries based on answers
- Optional shareable reflection result
- More polished web app icon and install experience

---

## Important Note

This project is not meant to force anyone. It is meant to invite people to think honestly.

The best use of the website is to answer slowly, reflect deeply, and continue one step at a time.

---

## License

This project is open-source under the MIT License.

Copyright © 2026 Md Junayet.

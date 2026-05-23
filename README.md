# Purpose of Life

A quiet guided-reflection website that asks one question at a time and adapts the next question based on the user's answer.

Live site:

```txt
https://purpose-of-life.netlify.app/
```

## Run locally

Because this is a static website, you can open it with a local server:

```bash
python3 -m http.server 5173
```

Then open:

```txt
http://localhost:5173
```

## Deploy to Netlify

From the project folder:

```bash
netlify deploy --prod --dir .
```

## Editing the conversation

Edit:

```txt
data/conversationTree.js
```

Every visible conversation text should support English and Bangla:

```js
question: {
  en: "Question in English",
  bn: "বাংলা প্রশ্ন"
}
```

The current flow is designed to stay mysterious at the beginning, then gradually move through life goals, death, morality, justice, worldview, the Hereafter, Islam, Tawhid, and practical next steps.

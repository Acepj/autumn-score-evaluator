# Autumn Score Evaluator

A simple, beginner-friendly webpage (HTML + CSS + JavaScript) that evaluates a student's score,
with a minimalist autumn theme.

## How to use

1. Open `index.html` in any web browser (double-click it, or right-click → Open with).
2. Answer the pop-up questions: your name, your score, and whether to continue.
3. The result is displayed directly on the page.

## Score guide

| Score              | Remark        |
| ------------------ | ------------- |
| 90 – 100           | Excellent     |
| 75 – 89            | Passed        |
| 1 – 74             | Failed        |
| Anything else      | Invalid score |

"Anything else" includes: empty input, non-numeric input, `0`, negative numbers, and scores above 100.
If the name is left empty, the page shows **Unknown Student** instead.

## Files

- `index.html` — the page structure
- `style.css` — the minimalist autumn theme
- `script.js` — the prompts, validation, and score evaluation logic

No libraries or frameworks are used — just open the HTML file and it works.

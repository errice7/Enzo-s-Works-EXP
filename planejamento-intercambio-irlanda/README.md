# Próximo destino · Irlanda

Private, owner-only exchange planner for Enzo. Static HTML, CSS and ES modules; no external scripts, tracking, database or API keys. Browser localStorage holds budget and checklist; export provides a text backup. Sources and assumptions appear in the page.

Run `npm run build` and `npm start`. Use `npm test` for financial model tests. The built `dist` directory and `.openai/hosting.json` are packaged for Sites. Hosting access control is enforced by Sites; noindex is an additional indexing preference, not authentication.

Financial model includes full-duration costs, whole course cycles, living costs, refundable deposit held as cash, contingency and editable exchange margin. Proof of funds is not double-counted; a top-up appears if maintenance plus reserve is insufficient. Employment income is illustrative and never deducted. The deposit must be adjusted to the actual rental contract. Contributions start next month and end the month before departure. Legal and price data checked 2026-09-25; no automatic refresh or 2027 guarantees.

Photography: Francesco Dondi, Unsplash, https://unsplash.com/photos/090h1byf9rI . Downloaded and bundled locally.

Validation: eight financial model tests passed. Chromium checks covered desktop rendering, 360/390/768 px widths with all guide tabs, budget presets, 24-month duration, oversized savings, wage age groups, restricted 40-hour warning, keyboard tab navigation, checklist and budget persistence, invalid input handling and text download. No page errors or missing local assets. Screenshots reviewed at desktop and mobile sizes.

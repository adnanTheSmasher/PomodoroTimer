# Pomodoro Timer – Answers

## How to run

### Run locally
1. Download or clone the repository.
2. Make sure all files are in the same folder:
   - `index.html`
   - `style.css`
   - `script.js`
   - `bg.mp3`
   - `alertSound.mp3`

3. Open `index.html` in any modern browser.

No installation or build tools are required because the project uses plain HTML, CSS, and JavaScript.

### Deployment
The project is deployed using GitHub Pages.

Live URL:
`https://adnanthesmasher.github.io/PomodoroTimer/`

---

# Stack & design choices

## Frontend stack

I chose plain HTML, CSS, and JavaScript because this project is relatively small and does not require a framework like React or Vue. Using vanilla JavaScript kept the project lightweight, easy to understand, and fast to load without any build process or dependencies.

It also helped me focus on core browser concepts such as:
- DOM manipulation
- Event handling
- CSS animations
- Timer logic with `setInterval()`

---

## Design choice 1 – Circular progress timer

I used an SVG circular progress ring around the timer display instead of a normal horizontal progress bar.

This affects:
- `.progress-ring_circle`
- `updateCircle()` function in `script.js`

Reason:
The circular ring visually communicates elapsed time more naturally for a countdown timer. It also keeps the interface compact and centered, making the timer the primary focus of the application.

The SVG approach allowed smooth animated progress updates using:
strokeDasharray
strokeDashoffset
instead of repeatedly manipulating width values in CSS.

---

## Design choice 2 – Centered single-card layout

I vertically and horizontally centered the entire application using Flexbox.

display: flex;
justify-content: center;
align-items: center;
height: 100vh;


---

## Responsive & accessibility
### Responsive behavior
On a 360px mobile screen
The layout stays vertically centered.
Buttons stack naturally due to flexible spacing.
The circular timer remains visible without horizontal scrolling.
Touch targets remain large enough for mobile interaction.
### On a 1440px laptop screen
The application stays centered rather than stretching across the screen.
Large empty margins help maintain focus on the timer.
The UI keeps consistent proportions because the timer size is fixed.

----

## AI usage
### AI tools used

I used ChatGPT during development.

#### What I asked
Help debugging why the timer would not start
Help identifying issues in SVG progress ring logic
Suggestions for improving the Pomodoro timer UI
Guidance for deploying with GitHub Pages
Suggestions for structuring this answers document

----
## Honest gap

One thing that is not fully polished is mobile responsiveness for very small devices.

Although the layout works on phones, the timer size and spacing are fixed instead of scaling dynamically based on screen width.

### With another day, I would:

add responsive sizing using media queries
improve spacing on smaller screens
add animations/transitions between work and break sessions
add local storage so session counts persist after refresh
improve accessibility with ARIA labels and visible focus states
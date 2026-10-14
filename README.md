# Memory Game 🎮

A browser-based Memory game built with TypeScript, Vite, and SCSS.

The game can be played by two players or against a computer opponent with different difficulty levels.

## Features

- Two game modes:
  - Player vs Player
  - Player vs Bot
- Three bot difficulty levels:
  - Easy
  - Medium
  - Hard
- Three board sizes:
  - 4 × 4 (8 pairs)
  - 4 × 6 (12 pairs)
  - 6 × 6 (18 pairs)
- Four card themes:
  - Code Vibes
  - DA Projects
  - Food
  - Gaming
- Customizable player colors (blue and orange)
- Coin toss to determine the starting player
- Animated card flipping
- Score tracking and active player indicator
- Winner announcement at the end of each game
- Rematch functionality
- Exit confirmation dialog
- Responsive layout

## Technologies

- HTML5
- TypeScript
- SCSS
- Vite

## Installation

### Prerequisites

Make sure Node.js and npm are installed.

### Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd Memory
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in the terminal.

## How to Play

1. Click **Start Game** on the home screen.
2. Choose your preferred settings:
   - Game mode
   - Player color
   - Board size
   - Card theme
   - Bot difficulty (if playing against the bot)
3. Start the game.
4. A coin toss determines which player begins.
5. Flip two cards to find matching pairs.
6. If the cards match, you earn one point and play again.
7. If the cards do not match, the turn passes to the other player.
8. The game ends when all pairs have been found.
9. The player with the most points wins.

## Bot Difficulty

| Difficulty | Behavior |
|---|---|
| Easy | Selects cards randomly |
| Medium | Uses limited memory and sometimes forgets cards |
| Hard | Remembers previously revealed cards |

## Production Build

To create an optimized production build, run:

```bash
npm run build
```

The generated files will be placed in the `dist` directory.

## Project Structure

```text
Memory/
├── src/
│   ├── assets/
│   ├── game/
│   ├── settings/
│   ├── styles/
│   ├── templates/
│   └── main.ts
├── index.html
├── package.json
└── README.md
```

## Author

Created as a web development project.
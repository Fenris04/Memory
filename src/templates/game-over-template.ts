import { getWinner } from '../game/game-state';

import type {
  GameState,
  PlayerNumber
} from '../game/game-state';

import type {
  PlayerColor
} from '../settings/game-settings';

/**
 * Returns the opposite player color.
 *
 * @param color - The selected color of Player 1.
 * @returns The color assigned to Player 2.
 */
function getOppositeColor(color: PlayerColor): PlayerColor {
  return color === 'blue' ? 'orange' : 'blue';
}

/**
 * Returns the winner's assigned color.
 *
 * @param winner - The winning player.
 * @param playerColor - The selected color of Player 1.
 * @returns The winning player's color.
 */
function getWinnerColor(
  winner: PlayerNumber,
  playerColor: PlayerColor
): PlayerColor {
  return winner === 1
    ? playerColor
    : getOppositeColor(playerColor);
}

/**
 * Creates the result heading.
 *
 * @param winner - The winning player or null.
 * @returns The result heading markup.
 */
function renderResultHeading(winner: PlayerNumber | null): string {
  const MESSAGE: string = winner === null
    ? "IT'S A DRAW!"
    : `PLAYER ${winner} WINS!`;

  return `<h1 class="game-over__result">${MESSAGE}</h1>`;
}

/**
 * Creates the result illustration.
 *
 * @param winner - The winning player or null.
 * @returns The illustration markup.
 */
function renderResultIcon(winner: PlayerNumber | null): string {
  const ICON: string = winner === null ? '⚖️' : '🏆';

  return `
    <div class="game-over__icon" aria-hidden="true">
      ${ICON}
    </div>
  `;
}

/**
 * Creates the final score display.
 *
 * @param state - The completed game state.
 * @returns The final score markup.
 */
function renderFinalScores(state: GameState): string {
  return `
    <div class="game-over__scores">
      <p>Player 1: <strong>${state.playerOneScore}</strong></p>
      <p>Player 2: <strong>${state.playerTwoScore}</strong></p>
    </div>
  `;
}

/**
 * Creates the action buttons.
 *
 * @returns The action button markup.
 */
function renderResultActions(): string {
  return `
    <div class="game-over__actions">
      <button id="rematch-button" type="button">
        Rematch
      </button>

      <button id="home-button" type="button">
        Back to Home
      </button>
    </div>
  `;
}

/**
 * Creates the completed game's result screen.
 *
 * @param state - The completed game state.
 * @param playerColor - The selected color of Player 1.
 * @returns HTML markup for the result screen.
 */
export function renderGameOver(
  state: GameState,
  playerColor: PlayerColor
): string {
  const WINNER: PlayerNumber | null = getWinner(state);

  const RESULT_COLOR: PlayerColor | 'draw' = WINNER === null
    ? 'draw'
    : getWinnerColor(WINNER, playerColor);

  return `
    <section class="game-over" data-result="${RESULT_COLOR}">
      ${renderResultHeading(WINNER)}
      ${renderResultIcon(WINNER)}

      <h2 class="game-over__subtitle">Final Score</h2>

      ${renderFinalScores(state)}
      ${renderResultActions()}
    </section>
  `;
}
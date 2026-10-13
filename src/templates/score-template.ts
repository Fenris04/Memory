import type { GameState } from '../game/game-state';
import type { PlayerColor } from '../settings/game-settings';

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
 * Creates the scoreboard for both players.
 *
 * Highlights the player whose turn is active.
 *
 * @param state - The current game state.
 * @param playerColor - The selected color of Player 1.
 * @returns HTML markup for the scoreboard.
 */
export function renderScoreboard(
  state: GameState,
  playerColor: PlayerColor
): string {
  const SECOND_COLOR: PlayerColor = getOppositeColor(playerColor);

  return `
    <div class="scoreboard" aria-live="polite">
      <div class="scoreboard__player" data-color="${playerColor}">
        <h2>Player 1</h2>
        <p>Score: ${state.playerOneScore}</p>
      </div>

      <p class="scoreboard__turn">
        Player ${state.currentPlayer}'s Turn
      </p>

      <div class="scoreboard__player" data-color="${SECOND_COLOR}">
        <h2>Player 2</h2>
        <p>Score: ${state.playerTwoScore}</p>
      </div>
    </div>
  `;
}
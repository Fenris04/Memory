import { getPlayerName } from '../game/player-utils';

import type { GameState } from '../game/game-state';
import type {
  GameMode,
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
 * Creates the scoreboard for both players.
 *
 * Highlights the player whose turn is active.
 *
 * @param state - The current game state.
 * @param playerColor - The selected color of Player 1.
 * @param gameMode - The selected game mode.
 * @returns HTML markup for the scoreboard.
 */
export function renderScoreboard(
  state: GameState,
  playerColor: PlayerColor,
  gameMode: GameMode
): string {
  const SECOND_COLOR: PlayerColor = getOppositeColor(playerColor);
  const FIRST_NAME: string = getPlayerName(1, gameMode);
  const SECOND_NAME: string = getPlayerName(2, gameMode);
  const ACTIVE_NAME: string = getPlayerName(state.currentPlayer, gameMode);

  return `
    <div class="scoreboard" aria-live="polite">
      <div class="scoreboard__player" data-color="${playerColor}">
        <h2>${FIRST_NAME}</h2>
        <p>Score: ${state.playerOneScore}</p>
      </div>

      <p class="scoreboard__turn">
        ${ACTIVE_NAME}'s Turn
      </p>

      <div class="scoreboard__player" data-color="${SECOND_COLOR}">
        <h2>${SECOND_NAME}</h2>
        <p>Score: ${state.playerTwoScore}</p>
      </div>
    </div>
  `;
}

import { getPlayerName } from '../game/player-utils';
import type { GameState } from '../game/game-state';
import type { GameMode, PlayerColor } from '../settings/game-settings';

/**
 * Returns the opposite player color.
 *
 * @param color - The selected color of Player 1.
 * @returns The opposite color for Player 2.
 */
function getOppositeColor(color: PlayerColor): PlayerColor {
  return color === 'blue' ? 'orange' : 'blue';
}

/**
 * Renders the player symbol used in the scoreboard.
 *
 * @returns The player icon HTML.
 */
function renderPlayerIcon(): string {
  return `
    <svg
      class="scoreboard__player-icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="5"
        r="3"
        stroke="currentColor"
        stroke-width="2"
      />
      <path
        d="M9 9H15L17 15L15 17L18 21H6L9 17L7 15L9 9Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `;
}

/**
 * Renders a player's score.
 *
 * @param name - The displayed player name.
 * @param score - The player's current score.
 * @param color - The player's assigned color.
 * @param isActive - Whether the player is currently active.
 * @returns The player score HTML.
 */
function renderPlayerScore(
  name: string,
  score: number,
  color: PlayerColor,
  isActive: boolean
): string {
  const ACTIVE_CLASS: string = isActive ? 'is-active' : '';
  const COLOR_NAME: string = color === 'blue' ? 'Blue' : 'Orange';

  return `
    <div
      class="scoreboard__player scoreboard__player--${color} ${ACTIVE_CLASS}"
      aria-label="${name}: ${score} points"
    >
      ${renderPlayerIcon()}

      <span class="scoreboard__color-name">${COLOR_NAME}</span>

      <span class="scoreboard__score">${score}</span>
    </div>
  `;
}

/**
 * Renders the animated thinking indicator for the bot.
 *
 * @param state - The current game state.
 * @param gameMode - The selected game mode.
 * @returns The indicator HTML or an empty string.
 */
function renderBotThinking(
  state: GameState,
  gameMode: GameMode
): string {
  if (gameMode !== 'player-vs-bot' || state.currentPlayer !== 2) {
    return '';
  }

  return `
    <span class="scoreboard__thinking" role="status">
      <span>Bot is thinking</span>

      <span class="scoreboard__thinking-dots" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </span>
  `;
}

/**
 * Renders the current player indicator.
 *
 * @param state - The current game state.
 * @param gameMode - The selected game mode.
 * @param playerColor - The selected color of Player 1.
 * @returns The current player HTML.
 */
function renderCurrentTurn(
  state: GameState,
  gameMode: GameMode,
  playerColor: PlayerColor
): string {
  const ACTIVE_NAME: string = getPlayerName(
    state.currentPlayer,
    gameMode
  );

  const ACTIVE_COLOR: PlayerColor = state.currentPlayer === 1
    ? playerColor
    : getOppositeColor(playerColor);

  return `
    <div class="scoreboard__turn">
      <span class="scoreboard__turn-label">Current player:</span>

      <span
        class="scoreboard__current-player scoreboard__current-player--${ACTIVE_COLOR}"
        aria-label="${ACTIVE_NAME}"
        title="${ACTIVE_NAME}"
      >
        ${renderPlayerIcon()}
      </span>

      ${renderBotThinking(state, gameMode)}
    </div>
  `;
}

/**
 * Renders the scoreboard for the current game.
 *
 * @param state - The current game state.
 * @param playerColor - The selected color of Player 1.
 * @param gameMode - The selected game mode.
 * @returns The complete scoreboard HTML.
 */
export function renderScoreboard(
  state: GameState,
  playerColor: PlayerColor,
  gameMode: GameMode
): string {
  const SECOND_COLOR: PlayerColor = getOppositeColor(playerColor);

  const FIRST_PLAYER: string = renderPlayerScore(
    getPlayerName(1, gameMode),
    state.playerOneScore,
    playerColor,
    state.currentPlayer === 1
  );

  const SECOND_PLAYER: string = renderPlayerScore(
    getPlayerName(2, gameMode),
    state.playerTwoScore,
    SECOND_COLOR,
    state.currentPlayer === 2
  );

  const ORANGE_SCORE: string = playerColor === 'orange'
    ? FIRST_PLAYER
    : SECOND_PLAYER;

  const BLUE_SCORE: string = playerColor === 'blue'
    ? FIRST_PLAYER
    : SECOND_PLAYER;

  return `
    <div class="scoreboard" aria-live="polite">
      <div class="scoreboard__scores">
        ${ORANGE_SCORE}
        ${BLUE_SCORE}
      </div>

      ${renderCurrentTurn(state, gameMode, playerColor)}
    </div>
  `;
}

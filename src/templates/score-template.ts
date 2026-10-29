
import { getPlayerName } from '../game/player-utils';
import type { GameState, PlayerNumber } from '../game/game-state';
import type { GameMode, PlayerColor } from '../settings/game-settings';

const PLAYER_ONE: PlayerNumber = 1;
const PLAYER_TWO: PlayerNumber = 2;

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
 * Renders the head of the player symbol.
 *
 * @returns The SVG circle markup.
 */
function renderPlayerIconHead(): string {
  return `
    <circle
      cx="12"
      cy="5"
      r="3"
      stroke="currentColor"
      stroke-width="2"
    />
  `;
}

/**
 * Renders the body of the player symbol.
 *
 * @returns The SVG path markup.
 */
function renderPlayerIconBody(): string {
  return `
    <path
      d="M9 9H15L17 15L15 17L18 21H6L9 17L7 15L9 9Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  `;
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
      ${renderPlayerIconHead()}
      ${renderPlayerIconBody()}
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
 * Renders the animated dots for the bot thinking indicator.
 *
 * @returns The animated dots HTML.
 */
function renderThinkingDots(): string {
  return `
    <span class="scoreboard__thinking-dots" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </span>
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
  if (gameMode !== 'player-vs-bot' || state.currentPlayer !== PLAYER_TWO) {
    return '';
  }

  return `
    <span class="scoreboard__thinking" role="status">
      <span>Bot is thinking</span>
      ${renderThinkingDots()}
    </span>
  `;
}

/**
 * Returns the assigned color of the active player.
 *
 * @param state - The current game state.
 * @param playerColor - The selected color of Player 1.
 * @returns The active player's color.
 */
function getActivePlayerColor(
  state: GameState,
  playerColor: PlayerColor
): PlayerColor {
  return state.currentPlayer === PLAYER_ONE
    ? playerColor
    : getOppositeColor(playerColor);
}

/**
 * Renders the active player's symbol.
 *
 * @param name - The active player's display name.
 * @param color - The active player's color.
 * @returns The current player icon HTML.
 */
function renderActivePlayerIcon(
  name: string,
  color: PlayerColor
): string {
  return `
    <span
      class="scoreboard__current-player scoreboard__current-player--${color}"
      aria-label="${name}"
      title="${name}"
    >
      ${renderPlayerIcon()}
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
  const ACTIVE_NAME: string = getPlayerName(state.currentPlayer, gameMode);
  const ACTIVE_COLOR: PlayerColor = getActivePlayerColor(state, playerColor);

  return `
    <div class="scoreboard__turn">
      <span class="scoreboard__turn-label">Current player:</span>
      ${renderActivePlayerIcon(ACTIVE_NAME, ACTIVE_COLOR)}
      ${renderBotThinking(state, gameMode)}
    </div>
  `;
}

/**
 * Renders the score display for a specific player.
 *
 * @param player - The player number.
 * @param score - The player's current score.
 * @param color - The player's assigned color.
 * @param state - The current game state.
 * @param gameMode - The selected game mode.
 * @returns The player's score HTML.
 */
function renderScoreForPlayer(
  player: PlayerNumber,
  score: number,
  color: PlayerColor,
  state: GameState,
  gameMode: GameMode
): string {
  return renderPlayerScore(
    getPlayerName(player, gameMode),
    score,
    color,
    state.currentPlayer === player
  );
}

/**
 * Renders both player scores in orange-blue order.
 *
 * @param state - The current game state.
 * @param playerColor - The selected color of Player 1.
 * @param gameMode - The selected game mode.
 * @returns The ordered score markup.
 */
function renderOrderedScores(
  state: GameState,
  playerColor: PlayerColor,
  gameMode: GameMode
): string {
  const FIRST_SCORE: string = renderScoreForPlayer(
    PLAYER_ONE, state.playerOneScore, playerColor, state, gameMode
  );
  const SECOND_SCORE: string = renderScoreForPlayer(
    PLAYER_TWO, state.playerTwoScore, getOppositeColor(playerColor),
    state, gameMode
  );

  return playerColor === 'orange'
    ? FIRST_SCORE + SECOND_SCORE
    : SECOND_SCORE + FIRST_SCORE;
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
  return `
    <div class="scoreboard" aria-live="polite">
      <div class="scoreboard__scores">
        ${renderOrderedScores(state, playerColor, gameMode)}
      </div>
      ${renderCurrentTurn(state, gameMode, playerColor)}
    </div>
  `;
}

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
    <p class="scoreboard__thinking" role="status">
      <span>Bot is thinking</span>
      <span class="scoreboard__thinking-dots" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </p>
  `;
}

/**
 * Renders the current turn information.
 *
 * @param state - The current game state.
 * @param gameMode - The selected game mode.
 * @returns The turn indicator HTML.
 */
function renderCurrentTurn(
  state: GameState,
  gameMode: GameMode
): string {
  const ACTIVE_NAME: string = getPlayerName(
    state.currentPlayer,
    gameMode
  );

  return `
    <div class="scoreboard__turn">
      <p class="scoreboard__turn-label">${ACTIVE_NAME}'s Turn</p>
      ${renderBotThinking(state, gameMode)}
    </div>
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

  return `
    <div class="scoreboard__player scoreboard__player--${color} ${ACTIVE_CLASS}">
      <h2 class="scoreboard__name">${name}</h2>
      <p class="scoreboard__score">${score}</p>
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
  const FIRST_NAME: string = getPlayerName(1, gameMode);
  const SECOND_NAME: string = getPlayerName(2, gameMode);

  return `
    <div class="scoreboard" aria-live="polite">
      ${renderPlayerScore(FIRST_NAME, state.playerOneScore, playerColor, state.currentPlayer === 1)}
      ${renderCurrentTurn(state, gameMode)}
      ${renderPlayerScore(SECOND_NAME, state.playerTwoScore, SECOND_COLOR, state.currentPlayer === 2)}
    </div>
  `;
}
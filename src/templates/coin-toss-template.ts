
import { getPlayerName } from '../game/player-utils';
import type { PlayerNumber } from '../game/game-state';
import type { GameMode } from '../settings/game-settings';

/**
 * Creates the two faces of the coin.
 *
 * @returns HTML markup for the coin faces.
 */
function renderCoinFaces(): string {
  return `
    <div class="coin-toss__coin-face coin-toss__coin-front">
      1
    </div>

    <div class="coin-toss__coin-face coin-toss__coin-back">
      2
    </div>
  `;
}

/**
 * Creates the animated coin element.
 *
 * @returns HTML markup for the coin animation.
 */
function renderCoin(): string {
  return `
    <div class="coin-toss__coin" aria-hidden="true">
      <div class="coin-toss__coin-inner">
        ${renderCoinFaces()}
      </div>
    </div>
  `;
}

/**
 * Creates the animated coin toss screen.
 *
 * @returns HTML markup for the coin toss animation.
 */
export function renderCoinToss(): string {
  return `
    <div class="coin-toss" aria-label="Coin toss">
      <h1 class="coin-toss__title">Who starts?</h1>

      ${renderCoin()}

      <p class="coin-toss__message" role="status">
        Tossing a coin...
      </p>
    </div>
  `;
}

/**
 * Renders the starting player's coin toss result.
 *
 * @param player - The player selected by the coin toss.
 * @param gameMode - The selected game mode.
 * @returns The result message as HTML.
 */
export function renderCoinResult(
  player: PlayerNumber,
  gameMode: GameMode
): string {
  const PLAYER_NAME: string = getPlayerName(player, gameMode);

  return `${PLAYER_NAME} starts!`;
}

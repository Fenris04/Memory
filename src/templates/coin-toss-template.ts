import type { PlayerNumber } from '../game/game-state';

/**
 * Creates the animated coin toss screen.
 *
 * @returns HTML markup for the coin toss animation.
 */
export function renderCoinToss(): string {
  return `
    <section class="coin-toss" aria-label="Coin toss">
      <h1 class="coin-toss__title">Who starts?</h1>

      <div class="coin-toss__coin" aria-hidden="true">
        <div class="coin-toss__coin-inner">
          <div class="coin-toss__coin-face coin-toss__coin-front">
            1
          </div>

          <div class="coin-toss__coin-face coin-toss__coin-back">
            2
          </div>
        </div>
      </div>

      <p class="coin-toss__message" role="status">
        Tossing a coin...
      </p>
    </section>
  `;
}

/**
 * Creates the message announcing the starting player.
 *
 * @param player - The player selected by the coin toss.
 * @returns HTML markup for the result message.
 */
export function renderCoinResult(player: PlayerNumber): string {
  return `Player ${player} starts!`;
}
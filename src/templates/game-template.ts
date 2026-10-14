import type { MemoryCard } from '../game/card-types';
import type { GameState } from '../game/game-state';
import type { GameSettings } from '../settings/game-settings';

import { renderScoreboard } from './score-template';

/**
 * Creates the HTML markup for a single Memory card.
 *
 * @param card - The card data.
 * @returns HTML markup for one interactive card.
 */
function renderCard(card: MemoryCard): string {
  return `
    <button
      class="game__card"
      type="button"
      data-card-id="${card.id}"
      aria-label="Flip card ${card.id + 1}"
      aria-pressed="false"
    >
      <span class="game__card-inner">
        <span class="game__card-face game__card-back">
          <img src="${card.backImage}" alt="" />
        </span>
        <span class="game__card-face game__card-front">
          <img src="${card.frontImage}" alt="" />
        </span>
      </span>
    </button>
  `;
}

/**
 * Creates the HTML markup for the game board.
 *
 * @param cards - The cards to display.
 * @param settings - The selected game settings.
 * @param state - The current game state.
 * @returns The complete game screen markup.
 */
export function renderGame(
  cards: MemoryCard[],
  settings: GameSettings,
  state: GameState
): string {
  return `
    <section class="game">
      <h1 class="game__title">Memory Game</h1>

      ${renderScoreboard(state, settings.playerColor, settings.gameMode)}

      <div class="game__board" data-size="${settings.boardSize}">
        ${cards.map(renderCard).join('')}
      </div>

      <button id="exit-button" type="button">
        Exit Game
      </button>
    </section>
  `;
}
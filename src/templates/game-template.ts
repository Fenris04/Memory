
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
    <section class="game" data-theme="${settings.theme}">
      <header class="game__header">
        ${renderScoreboard(
          state,
          settings.playerColor,
          settings.gameMode
        )}

        <button id="exit-button" type="button">
          <svg
            class="game__exit-icon"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 4H5C3.9 4 3 4.9 3 6V18C3 19.1 3.9 20 5 20H10"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13 8L17 12L13 16"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 12H17"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>

          <span>Exit game</span>
        </button>
      </header>

      <div class="game__board" data-size="${settings.boardSize}">
        ${cards.map(renderCard).join('')}
      </div>

      ${renderExitDialog()}
    </section>
  `;
}

/**
 * Renders the confirmation dialog for leaving the game.
 *
 * @returns The exit confirmation dialog HTML.
 */
function renderExitDialog(): string {
  return `
    <dialog id="exit-dialog" class="exit-dialog">
      <h2 class="exit-dialog__title">Leave Game?</h2>

      <p class="exit-dialog__description">
        Are you sure you want to leave?
        Your current progress will be lost.
      </p>

      <div class="exit-dialog__actions">
        <button id="cancel-exit-button" type="button">
          Cancel
        </button>

        <button id="confirm-exit-button" type="button">
          Leave Game
        </button>
      </div>
    </dialog>
  `;
}

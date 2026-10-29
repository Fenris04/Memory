
import type { MemoryCard } from '../game/card-types';
import type { GameState } from '../game/game-state';
import type { GameSettings } from '../settings/game-settings';
import { renderScoreboard } from './score-template';

/**
 * Renders a single Memory card.
 *
 * @param card - The card data.
 * @returns The card HTML.
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
 * Renders the exit icon.
 *
 * @returns The exit icon HTML.
 */
function renderExitIcon(): string {
  return `
    <svg
      class="game__exit-icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 17L15 12L10 7"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 12H3"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M12 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H12"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `;
}

/**
 * Renders the theme-specific exit confirmation dialog.
 *
 * @param theme - The selected card theme.
 * @returns The exit dialog HTML.
 */
function renderExitDialog(theme: GameSettings['theme']): string {
  const IS_GAMING: boolean = theme === 'gaming';
  const IS_FOOD: boolean = theme === 'food';

  const CANCEL_TEXT: string = IS_GAMING
    ? 'No, back to game'
    : IS_FOOD
      ? 'NO, BACK TO GAME'
      : 'Back to game';

  const CONFIRM_TEXT: string = IS_GAMING
    ? 'Yes, quit game'
    : IS_FOOD
      ? 'EXIT GAME'
      : 'Exit game';

  return `
    <dialog id="exit-dialog" class="exit-dialog">
      <h2 class="exit-dialog__title">
        Are you sure you want to quit the game?
      </h2>

      <div class="exit-dialog__actions">
        <button
          id="cancel-exit-button"
          type="button"
        >
          ${CANCEL_TEXT}
        </button>

        <button
          id="confirm-exit-button"
          type="button"
        >
          ${CONFIRM_TEXT}
        </button>
      </div>
    </dialog>
  `;
}

/**
 * Renders the complete Memory game.
 *
 * @param cards - The shuffled Memory cards.
 * @param settings - The selected game settings.
 * @param state - The current game state.
 * @returns The complete game HTML.
 */
export function renderGame(
  cards: MemoryCard[],
  settings: GameSettings,
  state: GameState
): string {
  return `
    <main class="game" data-theme="${settings.theme}">
      <header class="game__header">
        ${renderScoreboard(
          state,
          settings.playerColor,
          settings.gameMode
        )}

        <button id="exit-button" type="button">
          ${renderExitIcon()}
          <span>Exit game</span>
        </button>
      </header>

      <div
        class="game__board"
        data-size="${settings.boardSize}"
      >
        ${cards.map(renderCard).join('')}
      </div>

      ${renderExitDialog(settings.theme)}
    </main>
  `;
}

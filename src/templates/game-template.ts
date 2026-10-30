
import type { MemoryCard } from '../game/card-types';
import type { GameState } from '../game/game-state';
import type { GameSettings } from '../settings/game-settings';
import { renderScoreboard } from './score-template';

const CARD_LABEL_OFFSET: number = 1;

/**
 * Renders the two faces of a Memory card.
 *
 * @param card - The card data.
 * @returns The card faces HTML.
 */
function renderCardFaces(card: MemoryCard): string {
  return `
    <span class="game__card-face game__card-back">
      <img src="${card.backImage}" alt="" />
    </span>
    <span class="game__card-face game__card-front">
      <img src="${card.frontImage}" alt="" />
    </span>
  `;
}

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
      aria-label="Flip card ${card.id + CARD_LABEL_OFFSET}"
      aria-pressed="false"
    >
      <span class="game__card-inner">
        ${renderCardFaces(card)}
      </span>
    </button>
  `;
}

/**
 * Renders the exit icon paths.
 *
 * @returns The SVG path markup.
 */
function renderExitIconPaths(): string {
  return `
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
      ${renderExitIconPaths()}
    </svg>
  `;
}

/**
 * Returns the cancel button text for the selected theme.
 *
 * @param theme - The selected card theme.
 * @returns The cancel button label.
 */
function getCancelText(theme: GameSettings['theme']): string {
  if (theme === 'gaming') {
    return 'No, back to game';
  }

  return theme === 'food'
    ? 'NO, BACK TO GAME'
    : 'Back to game';
}

/**
 * Returns the confirm button text for the selected theme.
 *
 * @param theme - The selected card theme.
 * @returns The confirm button label.
 */
function getConfirmText(theme: GameSettings['theme']): string {
  if (theme === 'gaming') {
    return 'Yes, quit game';
  }

  return theme === 'food'
    ? 'EXIT GAME'
    : 'Exit game';
}

/**
 * Renders the exit dialog buttons.
 *
 * @param theme - The selected card theme.
 * @returns The dialog actions HTML.
 */
function renderExitDialogActions(
  theme: GameSettings['theme']
): string {
  return `
    <div class="exit-dialog__actions">
      <button id="cancel-exit-button" type="button">
        ${getCancelText(theme)}
      </button>
      <button id="confirm-exit-button" type="button">
        ${getConfirmText(theme)}
      </button>
    </div>
  `;
}

/**
 * Renders the theme-specific exit confirmation dialog.
 *
 * @param theme - The selected card theme.
 * @returns The exit dialog HTML.
 */
function renderExitDialog(theme: GameSettings['theme']): string {
  return `
    <dialog id="exit-dialog" class="exit-dialog">
      <h2 class="exit-dialog__title">
        Are you sure you want to quit the game?
      </h2>
      ${renderExitDialogActions(theme)}
    </dialog>
  `;
}

/**
 * Renders the game header and exit button.
 *
 * @param settings - The selected game settings.
 * @param state - The current game state.
 * @returns The game header HTML.
 */
function renderGameHeader(
  settings: GameSettings,
  state: GameState
): string {
  return `
    <header class="game__header">
      ${renderScoreboard(state, settings.playerColor, settings.gameMode)}
      <button id="exit-button" type="button">
        ${renderExitIcon()}
        <span>Exit game</span>
      </button>
    </header>
  `;
}

/**
 * Renders the board containing all Memory cards.
 *
 * @param cards - The shuffled Memory cards.
 * @param settings - The selected game settings.
 * @returns The game board HTML.
 */
function renderGameBoard(
  cards: MemoryCard[],
  settings: GameSettings
): string {
  return `
    <div class="game__board" data-size="${settings.boardSize}">
      ${cards.map(renderCard).join('')}
    </div>
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
    <div class="game" data-theme="${settings.theme}">
      ${renderGameHeader(settings, state)}
      ${renderGameBoard(cards, settings)}
      ${renderExitDialog(settings.theme)}
    </div>
  `;
}

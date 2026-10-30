
import codeVibesPreview from '../assets/Varianten/Theme-Visual/Property-1-IT-logos__2285-4060.svg';
import daProjectsPreview from '../assets/Varianten/Theme-Visual/Property-1-DA-projects__2285-4173.svg';
import foodPreview from '../assets/Varianten/Theme-Visual/Property-1-foods__2285-4059.svg';
import gamingPreview from '../assets/Varianten/Theme-Visual/Property-1-gameing__2285-4061.svg';

import paletteIcon from '../assets/Varianten/palette.svg';
import chessPawnIcon from '../assets/Varianten/chess_pawn.svg';
import cardIcon from '../assets/Varianten/card.svg';

const THEME_LABELS: Record<string, string> = {
  'code-vibes': 'Code Vibes',
  gaming: 'Gaming',
  'da-projects': 'DA Projects',
  food: 'Food'
};

const BOARD_LABELS: Record<string, string> = {
  '4x4': '16 Cards',
  '4x6': '24 Cards',
  '6x6': '36 Cards'
};

/**
 * Creates a settings group heading with an icon.
 *
 * @param title - The group heading.
 * @param icon - The icon image URL.
 * @param modifier - The icon modifier class.
 * @returns The heading markup.
 */
function renderGroupHeading(title: string, icon: string, modifier: string): string {
  return `
    <legend class="settings__label">
      <img class="settings__group-icon ${modifier}"
        src="${icon}" alt="" aria-hidden="true" />
      ${title}
    </legend>
  `;
}

/**
 * Creates a radio button option.
 *
 * @param name - The radio group name.
 * @param value - The option value.
 * @param label - The displayed label.
 * @param checked - Whether the option is selected by default.
 * @returns The radio option markup.
 */
function renderRadioOption(
  name: string, value: string, label: string, checked = false
): string {
  const CHECKED_ATTRIBUTE: string = checked ? ' checked' : '';
  return `
    <label class="settings__option">
      <input type="radio" name="${name}" value="${value}"${CHECKED_ATTRIBUTE} />
      <span>${label}</span>
    </label>
  `;
}

/**
 * Creates the card theme selection.
 *
 * @returns HTML markup for the available themes.
 */
function renderThemeOptions(): string {
  return `
    <fieldset class="settings__group">
      ${renderGroupHeading('Game themes', paletteIcon, 'settings__group-icon--themes')}
      ${renderRadioOption('card-theme', 'code-vibes', 'Code vibes theme', true)}
      ${renderRadioOption('card-theme', 'gaming', 'Gaming theme')}
      ${renderRadioOption('card-theme', 'da-projects', 'DA Projects theme')}
      ${renderRadioOption('card-theme', 'food', 'Foods theme')}
    </fieldset>
  `;
}

/**
 * Creates the player color selection.
 *
 * @returns HTML markup for the player color options.
 */
function renderColorOptions(): string {
  return `
    <fieldset class="settings__group">
      ${renderGroupHeading('Choose player', chessPawnIcon, 'settings__group-icon--player')}
      ${renderRadioOption('player-color', 'blue', 'Blue', true)}
      ${renderRadioOption('player-color', 'orange', 'Orange')}
    </fieldset>
  `;
}

/**
 * Creates the board size selection.
 *
 * @returns HTML markup for the board size options.
 */
function renderBoardOptions(): string {
  return `
    <fieldset class="settings__group">
      ${renderGroupHeading('Board size', cardIcon, 'settings__group-icon--board')}
      ${renderRadioOption('board-size', '4x4', '16 cards', true)}
      ${renderRadioOption('board-size', '4x6', '24 cards')}
      ${renderRadioOption('board-size', '6x6', '36 cards')}
    </fieldset>
  `;
}

/**
 * Creates the game mode selection.
 *
 * @returns HTML markup for the game mode options.
 */
function renderGameModeSettings(): string {
  return `
    <fieldset class="settings__group">
      <legend class="settings__label">
        <span class="settings__group-icon settings__group-icon--mode" aria-hidden="true">♟</span>
        Game mode
      </legend>
      ${renderRadioOption('game-mode', 'player-vs-player', 'Player vs Player', true)}
      ${renderRadioOption('game-mode', 'player-vs-bot', 'Player vs Bot')}
    </fieldset>
  `;
}

/**
 * Creates the bot difficulty selection.
 *
 * @returns HTML markup for the difficulty options.
 */
function renderBotDifficultySettings(): string {
  return `
    <fieldset id="bot-difficulty-settings" class="settings__group" hidden disabled>
      <legend class="settings__label">Bot Difficulty</legend>
      ${renderRadioOption('bot-difficulty', 'easy', 'Easy', true)}
      ${renderRadioOption('bot-difficulty', 'medium', 'Medium')}
      ${renderRadioOption('bot-difficulty', 'hard', 'Hard')}
    </fieldset>
  `;
}

/**
 * Creates the back navigation button.
 *
 * @returns The back button markup.
 */
function renderBackButton(): string {
  return `
    <button id="back-button" class="settings__back-button" type="button">
      ← Back to Home
    </button>
  `;
}

/**
 * Creates the settings controls.
 *
 * @returns The controls markup.
 */
function renderSettingsControls(): string {
  return `
    <div class="settings__controls">
      ${renderThemeOptions()}
      ${renderColorOptions()}
      ${renderBoardOptions()}
      ${renderGameModeSettings()}
      ${renderBotDifficultySettings()}
      ${renderBackButton()}
    </div>
  `;
}

/**
 * Creates a theme preview image.
 *
 * @param theme - The theme identifier.
 * @param source - The preview image URL.
 * @param description - The accessible image description.
 * @param active - Whether the preview is initially active.
 * @returns The preview image markup.
 */
function renderPreviewImage(
  theme: string, source: string, description: string, active = false
): string {
  const ACTIVE_CLASS: string = active ? ' is-active' : '';
  const HIDDEN_ATTRIBUTE: string = active ? '' : ' aria-hidden="true"';

  return `
    <img class="settings__preview-image${ACTIVE_CLASS}"
      data-theme-preview="${theme}" src="${source}"
      alt="${description}"${HIDDEN_ATTRIBUTE} />
  `;
}

/**
 * Creates all card theme preview images.
 *
 * @returns The theme preview markup.
 */
function renderThemePreviews(): string {
  return `
    <div class="settings__preview">
      ${renderPreviewImage('code-vibes', codeVibesPreview, 'Code Vibes card theme preview', true)}
      ${renderPreviewImage('gaming', gamingPreview, 'Gaming card theme preview')}
      ${renderPreviewImage('da-projects', daProjectsPreview, 'DA Projects card theme preview')}
      ${renderPreviewImage('food', foodPreview, 'Food card theme preview')}
    </div>
  `;
}

/**
 * Creates the selected settings summary.
 *
 * @returns The summary markup.
 */
function renderSettingsSummary(): string {
  return `
    <div class="settings__summary" aria-live="polite">
      <span id="summary-theme">Code Vibes</span>
      <span class="settings__separator" aria-hidden="true"></span>
      <span id="summary-player">Blue Player</span>
      <span class="settings__separator" aria-hidden="true"></span>
      <span id="summary-board">16 Cards</span>
    </div>
  `;
}

/**
 * Creates the start button icon.
 *
 * @returns The start icon SVG markup.
 */
function renderStartIcon(): string {
  return `
    <svg class="settings__start-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="1"
        stroke="currentColor" stroke-width="2" />
      <path d="M10 8L16 12L10 16V8Z" fill="currentColor" />
    </svg>
  `;
}

/**
 * Creates the start game button.
 *
 * @returns The start button markup.
 */
function renderStartButton(): string {
  return `
    <button id="play-button" type="button">
      ${renderStartIcon()}
      <span>Start</span>
    </button>
  `;
}

/**
 * Creates the settings actions.
 *
 * @returns The settings actions markup.
 */
function renderSettingsActions(): string {
  return `
    <div class="settings__actions">
      ${renderSettingsSummary()}
      ${renderStartButton()}
    </div>
  `;
}

/**
 * Creates the right side of the settings screen.
 *
 * @returns The preview and actions markup.
 */
function renderSettingsRight(): string {
  return `
    <div class="settings__right">
      ${renderThemePreviews()}
      ${renderSettingsActions()}
    </div>
  `;
}

/**
 * Creates the HTML structure for the settings screen.
 *
 * @returns The complete settings screen markup.
 */
export function renderSettings(): string {
  return `
    <div class="settings">
      <header class="settings__header">
        <h1 class="settings__title">Settings</h1>
        <div class="settings__title-decoration" aria-hidden="true"></div>
      </header>
      <div class="settings__layout">
        ${renderSettingsControls()}
        ${renderSettingsRight()}
      </div>
    </div>
  `;
}

/**
 * Returns the selected radio button from a group.
 *
 * @param name - The radio group name.
 * @returns The selected input or null.
 */
function getSelectedInput(name: string): HTMLInputElement | null {
  return document.querySelector(`input[name="${name}"]:checked`);
}

/**
 * Updates the selected theme summary.
 *
 * @returns Nothing.
 */
function updateThemeSummary(): void {
  const SELECTED: HTMLInputElement | null = getSelectedInput('card-theme');
  const SUMMARY: HTMLElement | null = document.querySelector('#summary-theme');

  if (SELECTED && SUMMARY) {
    SUMMARY.textContent = THEME_LABELS[SELECTED.value] ?? 'Game Theme';
  }
}

/**
 * Updates the selected player color summary.
 *
 * @returns Nothing.
 */
function updatePlayerSummary(): void {
  const SELECTED: HTMLInputElement | null = getSelectedInput('player-color');
  const SUMMARY: HTMLElement | null = document.querySelector('#summary-player');

  if (SELECTED && SUMMARY) {
    SUMMARY.textContent = SELECTED.value === 'orange'
      ? 'Orange Player' : 'Blue Player';
  }
}

/**
 * Updates the selected board size summary.
 *
 * @returns Nothing.
 */
function updateBoardSummary(): void {
  const SELECTED: HTMLInputElement | null = getSelectedInput('board-size');
  const SUMMARY: HTMLElement | null = document.querySelector('#summary-board');

  if (SELECTED && SUMMARY) {
    SUMMARY.textContent = BOARD_LABELS[SELECTED.value] ?? 'Board Size';
  }
}

/**
 * Updates all selected settings summary values.
 *
 * @returns Nothing.
 */
function updateSettingsSummary(): void {
  updateThemeSummary();
  updatePlayerSummary();
  updateBoardSummary();
}

/**
 * Registers change listeners for the settings summary.
 *
 * @returns Nothing.
 */
function registerSummaryListeners(): void {
  const SETTINGS_INPUTS: NodeListOf<HTMLInputElement> = document.querySelectorAll(
    'input[name="card-theme"], input[name="player-color"], input[name="board-size"]'
  );

  SETTINGS_INPUTS.forEach((input: HTMLInputElement): void => {
    input.addEventListener('change', updateSettingsSummary);
  });
}

/**
 * Updates the selected settings summary and initializes the theme preview.
 *
 * @returns Nothing.
 */
export function initializeThemePreview(): void {
  registerSummaryListeners();
  updateSettingsSummary();
}

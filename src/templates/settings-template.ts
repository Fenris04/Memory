
import codeVibesPreview from '../assets/Varianten/Theme-Visual/Property-1-IT-logos__2285-4060.svg';
import daProjectsPreview from '../assets/Varianten/Theme-Visual/Property-1-DA-projects__2285-4173.svg';
import foodPreview from '../assets/Varianten/Theme-Visual/Property-1-foods__2285-4059.svg';
import gamingPreview from '../assets/Varianten/Theme-Visual/Property-1-gameing__2285-4061.svg';

/**
 * Creates the card theme selection.
 *
 * @returns HTML markup for the available themes.
 */
function renderThemeOptions(): string {
  return `
    <fieldset class="settings__group">
      <legend class="settings__label">
        <svg
          class="settings__group-icon settings__group-icon--themes"
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M16 3C8.8 3 3 8.7 3 16s5.8 13 13 13h2a4 4 0 0 0 3-6.6 2.5 2.5 0 0 1 1.9-4.1H25c2.2 0 4-1.8 4-4C29 8.1 23.2 3 16 3Z"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linejoin="round"
          />
          <circle cx="10" cy="13" r="2" fill="currentColor" />
          <circle cx="15" cy="8" r="2" fill="currentColor" />
          <circle cx="22" cy="11" r="2" fill="currentColor" />
          <circle cx="9" cy="20" r="2" fill="currentColor" />
        </svg>
        Game themes
      </legend>

      <label class="settings__option">
        <input type="radio" name="card-theme" value="code-vibes" checked />
        <span>Code vibes theme</span>
      </label>

      <label class="settings__option">
        <input type="radio" name="card-theme" value="gaming" />
        <span>Gaming theme</span>
      </label>

      <label class="settings__option">
        <input type="radio" name="card-theme" value="da-projects" />
        <span>DA Projects theme</span>
      </label>

      <label class="settings__option">
        <input type="radio" name="card-theme" value="food" />
        <span>Foods theme</span>
      </label>
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
      <legend class="settings__label">
        <svg
          class="settings__group-icon settings__group-icon--player"
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="16"
            cy="7"
            r="4"
            stroke="currentColor"
            stroke-width="2.5"
          />
          <path
            d="M12 12H20L21 17L25 21V25H7V21L11 17L12 12Z"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linejoin="round"
          />
          <path
            d="M5 29H27"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
          />
        </svg>
        Choose player
      </legend>

      <label class="settings__option">
        <input type="radio" name="player-color" value="blue" checked />
        <span>Blue</span>
      </label>

      <label class="settings__option">
        <input type="radio" name="player-color" value="orange" />
        <span>Orange</span>
      </label>
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
      <legend class="settings__label">
        <svg
          class="settings__group-icon settings__group-icon--board"
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="10"
            y="4"
            width="17"
            height="23"
            rx="2"
            transform="rotate(-15 10 4)"
            stroke="currentColor"
            stroke-width="2.5"
          />
          <path
            d="M7 10L4 11L8 27L11 26"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linejoin="round"
          />
        </svg>
        Board size
      </legend>

      <label class="settings__option">
        <input type="radio" name="board-size" value="4x4" checked />
        <span>16 cards</span>
      </label>

      <label class="settings__option">
        <input type="radio" name="board-size" value="4x6" />
        <span>24 cards</span>
      </label>

      <label class="settings__option">
        <input type="radio" name="board-size" value="6x6" />
        <span>36 cards</span>
      </label>
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
        <span
          class="settings__group-icon settings__group-icon--mode"
          aria-hidden="true"
        >♟</span>
        Game mode
      </legend>

      <label class="settings__option">
        <input
          type="radio"
          name="game-mode"
          value="player-vs-player"
          checked
        />
        <span>Player vs Player</span>
      </label>

      <label class="settings__option">
        <input
          type="radio"
          name="game-mode"
          value="player-vs-bot"
        />
        <span>Player vs Bot</span>
      </label>
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
    <fieldset
      id="bot-difficulty-settings"
      class="settings__group"
      hidden
      disabled
    >
      <legend class="settings__label">Bot Difficulty</legend>

      <label class="settings__option">
        <input type="radio" name="bot-difficulty" value="easy" checked />
        <span>Easy</span>
      </label>

      <label class="settings__option">
        <input type="radio" name="bot-difficulty" value="medium" />
        <span>Medium</span>
      </label>

      <label class="settings__option">
        <input type="radio" name="bot-difficulty" value="hard" />
        <span>Hard</span>
      </label>
    </fieldset>
  `;
}

/**
 * Creates the HTML structure for the settings screen.
 *
 * @returns The complete settings screen markup.
 */
export function renderSettings(): string {
  return `
    <section class="settings">
      <div class="settings__container">
        <header class="settings__header">
          <h1 class="settings__title">Settings</h1>
          <div class="settings__title-decoration" aria-hidden="true"></div>
        </header>

        <div class="settings__layout">
          <div class="settings__controls">
            ${renderThemeOptions()}
            ${renderColorOptions()}
            ${renderBoardOptions()}
            ${renderGameModeSettings()}
            ${renderBotDifficultySettings()}

            <button
              id="back-button"
              class="settings__back-button"
              type="button"
            >
              ← Back to Home
            </button>
          </div>

          <div class="settings__right">
            <div class="settings__preview">
              <img
                class="settings__preview-image is-active"
                data-theme-preview="code-vibes"
                src="${codeVibesPreview}"
                alt="Code Vibes card theme preview"
              />

              <img
                class="settings__preview-image"
                data-theme-preview="gaming"
                src="${gamingPreview}"
                alt="Gaming card theme preview"
                aria-hidden="true"
              />

              <img
                class="settings__preview-image"
                data-theme-preview="da-projects"
                src="${daProjectsPreview}"
                alt="DA Projects card theme preview"
                aria-hidden="true"
              />

              <img
                class="settings__preview-image"
                data-theme-preview="food"
                src="${foodPreview}"
                alt="Food card theme preview"
                aria-hidden="true"
              />
            </div>

            <div class="settings__actions">
              <div class="settings__summary" aria-live="polite">
                <span id="summary-theme">Code Vibes</span>
                <span
                  class="settings__separator"
                  aria-hidden="true"
                ></span>
                <span id="summary-player">Blue Player</span>
                <span
                  class="settings__separator"
                  aria-hidden="true"
                ></span>
                <span id="summary-board">16 Cards</span>
              </div>

              <button id="play-button" type="button">
                <svg
                  class="settings__start-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="2"
                    y="4"
                    width="20"
                    height="16"
                    rx="1"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M10 8L16 12L10 16V8Z"
                    fill="currentColor"
                  />
                </svg>

                <span>Start</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * Updates the selected settings summary and initializes the theme preview.
 *
 * @returns Nothing.
 */
export function initializeThemePreview(): void {
  const SUMMARY_THEME: HTMLElement | null =
    document.querySelector('#summary-theme');

  const SUMMARY_PLAYER: HTMLElement | null =
    document.querySelector('#summary-player');

  const SUMMARY_BOARD: HTMLElement | null =
    document.querySelector('#summary-board');

  const THEME_LABELS: Record<string, string> = {
    'code-vibes': 'Code Vibes',
    gaming: 'Gaming',
    'da-projects': 'DA Projects',
    food: 'Food',
  };

  const BOARD_LABELS: Record<string, string> = {
    '4x4': '16 Cards',
    '4x6': '24 Cards',
    '6x6': '36 Cards',
  };

  /**
   * Updates the summary using the selected settings.
   *
   * @returns Nothing.
   */
  function updateSettingsSummary(): void {
    const SELECTED_THEME: HTMLInputElement | null =
      document.querySelector('input[name="card-theme"]:checked');

    const SELECTED_PLAYER: HTMLInputElement | null =
      document.querySelector('input[name="player-color"]:checked');

    const SELECTED_BOARD: HTMLInputElement | null =
      document.querySelector('input[name="board-size"]:checked');

    if (SELECTED_THEME && SUMMARY_THEME) {
      SUMMARY_THEME.textContent =
        THEME_LABELS[SELECTED_THEME.value] ?? 'Game Theme';
    }

    if (SELECTED_PLAYER && SUMMARY_PLAYER) {
      SUMMARY_PLAYER.textContent =
        SELECTED_PLAYER.value === 'orange'
          ? 'Orange Player'
          : 'Blue Player';
    }

    if (SELECTED_BOARD && SUMMARY_BOARD) {
      SUMMARY_BOARD.textContent =
        BOARD_LABELS[SELECTED_BOARD.value] ?? 'Board Size';
    }
  }

  const SETTINGS_INPUTS: NodeListOf<HTMLInputElement> =
    document.querySelectorAll(
      'input[name="card-theme"], input[name="player-color"], input[name="board-size"]'
    );

  SETTINGS_INPUTS.forEach((input: HTMLInputElement): void => {
    input.addEventListener('change', updateSettingsSummary);
  });

  updateSettingsSummary();
}

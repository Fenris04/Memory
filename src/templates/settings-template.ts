
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
        <span class="settings__group-icon settings__group-icon--themes" aria-hidden="true">✿</span>
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
        <span class="settings__group-icon settings__group-icon--player" aria-hidden="true">♙</span>
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
        <span class="settings__group-icon settings__group-icon--board" aria-hidden="true">▱</span>
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
        <span class="settings__group-icon settings__group-icon--mode" aria-hidden="true">♟</span>
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
                id="theme-preview"
                class="settings__preview-image"
                src="${codeVibesPreview}"
                alt="Code Vibes card theme preview"
              />
            </div>

            <div class="settings__actions">
              <div class="settings__summary" aria-live="polite">
                <span id="summary-theme">Code Vibes</span>
                <span class="settings__separator" aria-hidden="true"></span>
                <span id="summary-player">Blue Player</span>
                <span class="settings__separator" aria-hidden="true"></span>
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
 * Initializes the interactive card theme preview
 * and keeps the settings summary up to date.
 */
export function initializeThemePreview(): void {
  const preview = document.querySelector<HTMLImageElement>('#theme-preview');

  const summaryTheme = document.querySelector<HTMLElement>('#summary-theme');
  const summaryPlayer = document.querySelector<HTMLElement>('#summary-player');
  const summaryBoard = document.querySelector<HTMLElement>('#summary-board');

  if (!preview) {
    return;
  }

  const previews: Record<string, { src: string; alt: string }> = {
    'code-vibes': {
      src: codeVibesPreview,
      alt: 'Code Vibes card theme preview',
    },
    'da-projects': {
      src: daProjectsPreview,
      alt: 'DA Projects card theme preview',
    },
    food: {
      src: foodPreview,
      alt: 'Food card theme preview',
    },
    gaming: {
      src: gamingPreview,
      alt: 'Gaming card theme preview',
    },
  };

  const themeLabels: Record<string, string> = {
    'code-vibes': 'Code Vibes',
    'da-projects': 'DA Projects',
    food: 'Food',
    gaming: 'Gaming',
  };

  const boardLabels: Record<string, string> = {
    '4x4': '16 Cards',
    '4x6': '24 Cards',
    '6x6': '36 Cards',
  };

  /**
   * Updates the preview and summary using the selected settings.
   */
  function updateSettingsPreview(): void {
    const selectedTheme = document.querySelector<HTMLInputElement>(
      'input[name="card-theme"]:checked'
    );

    const selectedPlayer = document.querySelector<HTMLInputElement>(
      'input[name="player-color"]:checked'
    );

    const selectedBoard = document.querySelector<HTMLInputElement>(
      'input[name="board-size"]:checked'
    );

    if (selectedTheme) {
      const selectedPreview = previews[selectedTheme.value];

      if (selectedPreview) {
        preview!.src = selectedPreview.src;
        preview!.alt = selectedPreview.alt;
      }

      if (summaryTheme) {
        summaryTheme.textContent =
          themeLabels[selectedTheme.value] ?? 'Game Theme';
      }
    }

    if (selectedPlayer && summaryPlayer) {
      summaryPlayer.textContent =
        selectedPlayer.value === 'orange' ? 'Orange Player' : 'Blue Player';
    }

    if (selectedBoard && summaryBoard) {
      summaryBoard.textContent =
        boardLabels[selectedBoard.value] ?? 'Board Size';
    }
  }

  const settingsInputs = document.querySelectorAll<HTMLInputElement>(
    'input[name="card-theme"], input[name="player-color"], input[name="board-size"]'
  );

  settingsInputs.forEach((input) => {
    input.addEventListener('change', updateSettingsPreview);
  });

  updateSettingsPreview();
}

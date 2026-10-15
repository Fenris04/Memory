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
    <fieldset class="settings__group settings__group--themes">
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
      <legend class="settings__label">
        <span class="settings__group-icon settings__group-icon--mode" aria-hidden="true">⚙</span>
        Bot difficulty
      </legend>

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
 * Displays the game settings, theme preview,
 * and navigation buttons.
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
              <div class="settings__summary">
                <span>Game theme</span>
                <span class="settings__separator" aria-hidden="true"></span>
                <span>Player</span>
                <span class="settings__separator" aria-hidden="true"></span>
                <span>Board size</span>
              </div>

              <button id="play-button" type="button">
                <span aria-hidden="true">▣</span>
                Start
              </button>
            </div>
          </div>
        </div>

        <button id="back-button" class="settings__back-button" type="button">
          ← Back to Home
        </button>
      </div>
    </section>
  `;
}

/**
 * Initializes the interactive card theme preview.
 *
 * Updates the preview image whenever the selected
 * card theme changes.
 *
 * @returns Nothing.
 */
export function initializeThemePreview(): void {
  const preview = document.querySelector<HTMLImageElement>('#theme-preview');

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

  const themeInputs = document.querySelectorAll<HTMLInputElement>(
    'input[name="card-theme"]'
  );

  themeInputs.forEach((input) => {
    input.addEventListener('change', () => {
      if (!input.checked) {
        return;
      }

      const selectedPreview = previews[input.value];

      if (!selectedPreview) {
        return;
      }

      preview.src = selectedPreview.src;
      preview.alt = selectedPreview.alt;
    });
  });
}
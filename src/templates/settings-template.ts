import codeVibesPreview from '../assets/Varianten/Theme-Visual/Property-1-IT-logos__2285-4060.svg';
import daProjectsPreview from '../assets/Varianten/Theme-Visual/Property-1-DA-projects__2285-4173.svg';
import foodPreview from '../assets/Varianten/Theme-Visual/Property-1-foods__2285-4059.svg';
import gamingPreview from '../assets/Varianten/Theme-Visual/Property-1-IT-logos__2285-4060.svg';

/**
 * Creates the player color selection.
 *
 * @returns HTML markup for the player color options.
 */
function renderColorOptions(): string {
  return `
    <fieldset class="settings__group">
      <legend class="settings__label">Player Color</legend>

      <label class="settings__option">
        <input type="radio" name="player-color" value="blue" checked />
        Blue
      </label>

      <label class="settings__option">
        <input type="radio" name="player-color" value="orange" />
        Orange
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
      <legend class="settings__label">Board Size</legend>

      <label class="settings__option">
        <input type="radio" name="board-size" value="4x4" checked />
        4 × 4
      </label>

      <label class="settings__option">
        <input type="radio" name="board-size" value="4x6" />
        4 × 6
      </label>

      <label class="settings__option">
        <input type="radio" name="board-size" value="6x6" />
        6 × 6
      </label>
    </fieldset>
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
      <legend class="settings__label">Card Theme</legend>

      <label class="settings__option">
        <input type="radio" name="card-theme" value="code-vibes" checked />
        Code Vibes
      </label>

      <label class="settings__option">
        <input type="radio" name="card-theme" value="da-projects" />
        DA Projects
      </label>

      <label class="settings__option">
        <input type="radio" name="card-theme" value="food" />
        Food
      </label>

      <label class="settings__option">
        <input type="radio" name="card-theme" value="gaming" />
        Gaming
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
      <legend class="settings__label">Game Mode</legend>

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
          <h1 class="settings__title">Game Settings</h1>

          <p class="settings__description">
            Customize your game before you start!
          </p>
        </header>

        <div class="settings__layout">
          <div class="settings__controls">
            ${renderThemeOptions()}
            ${renderColorOptions()}
            ${renderBoardOptions()}
            ${renderGameModeSettings()}
            ${renderBotDifficultySettings()}
          </div>

          <div class="settings__preview">
            <img
              id="theme-preview"
              class="settings__preview-image"
              src="${codeVibesPreview}"
              alt="Code Vibes card theme preview"
            />
          </div>
        </div>

        <div class="settings__actions">
          <button id="back-button" type="button">
            Back to Home
          </button>

          <button id="play-button" type="button">
            Play Now
          </button>
        </div>
      </div>
    </section>
  `;
}

/**
 * Initializes the interactive card theme preview.
 *
 * Updates the preview image whenever the selected
 * card theme changes.
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
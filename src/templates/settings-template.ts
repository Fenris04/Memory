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
 * Creates the HTML structure for the settings screen.
 *
 * Combines all available game settings
 * and displays the navigation buttons.
 *
 * @returns The complete settings screen markup.
 */
export function renderSettings(): string {
  return `
    <section class="settings">
      <h1 class="settings__title">Game Settings</h1>

      <p class="settings__description">
        Customize your game before you start!
      </p>

      ${renderGameModeSettings()}
      ${renderColorOptions()}
      ${renderBoardOptions()}
      ${renderThemeOptions()}

      <div class="settings__actions">
        <button id="back-button" type="button">Back to Home</button>
        <button id="play-button" type="button">Play Now</button>
      </div>
    </section>
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
      <legend>Game Mode</legend>

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
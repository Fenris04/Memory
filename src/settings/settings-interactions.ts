
/**
 * Updates the visibility and availability of bot settings.
 *
 * @returns Nothing.
 */
function updateBotDifficultyVisibility(): void {
  const BOT_SETTINGS: HTMLFieldSetElement | null =
    document.querySelector('#bot-difficulty-settings');

  const BOT_MODE: HTMLInputElement | null =
    document.querySelector(
      'input[name="game-mode"][value="player-vs-bot"]'
    );

  if (!BOT_SETTINGS || !BOT_MODE) {
    return;
  }

  BOT_SETTINGS.hidden = !BOT_MODE.checked;
  BOT_SETTINGS.disabled = !BOT_MODE.checked;
}

/**
 * Shows one already-loaded theme preview without changing image sources.
 *
 * @param theme - The theme to display.
 * @returns Nothing.
 */
function showThemePreview(theme: string): void {
  const PREVIEWS: NodeListOf<HTMLImageElement> =
    document.querySelectorAll('[data-theme-preview]');

  PREVIEWS.forEach((preview: HTMLImageElement): void => {
    const IS_ACTIVE: boolean =
      preview.dataset.themePreview === theme;

    preview.classList.toggle('is-active', IS_ACTIVE);
    preview.setAttribute('aria-hidden', String(!IS_ACTIVE));
  });
}

/**
 * Restores the selected theme after a hover or keyboard focus ends.
 *
 * @returns Nothing.
 */
function restoreSelectedThemePreview(): void {
  const SELECTED_THEME: HTMLInputElement | null =
    document.querySelector('input[name="card-theme"]:checked');

  if (SELECTED_THEME) {
    showThemePreview(SELECTED_THEME.value);
  }
}

/**
 * Registers preview hover, focus, and selection interactions.
 *
 * @returns Nothing.
 */
function setupThemePreviewInteractions(): void {
  const THEME_OPTIONS: NodeListOf<HTMLInputElement> =
    document.querySelectorAll('input[name="card-theme"]');

  THEME_OPTIONS.forEach((input: HTMLInputElement): void => {
    const OPTION: HTMLLabelElement | null = input.closest('label');

    OPTION?.addEventListener('mouseenter', (): void => {
      showThemePreview(input.value);
    });

    OPTION?.addEventListener(
      'mouseleave',
      restoreSelectedThemePreview
    );

    input.addEventListener('focus', (): void => {
      showThemePreview(input.value);
    });

    input.addEventListener(
      'blur',
      restoreSelectedThemePreview
    );

    input.addEventListener(
      'change',
      restoreSelectedThemePreview
    );
  });

  restoreSelectedThemePreview();
}

/**
 * Registers listeners for the settings screen.
 *
 * @returns Nothing.
 */
export function setupSettingsInteractions(): void {
  const GAME_MODES: NodeListOf<HTMLInputElement> =
    document.querySelectorAll('input[name="game-mode"]');

  GAME_MODES.forEach((input: HTMLInputElement): void => {
    input.addEventListener(
      'change',
      updateBotDifficultyVisibility
    );
  });

  updateBotDifficultyVisibility();
  setupThemePreviewInteractions();
}

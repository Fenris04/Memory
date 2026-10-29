
import codeVibesPreview from '../assets/Varianten/Theme-Visual/Property-1-IT-logos__2285-4060.svg';
import daProjectsPreview from '../assets/Varianten/Theme-Visual/Property-1-DA-projects__2285-4173.svg';
import foodPreview from '../assets/Varianten/Theme-Visual/Property-1-foods__2285-4059.svg';
import gamingPreview from '../assets/Varianten/Theme-Visual/Property-1-gameing__2285-4061.svg';

const THEME_PREVIEWS: Record<string, { src: string; alt: string }> = {
  'code-vibes': {
    src: codeVibesPreview,
    alt: 'Code Vibes card theme preview',
  },
  gaming: {
    src: gamingPreview,
    alt: 'Gaming card theme preview',
  },
  'da-projects': {
    src: daProjectsPreview,
    alt: 'DA Projects card theme preview',
  },
  food: {
    src: foodPreview,
    alt: 'Food card theme preview',
  },
};

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
 * Displays the preview image for a given theme.
 *
 * @param theme - Theme identifier.
 * @returns Nothing.
 */
function showThemePreview(theme: string): void {
  const PREVIEW: HTMLImageElement | null =
    document.querySelector('#theme-preview');

  const THEME = THEME_PREVIEWS[theme];

  if (!PREVIEW || !THEME) {
    return;
  }

  if (PREVIEW.src !== new URL(THEME.src, document.baseURI).href) {
    PREVIEW.src = THEME.src;
  }

  PREVIEW.alt = THEME.alt;
}

/**
 * Restores the preview of the currently selected theme.
 *
 * @returns Nothing.
 */
function restoreSelectedThemePreview(): void {
  const SELECTED_THEME: HTMLInputElement | null =
    document.querySelector('input[name="card-theme"]:checked');

  if (!SELECTED_THEME) {
    return;
  }

  showThemePreview(SELECTED_THEME.value);
}

/**
 * Registers hover and keyboard preview interactions.
 *
 * @returns Nothing.
 */
function setupThemeHoverPreview(): void {
  const THEME_OPTIONS: NodeListOf<HTMLInputElement> =
    document.querySelectorAll('input[name="card-theme"]');

  THEME_OPTIONS.forEach((input: HTMLInputElement): void => {
    const OPTION: HTMLLabelElement | null = input.closest('label');

    if (!OPTION) {
      return;
    }

    OPTION.addEventListener('mouseenter', (): void => {
      showThemePreview(input.value);
    });

    OPTION.addEventListener('mouseleave', (): void => {
      restoreSelectedThemePreview();
    });

    input.addEventListener('focus', (): void => {
      showThemePreview(input.value);
    });

    input.addEventListener('blur', (): void => {
      restoreSelectedThemePreview();
    });
  });
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
    input.addEventListener('change', updateBotDifficultyVisibility);
  });

  updateBotDifficultyVisibility();
  setupThemeHoverPreview();
}

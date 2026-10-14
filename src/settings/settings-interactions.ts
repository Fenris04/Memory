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
 * Registers listeners for the game mode selection.
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
}
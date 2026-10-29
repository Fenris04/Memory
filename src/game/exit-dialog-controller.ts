
import { cancelBotTurn, resumeBotTurn } from './memory-bot';

interface ExitDialogElements {
  exitButton: HTMLButtonElement;
  dialog: HTMLDialogElement;
  cancelButton: HTMLButtonElement;
  confirmButton: HTMLButtonElement;
}

/**
 * Finds the exit dialog elements.
 *
 * @returns The dialog elements or null.
 */
function getExitDialogElements(): ExitDialogElements | null {
  const exitButton = document.querySelector<HTMLButtonElement>('#exit-button');
  const dialog = document.querySelector<HTMLDialogElement>('#exit-dialog');
  const cancelButton = document.querySelector<HTMLButtonElement>('#cancel-exit-button');
  const confirmButton = document.querySelector<HTMLButtonElement>('#confirm-exit-button');

  if (!exitButton || !dialog || !cancelButton || !confirmButton) {
    console.error('Exit dialog elements are missing.');
    return null;
  }

  return { exitButton, dialog, cancelButton, confirmButton };
}

/**
 * Opens the exit dialog and pauses the bot.
 *
 * @param dialog - The exit confirmation dialog.
 * @returns Nothing.
 */
function openExitDialog(dialog: HTMLDialogElement): void {
  cancelBotTurn();
  dialog.showModal();
}

/**
 * Registers the exit dialog opening and cancellation.
 *
 * @param elements - The dialog elements.
 * @returns Nothing.
 */
function registerExitControls(elements: ExitDialogElements): void {
  elements.exitButton.addEventListener('click', (): void => {
    openExitDialog(elements.dialog);
  });
  elements.cancelButton.addEventListener('click', (): void => {
    elements.dialog.close();
  });
}

/**
 * Registers the dialog close and confirmation behavior.
 *
 * @param elements - The dialog elements.
 * @param isBotTurn - Checks whether the bot is active.
 * @param onConfirm - Exits the current game.
 * @returns Nothing.
 */
function registerExitConfirmation(
  elements: ExitDialogElements,
  isBotTurn: () => boolean,
  onConfirm: () => void
): void {
  let isLeavingGame: boolean = false;
  elements.dialog.addEventListener('close', (): void => {
    if (!isLeavingGame && isBotTurn()) resumeBotTurn();
  });
  elements.confirmButton.addEventListener('click', (): void => {
    isLeavingGame = true;
    elements.dialog.close();
    onConfirm();
  });
}

/**
 * Registers the exit confirmation dialog.
 *
 * @param isBotTurn - Checks whether the bot is active.
 * @param onConfirm - Exits the current game.
 * @returns Nothing.
 */
export function setupExitButton(
  isBotTurn: () => boolean,
  onConfirm: () => void
): void {
  const ELEMENTS: ExitDialogElements | null = getExitDialogElements();
  if (!ELEMENTS) {
    return;
  }

  registerExitControls(ELEMENTS);
  registerExitConfirmation(ELEMENTS, isBotTurn, onConfirm);
}

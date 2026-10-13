import type {
  BoardSize,
  CardTheme,
  GameSettings,
  PlayerColor
} from './game-settings';

import { DEFAULT_SETTINGS } from './game-settings';

/**
 * Reads the selected value from a radio button group.
 *
 * @param name - The name of the radio button group.
 * @returns The selected value or null.
 */
function getSelectedValue(name: string): string | null {
  const SELECTED_INPUT: HTMLInputElement | null =
    document.querySelector(`input[name="${name}"]:checked`);

  return SELECTED_INPUT?.value ?? null;
}

/**
 * Returns the selected player color.
 *
 * @returns The selected player color.
 */
export function getSelectedPlayerColor(): PlayerColor {
  const VALUE: string | null = getSelectedValue('player-color');

  return VALUE === 'orange' ? 'orange' : 'blue';
}

/**
 * Returns the selected board size.
 *
 * @returns The selected board size.
 */
export function getSelectedBoardSize(): BoardSize {
  const VALUE: string | null = getSelectedValue('board-size');

  if (VALUE === '4x6' || VALUE === '6x6') {
    return VALUE;
  }

  return '4x4';
}

/**
 * Returns the selected card theme.
 *
 * @returns The selected card theme.
 */
export function getSelectedTheme(): CardTheme {
  const VALUE: string | null = getSelectedValue('card-theme');

  if (VALUE === 'food' || VALUE === 'gaming' || VALUE === 'da-projects') {
    return VALUE;
  }

  return 'code-vibes';
}

/**
 * Collects all selected game settings.
 *
 * @returns An object containing the selected settings.
 */
export function getGameSettings(): GameSettings {
  return {
    playerColor: getSelectedPlayerColor(),
    boardSize: getSelectedBoardSize(),
    theme: getSelectedTheme()
  };
}

/**
 * Creates a copy of the default settings.
 *
 * @returns A new settings object.
 */
export function createDefaultSettings(): GameSettings {
  return { ...DEFAULT_SETTINGS };
}
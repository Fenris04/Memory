/**
 * Defines the available player colors.
 */
export type PlayerColor = 'blue' | 'orange';

/**
 * Defines the available board sizes.
 */
export type BoardSize = '4x4' | '4x6' | '6x6';

/**
 * Defines the available card themes.
 */
export type CardTheme =
  | 'code-vibes'
  | 'da-projects'
  | 'food'
  | 'gaming';

/**
 * Describes the settings required to start a game.
 */
export interface GameSettings {
  playerColor: PlayerColor;
  boardSize: BoardSize;
  theme: CardTheme;
}

/**
 * Stores the default settings for a new game.
 */
export const DEFAULT_SETTINGS: GameSettings = {
  playerColor: 'blue',
  boardSize: '4x4',
  theme: 'code-vibes'
};
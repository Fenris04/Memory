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
 * Defines the available game modes.
 */
export type GameMode = 'player-vs-player' | 'player-vs-bot';

/**
 * Defines the available bot difficulty levels.
 */
export type BotDifficulty = 'easy' | 'medium' | 'hard';

/**
 * Stores the selected settings for a Memory game.
 */
export interface GameSettings {
  playerColor: PlayerColor;
  boardSize: BoardSize;
  theme: CardTheme;
  gameMode: GameMode;
  botDifficulty: BotDifficulty;
}

/**
 * Defines the initial game settings.
 */
export const DEFAULT_SETTINGS: GameSettings = {
  playerColor: 'blue',
  boardSize: '4x4',
  theme: 'code-vibes',
  gameMode: 'player-vs-player',
  botDifficulty: 'easy'
};
import type { GameMode } from '../settings/game-settings';
import type { PlayerNumber } from './game-state';

/**
 * Returns the display name for a player.
 *
 * @param player - The player number.
 * @param gameMode - The selected game mode.
 * @returns The player's display name.
 */
export function getPlayerName(
  player: PlayerNumber,
  gameMode: GameMode
): string {
  if (player === 2 && gameMode === 'player-vs-bot') {
    return 'Bot';
  }

  return `Player ${player}`;
}
import type { BoardSize } from '../settings/game-settings';

/**
 * Defines the number of matching pairs for each board size.
 */
const PAIR_COUNTS: Record<BoardSize, number> = {
  '4x4': 8,
  '4x6': 12,
  '6x6': 18
};

/**
 * Returns the number of pairs required for a board.
 *
 * @param boardSize - The selected board size.
 * @returns The required number of matching pairs.
 */
export function getPairCount(boardSize: BoardSize): number {
  return PAIR_COUNTS[boardSize];
}
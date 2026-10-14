/**
 * Identifies one of the two players.
 */
export type PlayerNumber = 1 | 2;

/**
 * Stores the current state of a Memory Game.
 */
export interface GameState {
  currentPlayer: PlayerNumber;
  playerOneScore: number;
  playerTwoScore: number;
  matchedPairs: number;
  totalPairs: number;
}

/**
 * Simulates a coin toss to choose the starting player.
 *
 * @returns The randomly selected player number.
 */
export function tossCoin(): PlayerNumber {
  const COIN_RESULT: number = Math.random();

  return COIN_RESULT < 0.5 ? 1 : 2;
}

/**
 * Creates the initial state for a new game.
 *
 * @param totalPairs - The number of matching pairs.
 * @param startingPlayer - The player who starts the game.
 * @returns A new game state with zero points.
 */
export function createGameState(
  totalPairs: number,
  startingPlayer: PlayerNumber
): GameState {
  return {
    currentPlayer: startingPlayer,
    playerOneScore: 0,
    playerTwoScore: 0,
    matchedPairs: 0,
    totalPairs
  };
}

/**
 * Returns the player who lost the previous game.
 *
 * Uses a coin toss if both players have equal scores.
 *
 * @param state - The completed game's state.
 * @returns The starting player for the next round.
 */
export function getNextStartingPlayer(
  state: GameState
): PlayerNumber {
  if (state.playerOneScore === state.playerTwoScore) {
    return tossCoin();
  }

  return state.playerOneScore < state.playerTwoScore ? 1 : 2;
}

/**
 * Awards one point to the current player.
 *
 * Also increases the number of completed pairs.
 *
 * @param state - The current game state.
 * @returns Nothing.
 */
export function awardPoint(state: GameState): void {
  if (state.currentPlayer === 1) {
    state.playerOneScore++;
  } else {
    state.playerTwoScore++;
  }

  state.matchedPairs++;
}

/**
 * Switches the active player after a missed pair.
 *
 * @param state - The current game state.
 * @returns Nothing.
 */
export function switchPlayer(state: GameState): void {
  state.currentPlayer = state.currentPlayer === 1 ? 2 : 1;
}

/**
 * Checks whether all matching pairs have been found.
 *
 * @param state - The current game state.
 * @returns True if the game is finished.
 */
export function isGameFinished(state: GameState): boolean {
  return state.matchedPairs === state.totalPairs;
}

/**
 * Determines the winner of a completed Memory game.
 *
 * Returns null when both players have the same score.
 *
 * @param state - The completed game state.
 * @returns The winning player or null for a draw.
 */
export function getWinner(
  state: GameState
): PlayerNumber | null {
  if (state.playerOneScore === state.playerTwoScore) {
    return null;
  }

  return state.playerOneScore > state.playerTwoScore ? 1 : 2;
}
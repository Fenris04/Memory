
import { renderCoinToss, renderCoinResult } from '../templates/coin-toss-template';
import type { PlayerNumber } from './game-state';
import type { GameMode } from '../settings/game-settings';

const COIN_TOSS_DURATION: number = 1800;
const COIN_RESULT_DURATION: number = 1200;

let coinTossTimer: number | null = null;
let coinResultTimer: number | null = null;

/**
 * Cancels all pending coin toss timers.
 *
 * @returns Nothing.
 */
export function resetCoinToss(): void {
  if (coinTossTimer !== null) {
    window.clearTimeout(coinTossTimer);
  }

  if (coinResultTimer !== null) {
    window.clearTimeout(coinResultTimer);
  }

  coinTossTimer = null;
  coinResultTimer = null;
}

/**
 * Displays the result of the coin toss.
 *
 * @param startingPlayer - The selected starting player.
 * @param gameMode - The selected game mode.
 * @returns Nothing.
 */
function showCoinResult(startingPlayer: PlayerNumber, gameMode: GameMode): void {
  const COIN_SCREEN: HTMLElement | null = document.querySelector('.coin-toss');
  const MESSAGE: HTMLElement | null = document.querySelector('.coin-toss__message');

  COIN_SCREEN?.classList.add('is-finished');
  COIN_SCREEN?.setAttribute('data-winner', String(startingPlayer));

  if (MESSAGE) {
    MESSAGE.innerHTML = renderCoinResult(startingPlayer, gameMode);
  }

  coinTossTimer = null;
}

/**
 * Schedules the coin toss result and the next game screen.
 *
 * @param startingPlayer - The selected starting player.
 * @param gameMode - The selected game mode.
 * @param onComplete - The callback that displays the game.
 * @returns Nothing.
 */
function scheduleCoinToss(
  startingPlayer: PlayerNumber,
  gameMode: GameMode,
  onComplete: () => void
): void {
  coinTossTimer = window.setTimeout(
    (): void => showCoinResult(startingPlayer, gameMode),
    COIN_TOSS_DURATION
  );
  coinResultTimer = window.setTimeout(
    onComplete, COIN_TOSS_DURATION + COIN_RESULT_DURATION
  );
}

/**
 * Starts the coin toss animation.
 *
 * @param content - The application's content container.
 * @param startingPlayer - The selected starting player.
 * @param gameMode - The selected game mode.
 * @param onComplete - The callback that displays the game.
 * @returns Nothing.
 */
export function showCoinToss(
  content: HTMLElement | null,
  startingPlayer: PlayerNumber,
  gameMode: GameMode,
  onComplete: () => void
): void {
  if (!content) {
    return;
  }

  resetCoinToss();
  content.innerHTML = renderCoinToss();
  scheduleCoinToss(startingPlayer, gameMode, onComplete);
}

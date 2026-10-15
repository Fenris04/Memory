
import './styles/style.scss';

import { renderHome } from './templates/home-template';
import {
  renderSettings,
  initializeThemePreview
} from './templates/settings-template';
import { renderGame } from './templates/game-template';
import { renderScoreboard } from './templates/score-template';
import { renderGameOver } from './templates/game-over-template';
import {
  renderCoinToss,
  renderCoinResult
} from './templates/coin-toss-template';

import { setupSettingsInteractions } from './settings/settings-interactions';

import {
  createDefaultSettings,
  getGameSettings
} from './settings/settings-utils';

import { getThemeImages } from './game/card-assets';
import { createCards, shuffleCards } from './game/card-utils';
import { getPairCount } from './game/board-utils';

import {
  resetCardInteractions,
  setupCardInteractions
} from './game/card-interactions';

import {
  awardPoint,
  createGameState,
  getNextStartingPlayer,
  getWinner,
  isGameFinished,
  switchPlayer,
  tossCoin
} from './game/game-state';

import type { GameSettings } from './settings/game-settings';
import type { CardImages, MemoryCard } from './game/card-types';
import type {
  GameState,
  PlayerNumber
} from './game/game-state';
import type { CardInteractionEvents } from './game/card-interactions';

import {
  cancelBotTurn,
  resumeBotTurn,
  scheduleBotTurn,
  setBotDifficulty
} from './game/memory-bot';

import {
  rememberCard,
  resetBotMemory
} from './game/bot-memory';

const CONTENT: HTMLElement | null =
  document.getElementById('main-container');

const COIN_TOSS_DURATION: number = 1800;
const COIN_RESULT_DURATION: number = 1200;

let gameSettings: GameSettings = createDefaultSettings();
let gameState: GameState | null = null;
let coinTossTimer: number | null = null;
let coinResultTimer: number | null = null;

/**
 * Cancels all pending coin toss timers.
 *
 * @returns Nothing.
 */
function resetCoinToss(): void {
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
 * Displays the home screen.
 *
 * @returns Nothing.
 */
function showHome(): void {
  if (!CONTENT) {
    return;
  }

  CONTENT.innerHTML = renderHome();

  const START_BUTTON: HTMLElement | null =
    document.getElementById('start-button');

  START_BUTTON?.addEventListener('click', showSettings);
}

/**
 * Displays the settings screen.
 *
 * @returns Nothing.
 */
function showSettings(): void {
  if (!CONTENT) {
    return;
  }

  CONTENT.innerHTML = renderSettings();

  setupBackButton();
  setupPlayButton();
  setupSettingsInteractions();
  initializeThemePreview();
}

/**
 * Registers the Back button.
 *
 * @returns Nothing.
 */
function setupBackButton(): void {
  const BACK_BUTTON: HTMLElement | null =
    document.getElementById('back-button');

  BACK_BUTTON?.addEventListener('click', showHome);
}

/**
 * Registers the Play button.
 *
 * @returns Nothing.
 */
function setupPlayButton(): void {
  const PLAY_BUTTON: HTMLElement | null =
    document.getElementById('play-button');

  PLAY_BUTTON?.addEventListener('click', startGame);
}

/**
 * Creates and shuffles the Memory cards.
 *
 * @returns An array containing shuffled cards.
 */
function createGameCards(): MemoryCard[] {
  const IMAGES: CardImages[] = getThemeImages(gameSettings.theme);
  const PAIR_COUNT: number = getPairCount(gameSettings.boardSize);
  const CARDS: MemoryCard[] = createCards(IMAGES, PAIR_COUNT);

  return shuffleCards(CARDS);
}

/**
 * Creates a new round and clears the bot's memory.
 *
 * @param startingPlayer - The player who begins the game.
 * @returns Nothing.
 */
function createNewRound(startingPlayer: PlayerNumber): void {
  const PAIR_COUNT: number = getPairCount(gameSettings.boardSize);

  resetBotMemory();
  gameState = createGameState(PAIR_COUNT, startingPlayer);
}

/**
 * Displays the result of the coin toss.
 *
 * @param startingPlayer - The player selected by the coin toss.
 * @returns Nothing.
 */
function showCoinResult(startingPlayer: PlayerNumber): void {
  const COIN_SCREEN: HTMLElement | null =
    document.querySelector('.coin-toss');

  const MESSAGE: HTMLElement | null =
    document.querySelector('.coin-toss__message');

  COIN_SCREEN?.classList.add('is-finished');
  COIN_SCREEN?.setAttribute('data-winner', String(startingPlayer));

  if (MESSAGE) {
    MESSAGE.innerHTML = renderCoinResult(
      startingPlayer,
      gameSettings.gameMode
    );
  }

  coinTossTimer = null;
}

/**
 * Starts the coin toss animation.
 *
 * @param startingPlayer - The player selected by the coin toss.
 * @returns Nothing.
 */
function showCoinToss(startingPlayer: PlayerNumber): void {
  if (!CONTENT) {
    return;
  }

  resetCoinToss();
  CONTENT.innerHTML = renderCoinToss();

  coinTossTimer = window.setTimeout(
    (): void => showCoinResult(startingPlayer),
    COIN_TOSS_DURATION
  );

  coinResultTimer = window.setTimeout(
    showGame,
    COIN_TOSS_DURATION + COIN_RESULT_DURATION
  );
}

/**
 * Starts a new game with the selected settings.
 *
 * @returns Nothing.
 */
function startGame(): void {
  gameSettings = getGameSettings();
  setBotDifficulty(gameSettings.botDifficulty);

  const STARTING_PLAYER: PlayerNumber = tossCoin();

  createNewRound(STARTING_PLAYER);
  showCoinToss(STARTING_PLAYER);
}

/**
 * Starts a rematch.
 *
 * @returns Nothing.
 */
function startRematch(): void {
  if (!gameState) {
    return;
  }

  const IS_DRAW: boolean = getWinner(gameState) === null;
  const STARTING_PLAYER: PlayerNumber =
    getNextStartingPlayer(gameState);

  cancelBotTurn();
  createNewRound(STARTING_PLAYER);

  if (IS_DRAW) {
    showCoinToss(STARTING_PLAYER);
    return;
  }

  showGame();
}

/**
 * Updates the scoreboard without rebuilding the cards.
 *
 * @returns Nothing.
 */
function updateScoreboard(): void {
  if (!gameState) {
    return;
  }

  const SCOREBOARD: HTMLElement | null =
    document.querySelector('.scoreboard');

  if (!SCOREBOARD) {
    return;
  }

  SCOREBOARD.outerHTML = renderScoreboard(
    gameState,
    gameSettings.playerColor,
    gameSettings.gameMode
  );
}

/**
 * Displays the completed game's result screen.
 *
 * @returns Nothing.
 */
function showGameOver(): void {
  if (!CONTENT || !gameState) {
    return;
  }

  cancelBotTurn();
  resetCardInteractions();

  CONTENT.innerHTML = renderGameOver(
    gameState,
    gameSettings.playerColor,
    gameSettings.gameMode,
    gameSettings.theme
  );

  setupHomeButton();
  setupRematchButton();
}

/**
 * Registers the Home button.
 *
 * @returns Nothing.
 */
function setupHomeButton(): void {
  const HOME_BUTTON: HTMLElement | null =
    document.getElementById('home-button');

  HOME_BUTTON?.addEventListener('click', exitGame);
}

/**
 * Registers the Rematch button.
 *
 * @returns Nothing.
 */
function setupRematchButton(): void {
  const REMATCH_BUTTON: HTMLElement | null =
    document.getElementById('rematch-button');

  REMATCH_BUTTON?.addEventListener('click', startRematch);
}

/**
 * Awards a point and checks whether the game is finished.
 *
 * @returns Nothing.
 */
function handleGameMatch(): void {
  if (!gameState) {
    return;
  }

  awardPoint(gameState);
  updateScoreboard();

  if (isGameFinished(gameState)) {
    showGameOver();
    return;
  }

  if (isBotTurn()) {
    scheduleBotTurn(true);
  }
}

/**
 * Switches players after an unsuccessful attempt.
 *
 * @returns Nothing.
 */
function handleGameMiss(): void {
  if (!gameState) {
    return;
  }

  switchPlayer(gameState);
  updateScoreboard();

  if (isBotTurn()) {
    scheduleBotTurn();
  }
}

/**
 * Registers card interaction events.
 *
 * @param cards - The cards in the current game.
 * @returns Nothing.
 */
function setupGameEvents(cards: MemoryCard[]): void {
  const EVENTS: CardInteractionEvents = {
    onMatch: handleGameMatch,
    onMiss: handleGameMiss,
    onReveal: rememberCard,
    canSelectCard: (): boolean => !isBotTurn()
  };

  setupCardInteractions(cards, EVENTS);
}

/**
 * Displays the game board.
 *
 * @returns Nothing.
 */
function showGame(): void {
  if (!CONTENT || !gameState) {
    return;
  }

  const CARDS: MemoryCard[] = createGameCards();

  CONTENT.innerHTML = renderGame(
    CARDS,
    gameSettings,
    gameState
  );

  setupGameEvents(CARDS);
  setupExitButton();

  if (isBotTurn()) {
    scheduleBotTurn();
  }
}

/**
 * Exits the game and returns to the home screen.
 *
 * @returns Nothing.
 */
function exitGame(): void {
  cancelBotTurn();
  resetCoinToss();
  resetCardInteractions();

  gameState = null;
  showHome();
}

/**
 * Exits the game and returns to the settings screen.
 *
 * @returns Nothing.
 */
function exitGameToSettings(): void {
  cancelBotTurn();
  resetCoinToss();
  resetCardInteractions();

  gameState = null;
  showSettings();
}

/**
 * Registers the exit confirmation dialog.
 *
 * @returns Nothing.
 */
function setupExitButton(): void {
  const EXIT_BUTTON: HTMLButtonElement | null =
    document.querySelector<HTMLButtonElement>('#exit-button');

  const EXIT_DIALOG: HTMLDialogElement | null =
    document.querySelector<HTMLDialogElement>('#exit-dialog');

  const CANCEL_BUTTON: HTMLButtonElement | null =
    document.querySelector<HTMLButtonElement>('#cancel-exit-button');

  const CONFIRM_BUTTON: HTMLButtonElement | null =
    document.querySelector<HTMLButtonElement>('#confirm-exit-button');

  if (
    !EXIT_BUTTON ||
    !EXIT_DIALOG ||
    !CANCEL_BUTTON ||
    !CONFIRM_BUTTON
  ) {
    console.error('Exit dialog elements are missing.');
    return;
  }

  let isLeavingGame: boolean = false;

  EXIT_BUTTON.addEventListener('click', (): void => {
    cancelBotTurn();
    EXIT_DIALOG.showModal();
  });

  CANCEL_BUTTON.addEventListener('click', (): void => {
    EXIT_DIALOG.close();
  });

  EXIT_DIALOG.addEventListener('close', (): void => {
    if (!isLeavingGame && isBotTurn()) {
      resumeBotTurn();
    }
  });

  CONFIRM_BUTTON.addEventListener('click', (): void => {
    isLeavingGame = true;
    EXIT_DIALOG.close();
    exitGameToSettings();
  });
}

/**
 * Checks whether the bot is the current player.
 *
 * @returns True when the bot should play.
 */
function isBotTurn(): boolean {
  return gameSettings.gameMode === 'player-vs-bot' &&
    gameState?.currentPlayer === 2;
}

/**
 * Initializes the application.
 *
 * @returns Nothing.
 */
function init(): void {
  showHome();
}

init();


import './styles/style.scss';

import { renderHome } from './templates/home-template';
import { renderSettings, initializeThemePreview } from './templates/settings-template';
import { renderGame } from './templates/game-template';
import { renderScoreboard } from './templates/score-template';
import { renderGameOver } from './templates/game-over-template';

import { setupSettingsInteractions } from './settings/settings-interactions';
import { createDefaultSettings, getGameSettings } from './settings/settings-utils';

import { getThemeImages } from './game/card-assets';
import { createCards, shuffleCards } from './game/card-utils';
import { getPairCount } from './game/board-utils';
import { resetCardInteractions, setupCardInteractions } from './game/card-interactions';
import { resetCoinToss, showCoinToss } from './game/coin-toss-controller';
import { setupExitButton } from './game/exit-dialog-controller';

import {
  awardPoint,
  createGameState,
  getNextStartingPlayer,
  getWinner,
  isGameFinished,
  switchPlayer,
  tossCoin
} from './game/game-state';

import {
  cancelBotTurn,
  scheduleBotTurn,
  setBotDifficulty
} from './game/memory-bot';

import { rememberCard, resetBotMemory } from './game/bot-memory';

import type { GameSettings } from './settings/game-settings';
import type { CardImages, MemoryCard } from './game/card-types';
import type { GameState, PlayerNumber } from './game/game-state';
import type { CardInteractionEvents } from './game/card-interactions';

const CONTENT: HTMLElement | null = document.getElementById('main-container');
const BOT_PLAYER: PlayerNumber = 2;

let gameSettings: GameSettings = createDefaultSettings();
let gameState: GameState | null = null;

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
  document.getElementById('start-button')?.addEventListener('click', showSettings);
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
  const BACK_BUTTON: HTMLElement | null = document.getElementById('back-button');
  BACK_BUTTON?.addEventListener('click', showHome);
}

/**
 * Registers the Play button.
 *
 * @returns Nothing.
 */
function setupPlayButton(): void {
  const PLAY_BUTTON: HTMLElement | null = document.getElementById('play-button');
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
 * Starts the coin toss for the current game.
 *
 * @param startingPlayer - The selected starting player.
 * @returns Nothing.
 */
function startCoinToss(startingPlayer: PlayerNumber): void {
  showCoinToss(CONTENT, startingPlayer, gameSettings.gameMode, showGame);
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
  startCoinToss(STARTING_PLAYER);
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
  const STARTING_PLAYER: PlayerNumber = getNextStartingPlayer(gameState);

  cancelBotTurn();
  createNewRound(STARTING_PLAYER);

  if (IS_DRAW) {
    startCoinToss(STARTING_PLAYER);
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

  const SCOREBOARD: HTMLElement | null = document.querySelector('.scoreboard');
  if (!SCOREBOARD) {
    return;
  }

  SCOREBOARD.outerHTML = renderScoreboard(
    gameState, gameSettings.playerColor, gameSettings.gameMode
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
    gameState, gameSettings.playerColor, gameSettings.gameMode, gameSettings.theme
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
  const HOME_BUTTON: HTMLElement | null = document.getElementById('home-button');
  HOME_BUTTON?.addEventListener('click', exitGame);
}

/**
 * Registers the Rematch button.
 *
 * @returns Nothing.
 */
function setupRematchButton(): void {
  const REMATCH_BUTTON: HTMLElement | null = document.getElementById('rematch-button');
  REMATCH_BUTTON?.addEventListener('click', startRematch);
}

/**
 * Handles the next bot move after a successful match.
 *
 * @returns Nothing.
 */
function scheduleBotAfterMatch(): void {
  if (isBotTurn()) {
    scheduleBotTurn(true);
  }
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

  scheduleBotAfterMatch();
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
 * Starts the bot when it is the active player.
 *
 * @returns Nothing.
 */
function startBotIfNeeded(): void {
  if (isBotTurn()) {
    scheduleBotTurn();
  }
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
  CONTENT.innerHTML = renderGame(CARDS, gameSettings, gameState);

  setupGameEvents(CARDS);
  setupExitButton(isBotTurn, exitGameToSettings);
  startBotIfNeeded();
}

/**
 * Clears the current game and pending interactions.
 *
 * @returns Nothing.
 */
function clearGame(): void {
  cancelBotTurn();
  resetCoinToss();
  resetCardInteractions();
  gameState = null;
}

/**
 * Exits the game and returns to the home screen.
 *
 * @returns Nothing.
 */
function exitGame(): void {
  clearGame();
  showHome();
}

/**
 * Exits the game and returns to the settings screen.
 *
 * @returns Nothing.
 */
function exitGameToSettings(): void {
  clearGame();
  showSettings();
}

/**
 * Checks whether the bot is the current player.
 *
 * @returns True when the bot should play.
 */
function isBotTurn(): boolean {
  return gameSettings.gameMode === 'player-vs-bot' &&
    gameState?.currentPlayer === BOT_PLAYER;
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

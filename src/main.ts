import './styles/style.scss';

import { renderHome } from './templates/home-template';
import { renderSettings } from './templates/settings-template';
import { renderGame } from './templates/game-template';
import { renderScoreboard } from './templates/score-template';
import { renderGameOver } from './templates/game-over-template';

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
  isGameFinished,
  switchPlayer,
  tossCoin
} from './game/game-state';

import type { GameSettings } from './settings/game-settings';
import type { CardImages, MemoryCard } from './game/card-types';
import type { GameState } from './game/game-state';
import type { CardInteractionEvents } from './game/card-interactions';

const CONTENT: HTMLElement | null =
  document.getElementById('main-container');

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
}

/**
 * Registers the Back to Home button.
 *
 * @returns Nothing.
 */
function setupBackButton(): void {
  const BACK_BUTTON: HTMLElement | null =
    document.getElementById('back-button');

  BACK_BUTTON?.addEventListener('click', showHome);
}

/**
 * Registers the Play Now button.
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
 * Starts a new game with a randomly selected player.
 *
 * @returns Nothing.
 */
function startGame(): void {
  gameSettings = getGameSettings();

  const PAIR_COUNT: number = getPairCount(gameSettings.boardSize);

  gameState = createGameState(PAIR_COUNT, tossCoin());

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
    gameSettings.playerColor
  );
}

/**
 * Displays the result screen after the final pair.
 *
 * @returns Nothing.
 */
function showGameOver(): void {
  if (!CONTENT || !gameState) {
    return;
  }

  resetCardInteractions();

  CONTENT.innerHTML = renderGameOver(
    gameState,
    gameSettings.playerColor
  );

  setupHomeButton();
  setupRematchButton();
}

/**
 * Registers the Back to Home button on the result screen.
 *
 * @returns Nothing.
 */
function setupHomeButton(): void {
  const HOME_BUTTON: HTMLElement | null =
    document.getElementById('home-button');

  HOME_BUTTON?.addEventListener('click', exitGame);
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
  }
}

/**
 * Switches players after a missed pair.
 *
 * @returns Nothing.
 */
function handleGameMiss(): void {
  if (!gameState) {
    return;
  }

  switchPlayer(gameState);
  updateScoreboard();
}

/**
 * Registers the game events.
 *
 * @param cards - All cards in the current game.
 * @returns Nothing.
 */
function setupGameEvents(cards: MemoryCard[]): void {
  const EVENTS: CardInteractionEvents = {
    onMatch: handleGameMatch,
    onMiss: handleGameMiss
  };

  setupCardInteractions(cards, EVENTS);
}

/**
 * Displays the Memory Game screen.
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
  setupExitButton();
}

/**
 * Exits the current game safely.
 *
 * @returns Nothing.
 */
function exitGame(): void {
  resetCardInteractions();
  gameState = null;
  showHome();
}

/**
 * Registers the Exit Game button.
 *
 * @returns Nothing.
 */
function setupExitButton(): void {
  const EXIT_BUTTON: HTMLElement | null =
    document.getElementById('exit-button');

  EXIT_BUTTON?.addEventListener('click', exitGame);
}

/**
 * Initializes the Memory Game application.
 *
 * @returns Nothing.
 */
function init(): void {
  showHome();
}

/**
 * Starts a rematch with the previous loser's first turn.
 *
 * Keeps the selected settings and resets the scores.
 *
 * @returns Nothing.
 */
function startRematch(): void {
  if (!gameState) {
    return;
  }

  const STARTING_PLAYER = getNextStartingPlayer(gameState);
  const PAIR_COUNT: number = getPairCount(gameSettings.boardSize);

  gameState = createGameState(PAIR_COUNT, STARTING_PLAYER);

  showGame();
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

init();
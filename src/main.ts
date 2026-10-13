// Import the main SCSS stylesheet.
import './styles/style.scss';

// Import screen templates.
import { renderHome } from './templates/home-template';
import { renderSettings } from './templates/settings-template';
import { renderGame } from './templates/game-template';

// Import settings utilities.
import {
  createDefaultSettings,
  getGameSettings
} from './settings/settings-utils';

// Import game utilities.
import { getThemeImages } from './game/card-assets';
import { createCards } from './game/card-utils';
import { getPairCount } from './game/board-utils';

// Import TypeScript types.
import type { GameSettings } from './settings/game-settings';
import type { CardImages, MemoryCard } from './game/card-types';
import { setupCardInteractions } from './game/card-interactions';

// Find the main application container.
const CONTENT: HTMLElement | null =
  document.getElementById('main-container');

// Store the current game settings.
let gameSettings: GameSettings = createDefaultSettings();

/**
 * Displays the home screen.
 *
 * Renders the home template and registers
 * the Start Game button event.
 *
 * @returns Nothing.
 */
function showHome(): void {
  // Stop if the main container does not exist.
  if (!CONTENT) {
    return;
  }

  // Display the home screen.
  CONTENT.innerHTML = renderHome();

  // Register the Start Game button.
  const START_BUTTON: HTMLElement | null =
    document.getElementById('start-button');

  START_BUTTON?.addEventListener('click', showSettings);
}

/**
 * Displays the settings screen.
 *
 * Renders the settings template and registers
 * the navigation buttons.
 *
 * @returns Nothing.
 */
function showSettings(): void {
  // Stop if the main container does not exist.
  if (!CONTENT) {
    return;
  }

  // Display the settings screen.
  CONTENT.innerHTML = renderSettings();

  // Register the navigation buttons.
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

  PLAY_BUTTON?.addEventListener('click', saveGameSettings);
}

/**
 * Saves the selected settings and starts the game.
 *
 * Reads the selected player color, board size,
 * and card theme from the settings screen.
 *
 * @returns Nothing.
 */
function saveGameSettings(): void {
  // Save the selected game configuration.
  gameSettings = getGameSettings();

  // Open the game screen.
  showGame();
}

/**
 * Creates the cards for the selected game settings.
 *
 * Loads the front and back images for the selected theme
 * and creates the required number of matching pairs.
 *
 * @returns An array containing the memory cards.
 */
function createGameCards(): MemoryCard[] {
  // Load the card designs for the selected theme.
  const IMAGES: CardImages[] = getThemeImages(gameSettings.theme);

  // Determine the number of matching pairs.
  const PAIR_COUNT: number = getPairCount(gameSettings.boardSize);

  // Create two matching cards for each design.
  return createCards(IMAGES, PAIR_COUNT);
}

/**
 * Displays the Memory Game screen.
 *
 * Creates the cards, renders the game board,
 * and registers the card and exit interactions.
 *
 * @returns Nothing.
 */
function showGame(): void {
  if (!CONTENT) {
    return;
  }

  // Create the Memory cards.
  const CARDS: MemoryCard[] = createGameCards();

  // Display the game board.
  CONTENT.innerHTML = renderGame(CARDS, gameSettings.boardSize);

  // Register the card click events.
  setupCardInteractions(CARDS);

  // Register the Exit Game button.
  setupExitButton();
}

/**
 * Registers the Exit Game button.
 *
 * Returns to the home screen when clicked.
 *
 * @returns Nothing.
 */
function setupExitButton(): void {
  const EXIT_BUTTON: HTMLElement | null =
    document.getElementById('exit-button');

  EXIT_BUTTON?.addEventListener('click', showHome);
}

/**
 * Initializes the Memory Game application.
 *
 * Displays the home screen when the application starts.
 *
 * @returns Nothing.
 */
function init(): void {
  showHome();
}

// Start the application.
init();
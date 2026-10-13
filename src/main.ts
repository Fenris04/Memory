// Import the main SCSS stylesheet.
import './styles/style.scss';

// Import the HTML templates.
import { renderHome } from './templates/home-template';
import { renderSettings } from './templates/settings-template';

// Import the settings utilities.
import {
  createDefaultSettings,
  getGameSettings
} from './settings/settings-utils';

// Import the settings interface.
import type { GameSettings } from './settings/game-settings';

// Find the main application container.
const CONTENT: HTMLElement | null =
  document.getElementById('main-container');

// Store the current game settings.
let gameSettings: GameSettings = createDefaultSettings();

/**
 * Displays the home screen.
 *
 * Renders the home template and registers
 * the event listener for the Start Game button.
 *
 * @returns Nothing.
 */
function showHome(): void {
  // Stop if the main container does not exist.
  if (!CONTENT) {
    return;
  }

  // Insert the home screen into the container.
  CONTENT.innerHTML = renderHome();

  // Find the Start Game button.
  const START_BUTTON: HTMLElement | null =
    document.getElementById('start-button');

  // Navigate to the settings screen when clicked.
  START_BUTTON?.addEventListener('click', showSettings);
}

/**
 * Displays the settings screen.
 *
 * Renders the settings template and initializes
 * the navigation buttons.
 *
 * @returns Nothing.
 */
function showSettings(): void {
  // Stop if the main container does not exist.
  if (!CONTENT) {
    return;
  }

  // Insert the settings screen into the container.
  CONTENT.innerHTML = renderSettings();

  // Register the Back to Home button.
  setupBackButton();

  // Register the Play Now button.
  setupPlayButton();
}

/**
 * Registers the Back to Home button event.
 *
 * @returns Nothing.
 */
function setupBackButton(): void {
  // Find the Back to Home button.
  const BACK_BUTTON: HTMLElement | null =
    document.getElementById('back-button');

  // Return to the home screen when clicked.
  BACK_BUTTON?.addEventListener('click', showHome);
}

/**
 * Registers the Play Now button event.
 *
 * @returns Nothing.
 */
function setupPlayButton(): void {
  // Find the Play Now button.
  const PLAY_BUTTON: HTMLElement | null =
    document.getElementById('play-button');

  // Save the selected settings when clicked.
  PLAY_BUTTON?.addEventListener('click', saveGameSettings);
}

/**
 * Saves the currently selected game settings.
 *
 * Reads the selected player color, board size,
 * and card theme from the settings screen.
 *
 * The settings will later be used to initialize
 * the memory game.
 *
 * @returns Nothing.
 */
function saveGameSettings(): void {
  // Read all selected settings.
  gameSettings = getGameSettings();

  // Display the settings in the browser console.
  console.log('Saved game settings:', gameSettings);
}

/**
 * Initializes the Memory Game application.
 *
 * Displays the home screen when the app starts.
 *
 * @returns Nothing.
 */
function init(): void {
  showHome();
}

// Start the application.
init();
// Import the application's SCSS stylesheet.
import './styles/style.scss';

// Import the HTML template for the home screen.
import { renderHome } from './templates/home-template';

/**
 * Initializes the Memory Game application.
 *
 * Finds the main HTML container and displays
 * the home screen when the application starts.
 *
 * If the container does not exist, initialization stops.
 *
 * @returns Nothing.
 */
function init(): void {
  // Find the main container in index.html.
  const CONTENT: HTMLElement | null =
    document.getElementById('main-container');

  // Stop initialization if the container was not found.
  if (!CONTENT) {
    return;
  }

  // Insert the home screen into the main container.
  CONTENT.innerHTML = renderHome();
}

// Start the application.
init();
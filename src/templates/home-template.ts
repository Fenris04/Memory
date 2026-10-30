
import arrowIcon from '../assets/Varianten/arrow-right.svg';
import controllerIcon from '../assets/Varianten/stadia_controller.svg';

/**
 * Creates the introductory text for the home screen.
 *
 * @returns The introductory text markup.
 */
function renderHomeText(): string {
  return `
    <div class="home__text">
      <p class="home__eyebrow">It's play time.</p>
      <h1 class="home__title">Ready to play?</h1>
    </div>
  `;
}

/**
 * Creates the start button and its icons.
 *
 * @returns The start button markup.
 */
function renderStartButton(): string {
  return `
    <button class="home__start-button" id="start-button" type="button">
      <img class="home__button-controller"
        src="${controllerIcon}" alt="" aria-hidden="true" />
      <span class="home__button-label">Play</span>
      <img class="home__button-arrow"
        src="${arrowIcon}" alt="" aria-hidden="true" />
    </button>
  `;
}

/**
 * Creates the outline of the decorative controller.
 *
 * @returns The controller outline SVG markup.
 */
function renderControllerOutline(): string {
  return `
    <path
      d="M45 175 L165 75 Q205 40 245 75 L415 215 Q455 250 435 295 L355 440 Q330 485 285 465 Q250 450 260 410 L275 365 Q280 345 260 330 L185 270 Q165 255 140 265 L85 295 Q45 315 20 280"
      stroke="currentColor"
      stroke-width="42"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  `;
}

/**
 * Creates the directional controls of the decorative controller.
 *
 * @returns The directional controls SVG markup.
 */
function renderControllerDirections(): string {
  return `
    <path
      d="M155 165 L215 225 M215 165 L155 225"
      stroke="currentColor"
      stroke-width="32"
      stroke-linecap="round"
    />
  `;
}

/**
 * Creates the buttons of the decorative controller.
 *
 * @returns The controller buttons SVG markup.
 */
function renderControllerButtons(): string {
  return `
    <circle cx="300" cy="255" r="20" fill="currentColor" />
    <circle cx="355" cy="255" r="20" fill="currentColor" />
    <circle cx="300" cy="310" r="20" fill="currentColor" />
    <circle cx="355" cy="310" r="20" fill="currentColor" />
  `;
}

/**
 * Creates the decorative controller illustration.
 *
 * @returns The controller SVG markup.
 */
function renderHomeDecoration(): string {
  return `
    <svg class="home__decoration"
      viewBox="0 0 500 500" fill="none" aria-hidden="true">
      ${renderControllerOutline()}
      ${renderControllerDirections()}
      ${renderControllerButtons()}
    </svg>
  `;
}

/**
 * Creates the HTML structure for the home screen.
 *
 * Displays the introductory text, game title,
 * play button, and decorative controller.
 *
 * @returns The HTML markup for the home screen.
 */
export function renderHome(): string {
  return `
    <div class="home">
      <div class="home__hero">
        ${renderHomeText()}
        ${renderStartButton()}
      </div>
      ${renderHomeDecoration()}
    </div>
  `;
}

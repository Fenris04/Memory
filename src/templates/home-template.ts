
import playButtonDefault from '../assets/Varianten/Primary-button/Property-1-Default__2030-355.svg';
import playButtonHover from '../assets/Varianten/Primary-button/Property-1-hover__2030-357.svg';

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
    <section class="home">
      <div class="home__content">
        <div class="home__hero">
          <div class="home__text">
            <p class="home__eyebrow">It's play time.</p>

            <h1 class="home__title">Ready to play?</h1>
          </div>

          <button
            class="home__start-button"
            id="start-button"
            type="button"
            aria-label="Play"
          >
            <img
              class="home__button-image home__button-image--default"
              src="${playButtonDefault}"
              alt=""
            />

            <img
              class="home__button-image home__button-image--hover"
              src="${playButtonHover}"
              alt=""
            />
          </button>
        </div>
      </div>

      <svg
        class="home__decoration"
        viewBox="0 0 500 500"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M45 175 L165 75 Q205 40 245 75 L415 215 Q455 250 435 295 L355 440 Q330 485 285 465 Q250 450 260 410 L275 365 Q280 345 260 330 L185 270 Q165 255 140 265 L85 295 Q45 315 20 280"
          stroke="currentColor"
          stroke-width="42"
          stroke-linecap="round"
          stroke-linejoin="round"
        />

        <path
          d="M155 165 L215 225 M215 165 L155 225"
          stroke="currentColor"
          stroke-width="32"
          stroke-linecap="round"
        />

        <circle cx="300" cy="255" r="20" fill="currentColor" />
        <circle cx="355" cy="255" r="20" fill="currentColor" />
        <circle cx="300" cy="310" r="20" fill="currentColor" />
        <circle cx="355" cy="310" r="20" fill="currentColor" />
      </svg>
    </section>
  `;
}

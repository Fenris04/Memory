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
        <p class="home__eyebrow">It's play time.</p>

        <h1 class="home__title">Ready to play?</h1>

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

      <span class="home__decoration" aria-hidden="true">🎮</span>
    </section>
  `;
}
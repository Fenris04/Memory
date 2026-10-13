/**
 * Creates the HTML structure for the home screen.
 *
 * Displays the game title, an animated controller icon,
 * a short description, and the start button.
 *
 * @returns The HTML markup for the home screen.
 */
export function renderHome(): string {
  return `
    <section class="home">
      <span class="home__icon" aria-hidden="true">🎮</span>

      <h1 class="home__title">Memory Game</h1>

      <p class="home__description">
        Find the matching pairs and challenge your friends!
      </p>

      <button
        class="home__start-button"
        id="start-button"
        type="button"
      >
        Start Game
      </button>
    </section>
  `;
}
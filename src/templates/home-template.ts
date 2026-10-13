/**
 * Creates the HTML structure for the home screen.
 *
 * The home screen is the first page users see
 * when they open the Memory Game application.
 *
 * @returns The HTML markup for the home screen.
 */
export function renderHome(): string {
  return `
    <section class="home">
      <h1 class="home__title">Memory Game</h1>

      <p class="home__description">
        Find the matching pairs and win the game!
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
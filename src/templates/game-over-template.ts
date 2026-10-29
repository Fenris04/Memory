
import { getWinner } from '../game/game-state';
import { getPlayerName } from '../game/player-utils';

import type {
  GameState,
  PlayerNumber
} from '../game/game-state';

import type {
  GameMode,
  GameSettings,
  PlayerColor
} from '../settings/game-settings';

const GAME_OVER_ASSETS: Record<string, string> = import.meta.glob(
  '../assets/Varianten/**/*.{svg,png}',
  {
    eager: true,
    query: '?url',
    import: 'default'
  }
);

/**
 * Finds a Game Over image by its file name.
 *
 * @param fileName - The image file name.
 * @returns The image URL or an empty string.
 */
function getGameOverAsset(fileName: string): string {
  const MATCHING_PATH: string | undefined =
    Object.keys(GAME_OVER_ASSETS).find(
      (path: string): boolean =>
        path.split('/').pop()?.toLowerCase() === fileName.toLowerCase()
    );

  return MATCHING_PATH
    ? GAME_OVER_ASSETS[MATCHING_PATH]
    : '';
}

/**
 * Returns the opposite player color.
 *
 * @param color - The selected color of Player 1.
 * @returns The color assigned to Player 2.
 */
function getOppositeColor(color: PlayerColor): PlayerColor {
  return color === 'blue' ? 'orange' : 'blue';
}

/**
 * Returns the winner's assigned color.
 *
 * @param winner - The winning player.
 * @param playerColor - The selected color of Player 1.
 * @returns The winning player's color.
 */
function getWinnerColor(
  winner: PlayerNumber,
  playerColor: PlayerColor
): PlayerColor {
  return winner === 1
    ? playerColor
    : getOppositeColor(playerColor);
}

/**
 * Creates the final score display.
 *
 * @param state - The completed game state.
 * @param gameMode - The selected game mode.
 * @returns The final score markup.
 */
function renderFinalScores(
  state: GameState,
  gameMode: GameMode
): string {
  const FIRST_NAME: string = getPlayerName(1, gameMode);
  const SECOND_NAME: string = getPlayerName(2, gameMode);

  return `
    <div class="game-over__scores">
      <span class="game-over__score">
        <span>${FIRST_NAME}</span>
        <strong>${state.playerOneScore}</strong>
      </span>

      <span class="game-over__score">
        <span>${SECOND_NAME}</span>
        <strong>${state.playerTwoScore}</strong>
      </span>
    </div>
  `;
}

/**
 * Creates the winner or draw heading.
 *
 * @param winner - The winning player or null.
 * @param gameMode - The selected game mode.
 * @returns The result heading markup.
 */
function renderResultHeading(
  winner: PlayerNumber | null,
  gameMode: GameMode
): string {
  if (winner === null) {
    return `
      <p class="game-over__eyebrow">It's a</p>
      <h2 class="game-over__result">DRAW</h2>
    `;
  }

  return `
    <p class="game-over__eyebrow">The winner is</p>
    <h2 class="game-over__result">
      ${getPlayerName(winner, gameMode)}
    </h2>
  `;
}

/**
 * Returns the draw illustration for the selected theme.
 *
 * @param theme - The selected card theme.
 * @returns The illustration image URL.
 */
function getDrawIcon(theme: GameSettings['theme']): string {
  const DRAW_ICONS: Record<GameSettings['theme'], string> = {
    'code-vibes': 'Scale_Icon.svg',
    gaming: 'Scale_Icon2.png',
    'da-projects': 'Scale_Icon3.png',
    food: 'scale_icon4.png'
  };

  return getGameOverAsset(DRAW_ICONS[theme]);
}

/**
 * Creates the winner or draw illustration.
 *
 * @param winner - The winning player or null.
 * @param theme - The selected theme.
 * @param resultColor - The winning player's color or draw.
 * @returns The illustration markup.
 */
function renderResultIcon(
  winner: PlayerNumber | null,
  theme: GameSettings['theme'],
  resultColor: PlayerColor | 'draw'
): string {
  if (winner === null) {
    return `
      <div class="game-over__icon game-over__icon--draw">
        <img
          src="${getDrawIcon(theme)}"
          alt=""
          aria-hidden="true"
        />
      </div>
    `;
  }

  if (theme === 'gaming') {
    return `
      <div class="game-over__icon game-over__icon--trophy">
        <img
          src="${getGameOverAsset('pokal.svg')}"
          alt=""
          aria-hidden="true"
        />
      </div>
    `;
  }

  const PAWN_ICON: string = resultColor === 'blue'
    ? 'blue-pawn.svg'
    : 'orange-pawn.svg';

  return `
    <div class="game-over__icon game-over__icon--player">
      <img
        src="${getGameOverAsset(PAWN_ICON)}"
        alt=""
        aria-hidden="true"
      />
    </div>
  `;
}

/**
 * Creates the result action buttons.
 *
 * @returns The action button markup.
 */
function renderResultActions(): string {
  return `
    <div class="game-over__actions">
      <button id="home-button" type="button">
        Home
      </button>

      <button id="rematch-button" type="button">
        Rematch
      </button>
    </div>
  `;
}

/**
 * Creates the completed game's result screen.
 *
 * @param state - The completed game state.
 * @param playerColor - The selected color of Player 1.
 * @param gameMode - The selected game mode.
 * @param theme - The selected theme.
 * @returns HTML markup for the result screen.
 */
export function renderGameOver(
  state: GameState,
  playerColor: PlayerColor,
  gameMode: GameMode,
  theme: GameSettings['theme']
): string {
  const WINNER: PlayerNumber | null = getWinner(state);

  const RESULT_COLOR: PlayerColor | 'draw' = WINNER === null
    ? 'draw'
    : getWinnerColor(WINNER, playerColor);

  const CONFETTI: string = theme === 'code-vibes' && WINNER !== null
    ? `
      <img
        class="game-over__confetti"
        src="${getGameOverAsset('Confetti.svg')}"
        alt=""
        aria-hidden="true"
      />
    `
    : '';

  return `
    <main
      class="game-over"
      data-theme="${theme}"
      data-result="${RESULT_COLOR}"
    >
      <div class="game-over__intro">
        <h1 class="game-over__title">Game Over</h1>

        <p class="game-over__score-label">
          Final score
        </p>

        ${renderFinalScores(state, gameMode)}
      </div>

      <div class="game-over__outcome">
        ${CONFETTI}
        ${renderResultHeading(WINNER, gameMode)}
        ${renderResultIcon(WINNER, theme, RESULT_COLOR)}
        ${renderResultActions()}
      </div>
    </main>
  `;
}

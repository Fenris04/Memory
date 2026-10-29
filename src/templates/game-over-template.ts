
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

type GameOverTheme = GameSettings['theme'];
type ResultColor = PlayerColor | 'draw';

const PLAYER_ONE: PlayerNumber = 1;
const PLAYER_TWO: PlayerNumber = 2;

const GAME_OVER_ASSETS: Record<string, string> = import.meta.glob(
  '../assets/Varianten/**/*.{svg,png}',
  {
    eager: true,
    query: '?url',
    import: 'default'
  }
);

const DRAW_ICONS: Record<GameOverTheme, string> = {
  'code-vibes': 'Scale_Icon.svg',
  gaming: 'Scale_Icon2.png',
  'da-projects': 'Scale_Icon3.png',
  food: 'scale_icon4.png'
};

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

  return MATCHING_PATH ? GAME_OVER_ASSETS[MATCHING_PATH] : '';
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
  return winner === PLAYER_ONE
    ? playerColor
    : getOppositeColor(playerColor);
}

/**
 * Returns the result color for a winner or draw.
 *
 * @param winner - The winning player or null.
 * @param playerColor - The selected color of Player 1.
 * @returns The result color.
 */
function getResultColor(
  winner: PlayerNumber | null,
  playerColor: PlayerColor
): ResultColor {
  return winner === null
    ? 'draw'
    : getWinnerColor(winner, playerColor);
}

/**
 * Creates the score markup for one player.
 *
 * @param player - The player number.
 * @param score - The player's final score.
 * @param gameMode - The selected game mode.
 * @returns The player's score markup.
 */
function renderPlayerScore(
  player: PlayerNumber,
  score: number,
  gameMode: GameMode
): string {
  return `
    <span class="game-over__score">
      <span>${getPlayerName(player, gameMode)}</span>
      <strong>${score}</strong>
    </span>
  `;
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
  return `
    <div class="game-over__scores">
      ${renderPlayerScore(PLAYER_ONE, state.playerOneScore, gameMode)}
      ${renderPlayerScore(PLAYER_TWO, state.playerTwoScore, gameMode)}
    </div>
  `;
}

/**
 * Creates the heading for a draw.
 *
 * @returns The draw heading markup.
 */
function renderDrawHeading(): string {
  return `
    <p class="game-over__eyebrow">It's a</p>
    <h2 class="game-over__result">DRAW</h2>
  `;
}

/**
 * Creates the heading for the winning player.
 *
 * @param winner - The winning player.
 * @param gameMode - The selected game mode.
 * @returns The winner heading markup.
 */
function renderWinnerHeading(
  winner: PlayerNumber,
  gameMode: GameMode
): string {
  return `
    <p class="game-over__eyebrow">The winner is</p>
    <h2 class="game-over__result">
      ${getPlayerName(winner, gameMode)}
    </h2>
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
  return winner === null
    ? renderDrawHeading()
    : renderWinnerHeading(winner, gameMode);
}

/**
 * Returns the draw illustration for the selected theme.
 *
 * @param theme - The selected card theme.
 * @returns The illustration image URL.
 */
function getDrawIcon(theme: GameOverTheme): string {
  return getGameOverAsset(DRAW_ICONS[theme]);
}

/**
 * Creates an illustration with the specified CSS class.
 *
 * @param className - The illustration modifier class.
 * @param imageUrl - The illustration image URL.
 * @returns The illustration markup.
 */
function renderIllustration(
  className: string,
  imageUrl: string
): string {
  return `
    <div class="game-over__icon ${className}">
      <img
        src="${imageUrl}"
        alt=""
        aria-hidden="true"
      />
    </div>
  `;
}

/**
 * Creates the draw illustration.
 *
 * @param theme - The selected card theme.
 * @returns The draw illustration markup.
 */
function renderDrawIcon(theme: GameOverTheme): string {
  return renderIllustration(
    'game-over__icon--draw',
    getDrawIcon(theme)
  );
}

/**
 * Creates the trophy illustration for the gaming theme.
 *
 * @returns The trophy illustration markup.
 */
function renderTrophyIcon(): string {
  return renderIllustration(
    'game-over__icon--trophy',
    getGameOverAsset('pokal.svg')
  );
}

/**
 * Creates the winner's pawn illustration.
 *
 * @param resultColor - The winner's player color.
 * @returns The pawn illustration markup.
 */
function renderPawnIcon(resultColor: PlayerColor): string {
  const PAWN_ICON: string = resultColor === 'blue'
    ? 'blue-pawn.svg'
    : 'orange-pawn.svg';

  return renderIllustration(
    'game-over__icon--player',
    getGameOverAsset(PAWN_ICON)
  );
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
  theme: GameOverTheme,
  resultColor: ResultColor
): string {
  if (winner === null) {
    return renderDrawIcon(theme);
  }

  return theme === 'gaming'
    ? renderTrophyIcon()
    : renderPawnIcon(resultColor as PlayerColor);
}

/**
 * Creates the confetti illustration for the winner screen.
 *
 * @param winner - The winning player or null.
 * @param theme - The selected card theme.
 * @returns The confetti markup or an empty string.
 */
function renderConfetti(
  winner: PlayerNumber | null,
  theme: GameOverTheme
): string {
  if (theme !== 'code-vibes' || winner === null) {
    return '';
  }

  return `
    <img
      class="game-over__confetti"
      src="${getGameOverAsset('Confetti.svg')}"
      alt=""
      aria-hidden="true"
    />
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
 * Creates the introductory Game Over display.
 *
 * @param state - The completed game state.
 * @param gameMode - The selected game mode.
 * @returns The intro markup.
 */
function renderGameOverIntro(
  state: GameState,
  gameMode: GameMode
): string {
  return `
    <div class="game-over__intro">
      <h1 class="game-over__title">Game Over</h1>
      <p class="game-over__score-label">
        Final score
      </p>
      ${renderFinalScores(state, gameMode)}
    </div>
  `;
}

/**
 * Creates the final result display.
 *
 * @param winner - The winning player or null.
 * @param gameMode - The selected game mode.
 * @param theme - The selected card theme.
 * @param resultColor - The result color.
 * @returns The outcome markup.
 */
function renderGameOverOutcome(
  winner: PlayerNumber | null,
  gameMode: GameMode,
  theme: GameOverTheme,
  resultColor: ResultColor
): string {
  return `
    <div class="game-over__outcome">
      ${renderConfetti(winner, theme)}
      ${renderResultHeading(winner, gameMode)}
      ${renderResultIcon(winner, theme, resultColor)}
      ${renderResultActions()}
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
  theme: GameOverTheme
): string {
  const WINNER: PlayerNumber | null = getWinner(state);
  const RESULT_COLOR: ResultColor = getResultColor(WINNER, playerColor);

  return `
    <main class="game-over" data-theme="${theme}" data-result="${RESULT_COLOR}">
      ${renderGameOverIntro(state, gameMode)}
      ${renderGameOverOutcome(WINNER, gameMode, theme, RESULT_COLOR)}
    </main>
  `;
}

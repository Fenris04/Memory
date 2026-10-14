import {
  getAvailableCards,
  selectBotCard
} from './card-interactions';

const BOT_THINK_DELAY: number = 1400;
const BOT_SECOND_CARD_DELAY: number = 700;
const BOT_NEXT_TURN_DELAY: number = 1200;

let botTimer: number | null = null;

/**
 * Returns a random card from the available cards.
 *
 * @param cards - The available card elements.
 * @returns A random card or undefined.
 */
function getRandomCard(
  cards: HTMLButtonElement[]
): HTMLButtonElement | undefined {
  if (cards.length === 0) {
    return undefined;
  }

  const RANDOM_INDEX: number = Math.floor(Math.random() * cards.length);

  return cards[RANDOM_INDEX];
}

/**
 * Reveals one random available card.
 *
 * @returns Nothing.
 */
function revealRandomCard(): void {
  const AVAILABLE_CARDS: HTMLButtonElement[] = getAvailableCards();
  const SELECTED_CARD: HTMLButtonElement | undefined =
    getRandomCard(AVAILABLE_CARDS);

  if (SELECTED_CARD) {
    selectBotCard(SELECTED_CARD);
  }
}

/**
 * Reveals the second card of the bot's turn.
 *
 * @returns Nothing.
 */
function playSecondCard(): void {
  botTimer = null;
  revealRandomCard();
}

/**
 * Reveals the first card and schedules the second card.
 *
 * @returns Nothing.
 */
function playFirstCard(): void {
  botTimer = null;
  revealRandomCard();

  botTimer = window.setTimeout(
    playSecondCard,
    BOT_SECOND_CARD_DELAY
  );
}

/**
 * Schedules the bot's first card selection.
 *
 * @param isAnotherTurn - Whether the bot just found a pair.
 * @returns Nothing.
 */
export function scheduleBotTurn(
  isAnotherTurn: boolean = false
): void {
  cancelBotTurn();

  const DELAY: number = isAnotherTurn
    ? BOT_NEXT_TURN_DELAY
    : BOT_THINK_DELAY;

  botTimer = window.setTimeout(
    playFirstCard,
    DELAY
  );
}

/**
 * Cancels the currently scheduled bot action.
 *
 * @returns Nothing.
 */
export function cancelBotTurn(): void {
  if (botTimer !== null) {
    window.clearTimeout(botTimer);
  }

  botTimer = null;
}
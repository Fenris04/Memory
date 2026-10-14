import {
  getAvailableCards,
  selectBotCard
} from './card-interactions';

import {
  findKnownPair,
  forgetRandomCard,
  getRememberedCard
} from './bot-memory';

import type { BotDifficulty } from '../settings/game-settings';

const BOT_THINK_DELAY: number = 1400;
const BOT_SECOND_CARD_DELAY: number = 700;
const BOT_NEXT_TURN_DELAY: number = 1200;

let botTimer: number | null = null;
let botDifficulty: BotDifficulty = 'easy';

/**
 * Selects a random card from the available cards.
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
 * Returns a card element by its unique ID.
 *
 * @param cardId - The card's unique ID.
 * @returns The matching card element or undefined.
 */
function findAvailableCard(
  cardId: number
): HTMLButtonElement | undefined {
  return getAvailableCards().find(
    (card: HTMLButtonElement): boolean =>
      Number(card.dataset.cardId) === cardId
  );
}

/**
 * Finds a pair already known to the bot.
 *
 * @returns The first card of a known pair or undefined.
 */
function getKnownPairCard(): HTMLButtonElement | undefined {
  const AVAILABLE_IDS: number[] = getAvailableCards().map(
    (card: HTMLButtonElement): number =>
      Number(card.dataset.cardId)
  );

  const PAIR: [number, number] | null = findKnownPair(AVAILABLE_IDS);

  return PAIR ? findAvailableCard(PAIR[0]) : undefined;
}

/**
 * Chooses the first card based on bot difficulty.
 *
 * @returns The selected card or undefined.
 */
function chooseFirstCard(): HTMLButtonElement | undefined {
  if (shouldUseMemory()) {
    const KNOWN_CARD: HTMLButtonElement | undefined =
      getKnownPairCard();

    if (KNOWN_CARD) {
      return KNOWN_CARD;
    }
  }

  return getRandomCard(getAvailableCards());
}

/**
 * Finds a remembered match for a revealed card.
 *
 * @param firstCardId - The first card's unique ID.
 * @returns A matching card element or undefined.
 */
function getRememberedMatch(
  firstCardId: number
): HTMLButtonElement | undefined {
  const FIRST_CARD = getRememberedCard(firstCardId);

  if (!FIRST_CARD) {
    return undefined;
  }

  return getAvailableCards().find(
    (card: HTMLButtonElement): boolean => {
      const CARD_ID: number = Number(card.dataset.cardId);
      const KNOWN_CARD = getRememberedCard(CARD_ID);

      return KNOWN_CARD?.pairId === FIRST_CARD.pairId;
    }
  );
}

/**
 * Selects the second card based on bot difficulty.
 *
 * @param firstCardId - The first revealed card's ID.
 * @returns The selected card or undefined.
 */
function chooseSecondCard(
  firstCardId: number
): HTMLButtonElement | undefined {
  if (shouldUseMemory()) {
    const MATCH: HTMLButtonElement | undefined =
      getRememberedMatch(firstCardId);

    if (MATCH) {
      return MATCH;
    }
  }

  return getRandomCard(getAvailableCards());
}

/**
 * Reveals the second card of the bot's turn.
 *
 * @param firstCardId - The first revealed card's ID.
 * @returns Nothing.
 */
function playSecondCard(firstCardId: number): void {
  botTimer = null;

  const SECOND_CARD: HTMLButtonElement | undefined =
    chooseSecondCard(firstCardId);

  if (SECOND_CARD) {
    selectBotCard(SECOND_CARD);
  }
}

/**
 * Reveals the first card and schedules the second card.
 *
 * @returns Nothing.
 */
function playFirstCard(): void {
  botTimer = null;

  const FIRST_CARD: HTMLButtonElement | undefined = chooseFirstCard();

  if (!FIRST_CARD) {
    return;
  }

  selectBotCard(FIRST_CARD);

  const FIRST_CARD_ID: number = Number(FIRST_CARD.dataset.cardId);

  botTimer = window.setTimeout(
    (): void => playSecondCard(FIRST_CARD_ID),
    BOT_SECOND_CARD_DELAY
  );
}

/**
 * Sets the difficulty for the current bot game.
 *
 * @param difficulty - The selected bot difficulty.
 * @returns Nothing.
 */
export function setBotDifficulty(
  difficulty: BotDifficulty
): void {
  botDifficulty = difficulty;
}

/**
 * Schedules the bot's next turn.
 *
 * @param isAnotherTurn - Whether the bot just found a pair.
 * @returns Nothing.
 */
export function scheduleBotTurn(
  isAnotherTurn: boolean = false
): void {
  cancelBotTurn();
  applyMediumMemoryLoss();

  const DELAY: number = isAnotherTurn
    ? BOT_NEXT_TURN_DELAY
    : BOT_THINK_DELAY;

  botTimer = window.setTimeout(playFirstCard, DELAY);
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

/**
 * Occasionally removes one remembered card on medium difficulty.
 *
 * @returns Nothing.
 */
function applyMediumMemoryLoss(): void {
  if (botDifficulty !== 'medium') {
    return;
  }

  const SHOULD_FORGET: boolean = Math.random() < 0.5;

  if (SHOULD_FORGET) {
    forgetRandomCard();
  }
}

/**
 * Determines whether the bot uses its remembered cards.
 *
 * @returns True if the bot should use its memory.
 */
function shouldUseMemory(): boolean {
  if (botDifficulty === 'hard') {
    return true;
  }

  if (botDifficulty === 'medium') {
    return Math.random() < 0.5;
  }

  return false;
}

import type { MemoryCard } from './card-types';

const FLIP_BACK_DELAY: number = 1000;
const FLIP_ANIMATION_DURATION: number = 600;

/**
 * Defines the events reported by card interactions.
 */
export interface CardInteractionEvents {
  onMatch: () => void;
  onMiss: () => void;
  onReveal?: (cardId: number, pairId: number) => void;
  canSelectCard?: () => boolean;
}

let revealedCards: HTMLButtonElement[] = [];
let isBoardLocked: boolean = false;
let flipBackTimer: number | null = null;
let turnChangeTimer: number | null = null;
let activeCards: MemoryCard[] = [];
let activeEvents: CardInteractionEvents | null = null;

/**
 * Reveals a Memory card.
 *
 * @param card - The selected card element.
 * @returns Nothing.
 */
function revealCard(card: HTMLButtonElement): void {
  card.classList.add('is-flipped');
  card.setAttribute('aria-pressed', 'true');
  revealedCards.push(card);
}

/**
 * Hides a previously revealed Memory card.
 *
 * @param card - The card element to hide.
 * @returns Nothing.
 */
function hideCard(card: HTMLButtonElement): void {
  card.classList.remove('is-flipped');
  card.setAttribute('aria-pressed', 'false');
}

/**
 * Finds the data belonging to a card element.
 *
 * @param element - The selected card button.
 * @param cards - All cards in the current game.
 * @returns The matching card data or undefined.
 */
function findCard(
  element: HTMLButtonElement,
  cards: MemoryCard[]
): MemoryCard | undefined {
  const CARD_ID: number = Number(element.dataset.cardId);

  return cards.find(
    (card: MemoryCard): boolean => card.id === CARD_ID
  );
}

/**
 * Checks whether two cards form a matching pair.
 *
 * @param first - The first revealed card.
 * @param second - The second revealed card.
 * @param cards - All cards in the current game.
 * @returns True when both cards belong to the same pair.
 */
function isMatchingPair(
  first: HTMLButtonElement,
  second: HTMLButtonElement,
  cards: MemoryCard[]
): boolean {
  const FIRST_CARD: MemoryCard | undefined = findCard(first, cards);
  const SECOND_CARD: MemoryCard | undefined = findCard(second, cards);

  return Boolean(
    FIRST_CARD &&
    SECOND_CARD &&
    FIRST_CARD.pairId === SECOND_CARD.pairId
  );
}

/**
 * Marks two matching cards as completed.
 *
 * @param first - The first matching card.
 * @param second - The second matching card.
 * @returns Nothing.
 */
function markMatchedCards(
  first: HTMLButtonElement,
  second: HTMLButtonElement
): void {
  first.classList.add('is-matched');
  second.classList.add('is-matched');

  first.disabled = true;
  second.disabled = true;
  revealedCards = [];
}

/**
 * Hides cards that do not form a matching pair.
 *
 * @returns Nothing.
 */
function hideMismatchedCards(): void {
  revealedCards.forEach(hideCard);
  revealedCards = [];
  flipBackTimer = null;
}

/**
 * Finishes a missed turn after the flip animation.
 *
 * @param events - The registered game events.
 * @returns Nothing.
 */
function finishMissedTurn(events: CardInteractionEvents): void {
  turnChangeTimer = null;

  events.onMiss();

  isBoardLocked = false;
}

/**
 * Handles a successful card match.
 *
 * @param events - The registered game events.
 * @returns Nothing.
 */
function handleMatch(events: CardInteractionEvents): void {
  const [FIRST_CARD, SECOND_CARD] = revealedCards;

  markMatchedCards(FIRST_CARD, SECOND_CARD);
  events.onMatch();
}

/**
 * Handles a missed card pair.
 *
 * @param events - The registered game events.
 * @returns Nothing.
 */
function handleMiss(events: CardInteractionEvents): void {
  isBoardLocked = true;

  flipBackTimer = window.setTimeout(
    (): void => {
      hideMismatchedCards();

      turnChangeTimer = window.setTimeout(
        (): void => finishMissedTurn(events),
        FLIP_ANIMATION_DURATION
      );
    },
    FLIP_BACK_DELAY
  );
}

/**
 * Evaluates the currently revealed pair.
 *
 * @param cards - All cards in the current game.
 * @param events - The registered game events.
 * @returns Nothing.
 */
function checkRevealedCards(
  cards: MemoryCard[],
  events: CardInteractionEvents
): void {
  const [FIRST_CARD, SECOND_CARD] = revealedCards;

  if (isMatchingPair(FIRST_CARD, SECOND_CARD, cards)) {
    handleMatch(events);
    return;
  }

  handleMiss(events);
}

/**
 * Checks whether a card can be selected.
 *
 * @param card - The selected card element.
 * @returns True when the card is available.
 */
function isCardAvailable(card: HTMLButtonElement): boolean {
  return !isBoardLocked &&
    !card.disabled &&
    !card.classList.contains('is-flipped') &&
    revealedCards.length < 2;
}

/**
 * Reveals a selected card and evaluates completed pairs.
 *
 * @param card - The selected card element.
 * @returns Nothing.
 */
function selectCard(card: HTMLButtonElement): void {
  if (!activeEvents || !isCardAvailable(card)) {
    return;
  }

  revealCard(card);
  reportRevealedCard(card);

  if (revealedCards.length === 2) {
    checkRevealedCards(activeCards, activeEvents);
  }
}

/**
 * Handles a card selection made by a human player.
 *
 * @param card - The clicked card element.
 * @returns Nothing.
 */
function handleHumanClick(card: HTMLButtonElement): void {
  if (activeEvents?.canSelectCard?.() === false) {
    return;
  }

  selectCard(card);
}

/**
 * Returns cards that are still available for selection.
 *
 * @returns All currently selectable card elements.
 */
export function getAvailableCards(): HTMLButtonElement[] {
  const CARDS: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll<HTMLButtonElement>('.game__card');

  return Array.from(CARDS).filter(isCardAvailable);
}

/**
 * Selects a card on behalf of the bot.
 *
 * @param card - The card selected by the bot.
 * @returns Nothing.
 */
export function selectBotCard(card: HTMLButtonElement): void {
  selectCard(card);
}

/**
 * Registers click events for all Memory cards.
 *
 * @param cards - All cards in the current game.
 * @param events - The registered game events.
 * @returns Nothing.
 */
export function setupCardInteractions(
  cards: MemoryCard[],
  events: CardInteractionEvents
): void {
  resetCardInteractions();

  activeCards = cards;
  activeEvents = events;

  const CARD_ELEMENTS: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll<HTMLButtonElement>('.game__card');

  CARD_ELEMENTS.forEach((card: HTMLButtonElement): void => {
    card.addEventListener(
      'click',
      (): void => handleHumanClick(card)
    );
  });
}

/**
 * Resets card interactions and cancels pending timers.
 *
 * @returns Nothing.
 */
export function resetCardInteractions(): void {
  if (flipBackTimer !== null) {
    window.clearTimeout(flipBackTimer);
  }

  if (turnChangeTimer !== null) {
    window.clearTimeout(turnChangeTimer);
  }

  flipBackTimer = null;
  turnChangeTimer = null;
  revealedCards = [];
  isBoardLocked = false;
  activeCards = [];
  activeEvents = null;
}

/**
 * Reports a newly revealed card to the game controller.
 *
 * @param element - The revealed card element.
 * @returns Nothing.
 */
function reportRevealedCard(element: HTMLButtonElement): void {
  const CARD: MemoryCard | undefined = findCard(
    element,
    activeCards
  );

  if (!CARD) {
    return;
  }

  activeEvents?.onReveal?.(CARD.id, CARD.pairId);
}

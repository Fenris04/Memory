import type { MemoryCard } from './card-types';

// Define how long mismatched cards remain visible.
const FLIP_BACK_DELAY: number = 1000;

/**
 * Defines the events reported by the card interactions.
 */
export interface CardInteractionEvents {
  onMatch: () => void;
  onMiss: () => void;
}

// Store the currently revealed cards.
let revealedCards: HTMLButtonElement[] = [];

// Prevent clicks while mismatched cards are visible.
let isBoardLocked: boolean = false;

// Store the active timer so it can be cancelled.
let flipBackTimer: number | null = null;

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
 * Finds a Memory card by its HTML element.
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
 * Checks whether two cards belong to the same pair.
 *
 * @param first - The first revealed card.
 * @param second - The second revealed card.
 * @param cards - All cards in the current game.
 * @returns True if both cards belong to the same pair.
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
 * Hides two cards that do not match.
 *
 * @returns Nothing.
 */
function hideMismatchedCards(): void {
  revealedCards.forEach(hideCard);

  revealedCards = [];
  isBoardLocked = false;
  flipBackTimer = null;
}

/**
 * Handles two matching cards.
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
 * Handles two cards that do not match.
 *
 * @param events - The registered game events.
 * @returns Nothing.
 */
function handleMiss(events: CardInteractionEvents): void {
  isBoardLocked = true;
  events.onMiss();

  flipBackTimer = window.setTimeout(
    hideMismatchedCards,
    FLIP_BACK_DELAY
  );
}

/**
 * Evaluates the two currently revealed cards.
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
 * Handles a click on a Memory card.
 *
 * @param card - The clicked card element.
 * @param cards - All cards in the current game.
 * @param events - The registered game events.
 * @returns Nothing.
 */
function handleCardClick(
  card: HTMLButtonElement,
  cards: MemoryCard[],
  events: CardInteractionEvents
): void {
  if (isBoardLocked || card.classList.contains('is-flipped')) {
    return;
  }

  revealCard(card);

  if (revealedCards.length === 2) {
    checkRevealedCards(cards, events);
  }
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

  const CARD_ELEMENTS: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll<HTMLButtonElement>('.game__card');

  CARD_ELEMENTS.forEach((card: HTMLButtonElement): void => {
    card.addEventListener(
      'click',
      (): void => handleCardClick(card, cards, events)
    );
  });
}

/**
 * Resets the card interaction state.
 *
 * Cancels pending timers and unlocks the board.
 *
 * @returns Nothing.
 */
export function resetCardInteractions(): void {
  if (flipBackTimer !== null) {
    window.clearTimeout(flipBackTimer);
  }

  flipBackTimer = null;
  revealedCards = [];
  isBoardLocked = false;
}
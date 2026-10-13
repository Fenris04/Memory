import type { MemoryCard } from './card-types';

// Define how long mismatched cards remain visible.
const FLIP_BACK_DELAY: number = 1000;

// Store the currently revealed cards.
let revealedCards: HTMLButtonElement[] = [];

// Prevent clicks while mismatched cards are visible.
let isBoardLocked: boolean = false;

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
  const FIRST_ID: number = Number(first.dataset.cardId);
  const SECOND_ID: number = Number(second.dataset.cardId);
  const FIRST_CARD: MemoryCard | undefined =
    cards.find((card: MemoryCard): boolean => card.id === FIRST_ID);
  const SECOND_CARD: MemoryCard | undefined =
    cards.find((card: MemoryCard): boolean => card.id === SECOND_ID);

  return Boolean(FIRST_CARD && SECOND_CARD &&
    FIRST_CARD.pairId === SECOND_CARD.pairId);
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
}

/**
 * Evaluates the two currently revealed cards.
 *
 * @param cards - All cards in the current game.
 * @returns Nothing.
 */
function checkRevealedCards(cards: MemoryCard[]): void {
  const [FIRST_CARD, SECOND_CARD] = revealedCards;

  if (isMatchingPair(FIRST_CARD, SECOND_CARD, cards)) {
    markMatchedCards(FIRST_CARD, SECOND_CARD);
    return;
  }

  isBoardLocked = true;
  window.setTimeout(hideMismatchedCards, FLIP_BACK_DELAY);
}

/**
 * Handles a click on a Memory card.
 *
 * @param card - The clicked card element.
 * @param cards - All cards in the current game.
 * @returns Nothing.
 */
function handleCardClick(
  card: HTMLButtonElement,
  cards: MemoryCard[]
): void {
  if (isBoardLocked || card.classList.contains('is-flipped')) {
    return;
  }

  revealCard(card);

  if (revealedCards.length === 2) {
    checkRevealedCards(cards);
  }
}

/**
 * Registers click events for all Memory cards.
 *
 * @param cards - All cards in the current game.
 * @returns Nothing.
 */
export function setupCardInteractions(cards: MemoryCard[]): void {
  revealedCards = [];
  isBoardLocked = false;

  const CARD_ELEMENTS: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll<HTMLButtonElement>('.game__card');

  CARD_ELEMENTS.forEach((card: HTMLButtonElement): void => {
    card.addEventListener('click', (): void => handleCardClick(card, cards));
  });
}
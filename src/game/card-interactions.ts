import type { MemoryCard } from './card-types';

// Define how long mismatched cards remain visible.
const FLIP_BACK_DELAY: number = 1000;

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

  return Boolean(
    FIRST_CARD &&
    SECOND_CARD &&
    FIRST_CARD.pairId === SECOND_CARD.pairId
  );
}

/**
 * Marks two matching cards as completed.
 *
 * Matching cards remain visible and cannot
 * be selected again.
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
 * Resets the board lock and clears
 * the active timer.
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
 * Evaluates the two currently revealed cards.
 *
 * Keeps matching cards visible or temporarily
 * locks the board until mismatched cards are hidden.
 *
 * @param cards - All cards in the current game.
 * @returns Nothing.
 */
function checkRevealedCards(cards: MemoryCard[]): void {
  // Get the two currently revealed cards.
  const [FIRST_CARD, SECOND_CARD] = revealedCards;

  // Keep matching cards visible.
  if (isMatchingPair(FIRST_CARD, SECOND_CARD, cards)) {
    markMatchedCards(FIRST_CARD, SECOND_CARD);
    return;
  }

  // Lock the board to prevent additional clicks.
  isBoardLocked = true;

  // Hide mismatched cards after a short delay.
  flipBackTimer = window.setTimeout(
    hideMismatchedCards,
    FLIP_BACK_DELAY
  );
}

/**
 * Handles a click on a Memory card.
 *
 * Ignores clicks while the board is locked
 * or when a card is already revealed.
 *
 * @param card - The clicked card element.
 * @param cards - All cards in the current game.
 * @returns Nothing.
 */
function handleCardClick(
  card: HTMLButtonElement,
  cards: MemoryCard[]
): void {
  // Ignore invalid clicks.
  if (isBoardLocked || card.classList.contains('is-flipped')) {
    return;
  }

  // Reveal the selected card.
  revealCard(card);

  // Compare cards when two are revealed.
  if (revealedCards.length === 2) {
    checkRevealedCards(cards);
  }
}

/**
 * Registers click events for all Memory cards.
 *
 * Resets the previous interaction state
 * before initializing a new game.
 *
 * @param cards - All cards in the current game.
 * @returns Nothing.
 */
export function setupCardInteractions(cards: MemoryCard[]): void {
  // Reset timers and interaction state.
  resetCardInteractions();

  // Find all Memory card buttons.
  const CARD_ELEMENTS: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll<HTMLButtonElement>('.game__card');

  // Register a click event for each card.
  CARD_ELEMENTS.forEach((card: HTMLButtonElement): void => {
    card.addEventListener('click', (): void => handleCardClick(card, cards));
  });
}

/**
 * Resets the card interaction state.
 *
 * Cancels any pending flip-back timer,
 * clears revealed cards, and unlocks the board.
 *
 * @returns Nothing.
 */
export function resetCardInteractions(): void {
  // Cancel the active timer if one exists.
  if (flipBackTimer !== null) {
    window.clearTimeout(flipBackTimer);
  }

  // Reset all interaction variables.
  flipBackTimer = null;
  revealedCards = [];
  isBoardLocked = false;
}
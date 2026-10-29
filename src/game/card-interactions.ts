
import type { MemoryCard } from './card-types';

const FLIP_BACK_DELAY: number = 1000;
const FLIP_ANIMATION_DURATION: number = 600;
const CARDS_PER_TURN: number = 2;
const CARD_SELECTOR: string = '.game__card';

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
let matchTimer: number | null = null;
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
 * Completes a successful match after the flip animation.
 *
 * @param events - The registered game events.
 * @returns Nothing.
 */
function finishMatch(events: CardInteractionEvents): void {
  matchTimer = null;

  const [FIRST_CARD, SECOND_CARD] = revealedCards;

  if (!FIRST_CARD || !SECOND_CARD) {
    isBoardLocked = false;
    return;
  }

  markMatchedCards(FIRST_CARD, SECOND_CARD);
  events.onMatch();
  isBoardLocked = false;
}

/**
 * Handles a successful card match after the flip animation.
 *
 * @param events - The registered game events.
 * @returns Nothing.
 */
function handleMatch(events: CardInteractionEvents): void {
  isBoardLocked = true;

  matchTimer = window.setTimeout(
    (): void => finishMatch(events),
    FLIP_ANIMATION_DURATION
  );
}

/**
 * Schedules the turn change after mismatched cards are hidden.
 *
 * @param events - The registered game events.
 * @returns Nothing.
 */
function scheduleTurnChange(events: CardInteractionEvents): void {
  hideMismatchedCards();

  turnChangeTimer = window.setTimeout(
    (): void => finishMissedTurn(events),
    FLIP_ANIMATION_DURATION
  );
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
    (): void => scheduleTurnChange(events),
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
    revealedCards.length < CARDS_PER_TURN;
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

  if (revealedCards.length === CARDS_PER_TURN) {
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
    document.querySelectorAll<HTMLButtonElement>(CARD_SELECTOR);

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
 * Registers a click event for a Memory card.
 *
 * @param card - The card element to register.
 * @returns Nothing.
 */
function registerCardClick(card: HTMLButtonElement): void {
  card.addEventListener(
    'click',
    (): void => handleHumanClick(card)
  );
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
    document.querySelectorAll<HTMLButtonElement>(CARD_SELECTOR);

  CARD_ELEMENTS.forEach(registerCardClick);
}

/**
 * Cancels all pending card interaction timers.
 *
 * @returns Nothing.
 */
function clearInteractionTimers(): void {
  if (flipBackTimer !== null) {
    window.clearTimeout(flipBackTimer);
  }
  if (turnChangeTimer !== null) {
    window.clearTimeout(turnChangeTimer);
  }
  if (matchTimer !== null) {
    window.clearTimeout(matchTimer);
  }
}

/**
 * Resets the stored timer references.
 *
 * @returns Nothing.
 */
function resetTimerReferences(): void {
  flipBackTimer = null;
  turnChangeTimer = null;
  matchTimer = null;
}

/**
 * Resets card interactions and cancels pending timers.
 *
 * @returns Nothing.
 */
export function resetCardInteractions(): void {
  clearInteractionTimers();
  resetTimerReferences();
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

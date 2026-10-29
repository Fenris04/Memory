
/**
 * Represents a card that the bot has already seen.
 */
export interface RememberedCard {
  cardId: number;
  pairId: number;
}

/**
 * Stores the cards previously revealed during a game.
 */
let rememberedCards: RememberedCard[] = [];

/**
 * Remembers a card that has been revealed.
 *
 * @param cardId - The revealed card's unique ID.
 * @param pairId - The revealed card's pair ID.
 * @returns Nothing.
 */
export function rememberCard(
  cardId: number,
  pairId: number
): void {
  const IS_KNOWN: boolean = rememberedCards.some(
    (card: RememberedCard): boolean => card.cardId === cardId
  );

  if (IS_KNOWN) {
    return;
  }

  rememberedCards.push({ cardId, pairId });
}

/**
 * Finds another remembered card with the same pair ID.
 *
 * @param firstCard - The first card of the pair.
 * @param available - All available remembered cards.
 * @returns The matching card or undefined.
 */
function findMatchingCard(
  firstCard: RememberedCard,
  available: RememberedCard[]
): RememberedCard | undefined {
  return available.find(
    (card: RememberedCard): boolean =>
      card.cardId !== firstCard.cardId &&
      card.pairId === firstCard.pairId
  );
}

/**
 * Finds a known matching pair.
 *
 * @param availableIds - IDs of cards still available.
 * @returns Two card IDs or null if no known pair exists.
 */
export function findKnownPair(
  availableIds: number[]
): [number, number] | null {
  const AVAILABLE: RememberedCard[] = rememberedCards.filter(
    (card: RememberedCard): boolean => availableIds.includes(card.cardId)
  );

  for (const FIRST_CARD of AVAILABLE) {
    const MATCH: RememberedCard | undefined =
      findMatchingCard(FIRST_CARD, AVAILABLE);

    if (MATCH) {
      return [FIRST_CARD.cardId, MATCH.cardId];
    }
  }

  return null;
}

/**
 * Removes cards that have already been matched.
 *
 * @param cardIds - IDs of the matched cards.
 * @returns Nothing.
 */
export function forgetMatchedCards(cardIds: number[]): void {
  rememberedCards = rememberedCards.filter(
    (card: RememberedCard): boolean =>
      !cardIds.includes(card.cardId)
  );
}

/**
 * Occasionally forgets a random card.
 *
 * @returns Nothing.
 */
export function forgetRandomCard(): void {
  if (rememberedCards.length === 0) {
    return;
  }

  const RANDOM_INDEX: number =
    Math.floor(Math.random() * rememberedCards.length);

  rememberedCards.splice(RANDOM_INDEX, 1);
}

/**
 * Clears all remembered cards before a new game.
 *
 * @returns Nothing.
 */
export function resetBotMemory(): void {
  rememberedCards = [];
}

/**
 * Returns the remembered data for a specific card.
 *
 * @param cardId - The card's unique ID.
 * @returns The remembered card or undefined.
 */
export function getRememberedCard(
  cardId: number
): RememberedCard | undefined {
  return rememberedCards.find(
    (card: RememberedCard): boolean => card.cardId === cardId
  );
}

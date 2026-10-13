import type { CardImages, MemoryCard } from './card-types';

/**
 * Creates two matching cards from one card design.
 *
 * @param images - The front and back images.
 * @param pairId - The matching pair identifier.
 * @returns Two cards belonging to the same pair.
 */
function createPair(
  images: CardImages,
  pairId: number
): MemoryCard[] {
  return [
    { id: pairId * 2, pairId, ...images },
    { id: pairId * 2 + 1, pairId, ...images }
  ];
}

/**
 * Creates a complete set of Memory cards.
 *
 * @param images - Available card designs.
 * @param pairCount - Number of required matching pairs.
 * @returns An array containing all Memory cards.
 */
export function createCards(
  images: CardImages[],
  pairCount: number
): MemoryCard[] {
  const SELECTED_IMAGES: CardImages[] = images.slice(0, pairCount);

  return SELECTED_IMAGES.flatMap(
    (cardImages: CardImages, index: number): MemoryCard[] =>
      createPair(cardImages, index)
  );
}

/**
 * Shuffles Memory cards using the Fisher-Yates algorithm.
 *
 * Creates a copy to avoid modifying the original array.
 *
 * @param cards - The Memory cards to shuffle.
 * @returns A new array containing the shuffled cards.
 */
export function shuffleCards(cards: MemoryCard[]): MemoryCard[] {
  // Create a copy of the original cards.
  const SHUFFLED_CARDS: MemoryCard[] = [...cards];

  // Iterate backward through the array.
  for (let index: number = SHUFFLED_CARDS.length - 1; index > 0; index--) {
    // Choose a random position.
    const RANDOM_INDEX: number = Math.floor(Math.random() * (index + 1));

    // Swap the current card with the randomly selected card.
    [SHUFFLED_CARDS[index], SHUFFLED_CARDS[RANDOM_INDEX]] =
      [SHUFFLED_CARDS[RANDOM_INDEX], SHUFFLED_CARDS[index]];
  }

  return SHUFFLED_CARDS;
}
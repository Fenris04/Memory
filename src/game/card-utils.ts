
import type { CardImages, MemoryCard } from './card-types';

const CARDS_PER_PAIR: number = 2;
const FIRST_CARD_OFFSET: number = 0;
const SECOND_CARD_OFFSET: number = 1;

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
  const FIRST_CARD_ID: number =
    pairId * CARDS_PER_PAIR + FIRST_CARD_OFFSET;
  const SECOND_CARD_ID: number =
    pairId * CARDS_PER_PAIR + SECOND_CARD_OFFSET;

  return [
    { id: FIRST_CARD_ID, pairId, ...images },
    { id: SECOND_CARD_ID, pairId, ...images }
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
  const SHUFFLED_CARDS: MemoryCard[] = [...cards];

  for (
    let index: number = SHUFFLED_CARDS.length - 1;
    index > 0;
    index--
  ) {
    const RANDOM_INDEX: number =
      Math.floor(Math.random() * (index + 1));

    [SHUFFLED_CARDS[index], SHUFFLED_CARDS[RANDOM_INDEX]] =
      [SHUFFLED_CARDS[RANDOM_INDEX], SHUFFLED_CARDS[index]];
  }

  return SHUFFLED_CARDS;
}

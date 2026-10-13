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
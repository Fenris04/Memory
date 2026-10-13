import type { MemoryCard } from './card-types';

/**
 * Creates two matching cards from one image.
 *
 * @param image - The image URL.
 * @param pairId - The matching pair identifier.
 * @returns Two cards belonging to the same pair.
 */
function createPair(image: string, pairId: number): MemoryCard[] {
  return [
    { id: pairId * 2, image, pairId },
    { id: pairId * 2 + 1, image, pairId }
  ];
}

/**
 * Creates a complete set of Memory cards.
 *
 * @param images - Available card image URLs.
 * @param pairCount - Number of required matching pairs.
 * @returns An array containing all Memory cards.
 */
export function createCards(
  images: string[],
  pairCount: number
): MemoryCard[] {
  const SELECTED_IMAGES: string[] = images.slice(0, pairCount);

  return SELECTED_IMAGES.flatMap(
    (image: string, index: number): MemoryCard[] =>
      createPair(image, index)
  );
}
/**
 * Represents a single card in the Memory Game.
 */
export interface MemoryCard {
  id: number;
  pairId: number;
  frontImage: string;
  backImage: string;
}

/**
 * Represents the two sides of a card design.
 */
export interface CardImages {
  frontImage: string;
  backImage: string;
}
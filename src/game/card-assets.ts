import type { CardTheme } from '../settings/game-settings';
import type { CardImages } from './card-types';

// Load all individual SVG variants as image URLs.
const VARIANT_IMAGES: Record<string, string> = import.meta.glob(
  '../assets/Varianten/**/*.svg',
  {
    eager: true,
    query: '?url',
    import: 'default'
  }
);

/**
 * Defines the folder prefixes for each card theme.
 */
const THEME_FOLDERS: Record<CardTheme, string> = {
  'code-vibes': 'Code-vibes-card-',
  'da-projects': 'DA-Projects-card-',
  food: 'food-card-',
  gaming: 'Game-card-'
};

/**
 * Defines the expected back-side component for each theme.
 */
const BACK_COMPONENTS: Record<CardTheme, number> = {
  'code-vibes': 21,
  'da-projects': 1,
  food: 2,
  gaming: 1
};

/**
 * Defines the expected front-side component for each theme.
 */
const FRONT_COMPONENTS: Record<CardTheme, number> = {
  'code-vibes': 22,
  'da-projects': 2,
  food: 3,
  gaming: 2
};

/**
 * Returns the card number from a variant folder path.
 *
 * @param path - The SVG file path.
 * @returns The card number or zero.
 */
function getCardNumber(path: string): number {
  const MATCH: RegExpMatchArray | null =
    path.match(/card-(\d+)\//i);

  return MATCH ? Number(MATCH[1]) : 0;
}

/**
 * Finds the SVG URL for a specific component.
 *
 * @param paths - Available SVG file paths.
 * @param component - The component number.
 * @returns The matching SVG URL or null.
 */
function findComponent(
  paths: string[],
  component: number
): string | null {
  const COMPONENT_NAME: string = `Property-1-Component-${component}_`;

  const MATCHING_PATH: string | undefined = paths.find(
    (path: string): boolean => path.includes(COMPONENT_NAME)
  );

  return MATCHING_PATH ? VARIANT_IMAGES[MATCHING_PATH] : null;
}

/**
 * Creates a front-and-back image pair.
 *
 * @param paths - SVG paths belonging to one card.
 * @param theme - The selected card theme.
 * @returns The card images or null.
 */
function createCardImages(
  paths: string[],
  theme: CardTheme
): CardImages | null {
  const BACK_IMAGE: string | null =
    findComponent(paths, BACK_COMPONENTS[theme]);

  const FRONT_IMAGE: string | null =
    findComponent(paths, FRONT_COMPONENTS[theme]);

  if (!BACK_IMAGE || !FRONT_IMAGE) {
    return null;
  }

  return { backImage: BACK_IMAGE, frontImage: FRONT_IMAGE };
}

/**
 * Returns the SVG paths belonging to a card folder.
 *
 * @param theme - The selected card theme.
 * @param cardNumber - The card number.
 * @returns All matching SVG paths.
 */
function getCardPaths(
  theme: CardTheme,
  cardNumber: number
): string[] {
  const FOLDER_NAME: string =
    `${THEME_FOLDERS[theme]}${cardNumber}/`;

  return Object.keys(VARIANT_IMAGES).filter(
    (path: string): boolean => path.includes(FOLDER_NAME)
  );
}

/**
 * Returns the available card designs for a theme.
 *
 * @param theme - The selected card theme.
 * @returns An array containing front-and-back image pairs.
 */
export function getThemeImages(theme: CardTheme): CardImages[] {
  const CARD_NUMBERS: number[] = Array.from(
    { length: 18 },
    (_: unknown, index: number): number => index + 1
  );

  return CARD_NUMBERS.flatMap((cardNumber: number): CardImages[] => {
    const PATHS: string[] = getCardPaths(theme, cardNumber);
    const IMAGES: CardImages | null = createCardImages(PATHS, theme);

    return IMAGES ? [IMAGES] : [];
  });
}
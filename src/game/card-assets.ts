import type { CardTheme } from '../settings/game-settings';

// Load SVG files as image URLs using Vite.
const CARD_IMAGES: Record<string, string> = import.meta.glob(
  '../assets/Gruppen/*.svg',
  {
    eager: true,
    query: '?url',
    import: 'default'
  }
);

/**
 * Defines the filename prefixes for each card theme.
 */
const THEME_PREFIXES: Record<CardTheme, string> = {
  'code-vibes': 'Code-vibes-card-',
  'da-projects': 'DA-Projects-card-',
  food: 'food-card-',
  gaming: 'Game-card-'
};

/**
 * Returns the card images belonging to a selected theme.
 *
 * @param theme - The selected card theme.
 * @returns An array containing the matching image URLs.
 */
export function getThemeImages(theme: CardTheme): string[] {
  const PREFIX: string = THEME_PREFIXES[theme];

  return Object.entries(CARD_IMAGES)
    .filter(([path]: [string, string]): boolean => {
      const FILE_NAME: string = path.split('/').pop() ?? '';
      return FILE_NAME.startsWith(PREFIX);
    })
    .sort(([first]: [string, string], [second]: [string, string]): number => {
      return getCardNumber(first) - getCardNumber(second);
    })
    .map(([, url]: [string, string]): string => url);
}

/**
 * Extracts the card number from an SVG filename.
 *
 * @param path - The path to a card image.
 * @returns The card number or zero if none is found.
 */
function getCardNumber(path: string): number {
  const FILE_NAME: string = path.split('/').pop() ?? '';
  const MATCH: RegExpMatchArray | null =
    FILE_NAME.match(/card-(\d+)/i);

  return MATCH ? Number(MATCH[1]) : 0;
}
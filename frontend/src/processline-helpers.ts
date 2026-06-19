import type { ProcessLineConfiguration, ProcessLineItem, ProcessLineStyling } from './processline-types';

export const DEFAULT_STYLING: ProcessLineStyling = {
  lineItemTitleColor: '#001731',
  lineItemTitleFontSize: 18,
  lineItemLabelColor: '#001731',
  lineItemLabelFontSize: 16,
  highlightColor: '#0070F0',
  cardBackgroundColor: '#001731',
  cardTitleColor: '#FFFFFF',
  cardTitleFontSize: 22,
  cardDescriptionColor: '#FFFFFF',
  cardDescriptionFontSize: 16,
};

export const DEFAULT_ITEM = (index: number): ProcessLineItem => ({
  title: `Step ${index + 1}`,
  label: '',
  description: '',
  displayAboveLine: index % 2 === 0,
  position: index,
});

export const clampPosition = (value: number) => Math.max(0, Math.min(1, value));

export const positionToPercent = (position: number, edgePaddingPercent = 8) => {
  const clampedPosition = clampPosition(position);
  const usableRange = 100 - (edgePaddingPercent * 2);
  return edgePaddingPercent + (clampedPosition * usableRange);
};

export const normalizePositions = (items: ProcessLineItem[]) => {
  if (items.length <= 1) {
    return items.map((item) => ({ ...item, position: 0.5 }));
  }

  return items.map((item, index) => ({
    ...item,
    position: index / (items.length - 1),
  }));
};

export const sortItemsByPosition = (items: ProcessLineItem[]) => (
  [...items].sort((left, right) => left.position - right.position)
);

export const buildDefaultConfiguration = (): ProcessLineConfiguration => ({
  displayName: 'Process Line',
  introductionText: 'Click and drag to explore. Select an item for more details.',
  styling: DEFAULT_STYLING,
  items: normalizePositions([
    DEFAULT_ITEM(0),
    DEFAULT_ITEM(1),
    DEFAULT_ITEM(2),
  ]),
});

export interface ProcessLineItem {
  title: string;
  label: string;
  description: string;
  displayAboveLine: boolean;
  position: number;
}

export interface ProcessLineStyling {
  lineItemTitleColor: string;
  lineItemTitleFontSize: number;
  lineItemLabelColor: string;
  lineItemLabelFontSize: number;
  highlightColor: string;
  cardBackgroundColor: string;
  cardTitleColor: string;
  cardTitleFontSize: number;
  cardDescriptionColor: string;
  cardDescriptionFontSize: number;
}

export interface ProcessLineConfiguration {
  displayName: string;
  introductionText: string;
  styling: ProcessLineStyling;
  items: ProcessLineItem[];
}

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
  displayName: 'Process Line Title',
  introductionText: 'Click and drag to explore. Select an item for more details.',
  styling: DEFAULT_STYLING,
  items: normalizePositions([
    DEFAULT_ITEM(0),
    DEFAULT_ITEM(1),
    DEFAULT_ITEM(2),
  ]),
});

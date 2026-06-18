import { renderBlock } from './index';
import { normalizePositions } from '../processline-types';

renderBlock(document.querySelector('#root'), {
  displayName: 'Process Line Title',
  introductionText: 'Click and drag to explore. Select an item for more details.',
  styling: {
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
  },
  items: normalizePositions([
    {
      title: 'Step 1',
      label: 'The Skillshop Podcast',
      description: 'In this clip, we talk with an instructor about personalized support.',
      displayAboveLine: true,
      position: 0,
    },
    {
      title: 'Step 2',
      label: 'Individual Tutoring & Small Group Learning',
      description: 'Connect with peers and instructors to deepen your understanding.',
      displayAboveLine: false,
      position: 0,
    },
    {
      title: 'Step 3',
      label: 'Preparing & Planning',
      description: 'Clarify goals and prepare for the next milestone.',
      displayAboveLine: true,
      position: 0,
    },
    {
      title: 'Step 4',
      label: 'Schedule Now',
      description: 'Book the next activity to keep the process moving.',
      displayAboveLine: false,
      position: 0,
    },
  ]),
});

import { DireflowComponent } from 'direflow-component';

import PuzzleIcon, { PuzzleIconProps } from './PuzzleIcon';

DireflowComponent.create({
  component: PuzzleIcon,
  configuration: {
    tagname: 'lp-puzzle-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-puzzle-icon': PuzzleIconProps
    }
  }
}

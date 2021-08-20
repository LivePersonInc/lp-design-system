import { DireflowComponent } from 'direflow-component';

import UndoIcon, { UndoIconProps } from './UndoIcon';

DireflowComponent.create({
  component: UndoIcon,
  configuration: {
    tagname: 'lp-undo-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-undo-icon': UndoIconProps
    }
  }
}

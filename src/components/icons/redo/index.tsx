import { DireflowComponent } from 'direflow-component';

import RedoIcon, { RedoIconProps } from './RedoIcon';

DireflowComponent.create({
  component: RedoIcon,
  configuration: {
    tagname: 'lp-redo-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-redo-icon': RedoIconProps
    }
  }
}

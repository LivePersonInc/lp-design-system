import { DireflowComponent } from 'direflow-component';

import CopyIcon, { CopyIconProps } from './CopyIcon';

DireflowComponent.create({
  component: CopyIcon,
  configuration: {
    tagname: 'lp-copy-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-copy-icon': CopyIconProps
    }
  }
}

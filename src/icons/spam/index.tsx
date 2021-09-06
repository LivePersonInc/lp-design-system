import { DireflowComponent } from 'direflow-component';

import SpamIcon, { SpamIconProps } from './SpamIcon';

DireflowComponent.create({
  component: SpamIcon,
  configuration: {
    tagname: 'lp-spam-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-spam-icon': SpamIconProps
    }
  }
}

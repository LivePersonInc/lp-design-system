import { DireflowComponent } from 'direflow-component';

import SendIcon, { SendIconProps } from './SendIcon';

DireflowComponent.create({
  component: SendIcon,
  configuration: {
    tagname: 'lp-send-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-send-icon': SendIconProps
    }
  }
}

import { DireflowComponent } from 'direflow-component';

import MicIcon, { MicIconProps } from './MicIcon';

DireflowComponent.create({
  component: MicIcon,
  configuration: {
    tagname: 'lp-mic-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-mic-icon': MicIconProps
    }
  }
}

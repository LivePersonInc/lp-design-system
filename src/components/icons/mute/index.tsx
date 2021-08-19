import { DireflowComponent } from 'direflow-component';

import MuteIcon, { MuteIconProps } from './MuteIcon';

DireflowComponent.create({
  component: MuteIcon,
  configuration: {
    tagname: 'lp-mute-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-mute-icon': MuteIconProps
    }
  }
}

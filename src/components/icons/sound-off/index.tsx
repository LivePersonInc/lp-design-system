import { DireflowComponent } from 'direflow-component';

import SoundOffIcon, { SoundOffIconProps } from './SoundOffIcon';

DireflowComponent.create({
  component: SoundOffIcon,
  configuration: {
    tagname: 'lp-sound-off-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-sound-off-icon': SoundOffIconProps
    }
  }
}

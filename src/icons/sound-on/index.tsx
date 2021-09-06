import { DireflowComponent } from 'direflow-component';

import SoundOnIcon, { SoundOnIconProps } from './SoundOnIcon';

DireflowComponent.create({
  component: SoundOnIcon,
  configuration: {
    tagname: 'lp-sound-on-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-sound-on-icon': SoundOnIconProps
    }
  }
}

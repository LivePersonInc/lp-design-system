import { DireflowComponent } from 'direflow-component';

import VolumeUpIcon, { VolumeUpIconProps } from './VolumeUpIcon';

DireflowComponent.create({
  component: VolumeUpIcon,
  configuration: {
    tagname: 'lp-volume-up-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-volume-up-icon': VolumeUpIconProps
    }
  }
}

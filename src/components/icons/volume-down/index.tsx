import { DireflowComponent } from 'direflow-component';

import VolumeDownIcon, { VolumeDownIconProps } from './VolumeDownIcon';

DireflowComponent.create({
  component: VolumeDownIcon,
  configuration: {
    tagname: 'lp-volume-down-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-volume-down-icon': VolumeDownIconProps
    }
  }
}

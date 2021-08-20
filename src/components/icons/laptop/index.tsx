import { DireflowComponent } from 'direflow-component';

import LaptopIcon, { LaptopIconProps } from './LaptopIcon';

DireflowComponent.create({
  component: LaptopIcon,
  configuration: {
    tagname: 'lp-laptop-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-laptop-icon': LaptopIconProps
    }
  }
}

import { DireflowComponent } from 'direflow-component';

import ZoomOutIcon, { ZoomOutIconProps } from './ZoomOutIcon';

DireflowComponent.create({
  component: ZoomOutIcon,
  configuration: {
    tagname: 'lp-zoom-out-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-zoom-out-icon': ZoomOutIconProps
    }
  }
}

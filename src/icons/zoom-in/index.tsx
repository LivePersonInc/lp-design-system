import { DireflowComponent } from 'direflow-component';

import ZoomInIcon, { ZoomInIconProps } from './ZoomInIcon';

DireflowComponent.create({
  component: ZoomInIcon,
  configuration: {
    tagname: 'lp-zoom-in-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-zoom-in-icon': ZoomInIconProps
    }
  }
}

import { DireflowComponent } from 'direflow-component';

import ImageIcon, { ImageIconProps } from './ImageIcon';

DireflowComponent.create({
  component: ImageIcon,
  configuration: {
    tagname: 'lp-image-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-image-icon': ImageIconProps
    }
  }
}

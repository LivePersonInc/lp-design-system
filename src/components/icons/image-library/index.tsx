import { DireflowComponent } from 'direflow-component';

import ImageLibraryIcon, { ImageLibraryIconProps } from './ImageLibraryIcon';

DireflowComponent.create({
  component: ImageLibraryIcon,
  configuration: {
    tagname: 'lp-image-library-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-image-library-icon': ImageLibraryIconProps
    }
  }
}

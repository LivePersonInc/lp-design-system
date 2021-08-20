import { DireflowComponent } from 'direflow-component';

import CameraIcon, { CameraIconProps } from './CameraIcon';

DireflowComponent.create({
  component: CameraIcon,
  configuration: {
    tagname: 'lp-camera-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-camera-icon': CameraIconProps
    }
  }
}

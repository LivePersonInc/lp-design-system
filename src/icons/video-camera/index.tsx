import { DireflowComponent } from 'direflow-component';

import VideoCameraIcon, { VideoCameraIconProps } from './VideoCameraIcon';

DireflowComponent.create({
  component: VideoCameraIcon,
  configuration: {
    tagname: 'lp-video-camera-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-video-camera-icon': VideoCameraIconProps
    }
  }
}

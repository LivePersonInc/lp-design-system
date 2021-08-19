import { DireflowComponent } from 'direflow-component';

import VideoIcon, { VideoIconProps } from './VideoIcon';

DireflowComponent.create({
  component: VideoIcon,
  configuration: {
    tagname: 'lp-video-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-video-icon': VideoIconProps
    }
  }
}

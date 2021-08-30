import { DireflowComponent } from 'direflow-component';

import PlayerPlayCircleIcon, { PlayerPlayCircleIconProps } from './PlayerPlayCircleIcon';

DireflowComponent.create({
  component: PlayerPlayCircleIcon,
  configuration: {
    tagname: 'lp-player-play-circle-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-player-play-circle-icon': PlayerPlayCircleIconProps
    }
  }
}

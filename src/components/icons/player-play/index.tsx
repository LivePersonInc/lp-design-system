import { DireflowComponent } from 'direflow-component';

import PlayerPlayIcon, { PlayerPlayIconProps } from './PlayerPlayIcon';

DireflowComponent.create({
  component: PlayerPlayIcon,
  configuration: {
    tagname: 'lp-player-play-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-player-play-icon': PlayerPlayIconProps
    }
  }
}

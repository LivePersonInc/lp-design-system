import { DireflowComponent } from 'direflow-component';

import PlayerPauseCircleIcon, { PlayerPauseCircleIconProps } from './PlayerPauseCircleIcon';

DireflowComponent.create({
  component: PlayerPauseCircleIcon,
  configuration: {
    tagname: 'lp-player-pause-circle-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-player-pause-circle-icon': PlayerPauseCircleIconProps
    }
  }
}

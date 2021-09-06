import { DireflowComponent } from 'direflow-component';

import PlayerPauseIcon, { PlayerPauseIconProps } from './PlayerPauseIcon';

DireflowComponent.create({
  component: PlayerPauseIcon,
  configuration: {
    tagname: 'lp-player-pause-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-player-pause-icon': PlayerPauseIconProps
    }
  }
}

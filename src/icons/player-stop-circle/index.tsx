import { DireflowComponent } from 'direflow-component';

import PlayerStopCircleIcon, { PlayerStopCircleIconProps } from './PlayerStopCircleIcon';

DireflowComponent.create({
  component: PlayerStopCircleIcon,
  configuration: {
    tagname: 'lp-player-stop-circle-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-player-stop-circle-icon': PlayerStopCircleIconProps
    }
  }
}

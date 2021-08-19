import { DireflowComponent } from 'direflow-component';

import PlayerStopIcon, { PlayerStopIconProps } from './PlayerStopIcon';

DireflowComponent.create({
  component: PlayerStopIcon,
  configuration: {
    tagname: 'lp-player-stop-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-player-stop-icon': PlayerStopIconProps
    }
  }
}

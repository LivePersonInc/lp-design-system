import { DireflowComponent } from 'direflow-component';

import PlayerReverseIcon, { PlayerReverseIconProps } from './PlayerReverseIcon';

DireflowComponent.create({
  component: PlayerReverseIcon,
  configuration: {
    tagname: 'lp-player-reverse-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-player-reverse-icon': PlayerReverseIconProps
    }
  }
}

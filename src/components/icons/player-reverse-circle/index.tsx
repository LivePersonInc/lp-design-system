import { DireflowComponent } from 'direflow-component';

import PlayerReverseCircleIcon, { PlayerReverseCircleIconProps } from './PlayerReverseCircleIcon';

DireflowComponent.create({
  component: PlayerReverseCircleIcon,
  configuration: {
    tagname: 'lp-player-reverse-circle-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-player-reverse-circle-icon': PlayerReverseCircleIconProps
    }
  }
}

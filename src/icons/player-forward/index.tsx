import { DireflowComponent } from 'direflow-component';

import PlayerForwardIcon, { PlayerForwardIconProps } from './PlayerForwardIcon';

DireflowComponent.create({
  component: PlayerForwardIcon,
  configuration: {
    tagname: 'lp-player-forward-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-player-forward-icon': PlayerForwardIconProps
    }
  }
}

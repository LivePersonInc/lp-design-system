import { DireflowComponent } from 'direflow-component';

import PlayerForwardCircleIcon, { PlayerForwardCircleIconProps } from './PlayerForwardCircleIcon';

DireflowComponent.create({
  component: PlayerForwardCircleIcon,
  configuration: {
    tagname: 'lp-player-forward-circle-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-player-forward-circle-icon': PlayerForwardCircleIconProps
    }
  }
}

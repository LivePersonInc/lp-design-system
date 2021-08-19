import { DireflowComponent } from 'direflow-component';

import PlayerNextCircleIcon, { PlayerNextCircleIconProps } from './PlayerNextCircleIcon';

DireflowComponent.create({
  component: PlayerNextCircleIcon,
  configuration: {
    tagname: 'lp-player-next-circle-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-player-next-circle-icon': PlayerNextCircleIconProps
    }
  }
}

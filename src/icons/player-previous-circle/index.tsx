import { DireflowComponent } from 'direflow-component';

import PlayerPreviousCircleIcon, { PlayerPreviousCircleIconProps } from './PlayerPreviousCircleIcon';

DireflowComponent.create({
  component: PlayerPreviousCircleIcon,
  configuration: {
    tagname: 'lp-player-previous-circle-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-player-previous-circle-icon': PlayerPreviousCircleIconProps
    }
  }
}

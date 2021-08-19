import { DireflowComponent } from 'direflow-component';

import PlayerPreviousIcon, { PlayerPreviousIconProps } from './PlayerPreviousIcon';

DireflowComponent.create({
  component: PlayerPreviousIcon,
  configuration: {
    tagname: 'lp-player-previous-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-player-previous-icon': PlayerPreviousIconProps
    }
  }
}

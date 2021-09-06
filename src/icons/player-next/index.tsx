import { DireflowComponent } from 'direflow-component';

import PlayerNextIcon, { PlayerNextIconProps } from './PlayerNextIcon';

DireflowComponent.create({
  component: PlayerNextIcon,
  configuration: {
    tagname: 'lp-player-next-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-player-next-icon': PlayerNextIconProps
    }
  }
}

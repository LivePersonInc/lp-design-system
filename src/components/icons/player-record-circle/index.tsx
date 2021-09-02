import { DireflowComponent } from 'direflow-component';

import PlayerRecordCircleIcon, { PlayerRecordCircleIconProps } from './PlayerRecordCircleIcon';

DireflowComponent.create({
  component: PlayerRecordCircleIcon,
  configuration: {
    tagname: 'lp-player-record-circle-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-player-record-circle-icon': PlayerRecordCircleIconProps
    }
  }
}

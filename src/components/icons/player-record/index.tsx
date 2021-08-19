import { DireflowComponent } from 'direflow-component';

import PlayerRecordIcon, { PlayerRecordIconProps } from './PlayerRecordIcon';

DireflowComponent.create({
  component: PlayerRecordIcon,
  configuration: {
    tagname: 'lp-player-record-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-player-record-icon': PlayerRecordIconProps
    }
  }
}

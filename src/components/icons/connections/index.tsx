import { DireflowComponent } from 'direflow-component';

import ConnectionsIcon, { ConnectionsIconProps } from './ConnectionsIcon';

DireflowComponent.create({
  component: ConnectionsIcon,
  configuration: {
    tagname: 'lp-connections-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-connections-icon': ConnectionsIconProps
    }
  }
}

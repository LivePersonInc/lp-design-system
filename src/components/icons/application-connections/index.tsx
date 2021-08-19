import { DireflowComponent } from 'direflow-component';

import ApplicationConnectionsIcon, { ApplicationConnectionsIconProps } from './ApplicationConnectionsIcon';

DireflowComponent.create({
  component: ApplicationConnectionsIcon,
  configuration: {
    tagname: 'lp-application-connections-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-application-connections-icon': ApplicationConnectionsIconProps
    }
  }
}

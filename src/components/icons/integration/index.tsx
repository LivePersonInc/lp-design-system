import { DireflowComponent } from 'direflow-component';

import IntegrationIcon, { IntegrationIconProps } from './IntegrationIcon';

DireflowComponent.create({
  component: IntegrationIcon,
  configuration: {
    tagname: 'lp-integration-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-integration-icon': IntegrationIconProps
    }
  }
}

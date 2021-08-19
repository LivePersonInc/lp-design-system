import { DireflowComponent } from 'direflow-component';

import IntegrationDetailsIcon, { IntegrationDetailsIconProps } from './IntegrationDetailsIcon';

DireflowComponent.create({
  component: IntegrationDetailsIcon,
  configuration: {
    tagname: 'lp-integration-details-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-integration-details-icon': IntegrationDetailsIconProps
    }
  }
}

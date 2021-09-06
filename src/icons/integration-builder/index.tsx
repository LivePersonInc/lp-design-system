import { DireflowComponent } from 'direflow-component';

import IntegrationBuilderIcon, { IntegrationBuilderIconProps } from './IntegrationBuilderIcon';

DireflowComponent.create({
  component: IntegrationBuilderIcon,
  configuration: {
    tagname: 'lp-integration-builder-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-integration-builder-icon': IntegrationBuilderIconProps
    }
  }
}

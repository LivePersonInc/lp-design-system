import { DireflowComponent } from 'direflow-component';

import ExternalLinkIcon, { ExternalLinkIconProps } from './ExternalLinkIcon';

DireflowComponent.create({
  component: ExternalLinkIcon,
  configuration: {
    tagname: 'lp-external-link-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-external-link-icon': ExternalLinkIconProps
    }
  }
}

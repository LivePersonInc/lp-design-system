import { DireflowComponent } from 'direflow-component';

import ApiKeyIcon, { ApiKeyIconProps } from './ApiKeyIcon';

DireflowComponent.create({
  component: ApiKeyIcon,
  configuration: {
    tagname: 'lp-api-key-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-api-key-icon': ApiKeyIconProps
    }
  }
}

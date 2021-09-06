import { DireflowComponent } from 'direflow-component';

import PublishIcon, { PublishIconProps } from './PublishIcon';

DireflowComponent.create({
  component: PublishIcon,
  configuration: {
    tagname: 'lp-publish-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-publish-icon': PublishIconProps
    }
  }
}

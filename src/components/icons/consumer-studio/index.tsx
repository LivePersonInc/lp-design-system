import { DireflowComponent } from 'direflow-component';

import ConsumerStudioIcon, { ConsumerStudioIconProps } from './ConsumerStudioIcon';

DireflowComponent.create({
  component: ConsumerStudioIcon,
  configuration: {
    tagname: 'lp-consumer-studio-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-consumer-studio-icon': ConsumerStudioIconProps
    }
  }
}

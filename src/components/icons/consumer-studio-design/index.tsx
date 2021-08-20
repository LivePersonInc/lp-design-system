import { DireflowComponent } from 'direflow-component';

import ConsumerStudioDesignIcon, { ConsumerStudioDesignIconProps } from './ConsumerStudioDesignIcon';

DireflowComponent.create({
  component: ConsumerStudioDesignIcon,
  configuration: {
    tagname: 'lp-consumer-studio-design-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-consumer-studio-design-icon': ConsumerStudioDesignIconProps
    }
  }
}

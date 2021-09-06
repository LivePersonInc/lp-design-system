import { DireflowComponent } from 'direflow-component';

import ConsumerStudioManageIcon, { ConsumerStudioManageIconProps } from './ConsumerStudioManageIcon';

DireflowComponent.create({
  component: ConsumerStudioManageIcon,
  configuration: {
    tagname: 'lp-consumer-studio-manage-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-consumer-studio-manage-icon': ConsumerStudioManageIconProps
    }
  }
}

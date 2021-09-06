import { DireflowComponent } from 'direflow-component';

import BlockIcon, { BlockIconProps } from './BlockIcon';

DireflowComponent.create({
  component: BlockIcon,
  configuration: {
    tagname: 'lp-block-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-block-icon': BlockIconProps
    }
  }
}

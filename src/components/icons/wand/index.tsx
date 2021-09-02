import { DireflowComponent } from 'direflow-component';

import WandIcon, { WandIconProps } from './WandIcon';

DireflowComponent.create({
  component: WandIcon,
  configuration: {
    tagname: 'lp-wand-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-wand-icon': WandIconProps
    }
  }
}

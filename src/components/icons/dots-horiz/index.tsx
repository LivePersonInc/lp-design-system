import { DireflowComponent } from 'direflow-component';

import DotsHorizIcon, { DotsHorizIconProps } from './DotsHorizIcon';

DireflowComponent.create({
  component: DotsHorizIcon,
  configuration: {
    tagname: 'lp-dots-horiz-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-dots-horiz-icon': DotsHorizIconProps
    }
  }
}

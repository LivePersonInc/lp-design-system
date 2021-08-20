import { DireflowComponent } from 'direflow-component';

import GoIcon, { GoIconProps } from './GoIcon';

DireflowComponent.create({
  component: GoIcon,
  configuration: {
    tagname: 'lp-go-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-go-icon': GoIconProps
    }
  }
}

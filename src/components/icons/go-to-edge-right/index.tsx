import { DireflowComponent } from 'direflow-component';

import GoToEdgeRightIcon, { GoToEdgeRightIconProps } from './GoToEdgeRightIcon';

DireflowComponent.create({
  component: GoToEdgeRightIcon,
  configuration: {
    tagname: 'lp-go-to-edge-right-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-go-to-edge-right-icon': GoToEdgeRightIconProps
    }
  }
}

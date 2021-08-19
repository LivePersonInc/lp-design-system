import { DireflowComponent } from 'direflow-component';

import GoToEdgeLeftIcon, { GoToEdgeLeftIconProps } from './GoToEdgeLeftIcon';

DireflowComponent.create({
  component: GoToEdgeLeftIcon,
  configuration: {
    tagname: 'lp-go-to-edge-left-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-go-to-edge-left-icon': GoToEdgeLeftIconProps
    }
  }
}

import { DireflowComponent } from 'direflow-component';

import LoadingSpinnerIcon, { LoadingSpinnerIconProps } from './LoadingSpinnerIcon';

DireflowComponent.create({
  component: LoadingSpinnerIcon,
  configuration: {
    tagname: 'lp-loading-spinner-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-loading-spinner-icon': LoadingSpinnerIconProps
    }
  }
}

import { DireflowComponent } from 'direflow-component';

import SimilarIcon, { SimilarIconProps } from './SimilarIcon';

DireflowComponent.create({
  component: SimilarIcon,
  configuration: {
    tagname: 'lp-similar-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-similar-icon': SimilarIconProps
    }
  }
}

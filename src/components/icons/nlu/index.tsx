import { DireflowComponent } from 'direflow-component';

import NluIcon, { NluIconProps } from './NluIcon';

DireflowComponent.create({
  component: NluIcon,
  configuration: {
    tagname: 'lp-nlu-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-nlu-icon': NluIconProps
    }
  }
}

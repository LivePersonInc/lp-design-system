import { DireflowComponent } from 'direflow-component';

import TrainIcon, { TrainIconProps } from './TrainIcon';

DireflowComponent.create({
  component: TrainIcon,
  configuration: {
    tagname: 'lp-train-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-train-icon': TrainIconProps
    }
  }
}

import { DireflowComponent } from 'direflow-component';

import AddTargetIcon, { AddTargetIconProps } from './AddTargetIcon';

DireflowComponent.create({
  component: AddTargetIcon,
  configuration: {
    tagname: 'lp-add-target-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-add-target-icon': AddTargetIconProps
    }
  }
}

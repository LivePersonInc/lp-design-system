import { DireflowComponent } from 'direflow-component';

import RadioIcon, { RadioIconProps } from './RadioIcon';

DireflowComponent.create({
  component: RadioIcon,
  configuration: {
    tagname: 'lp-radio-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-radio-icon': RadioIconProps
    }
  }
}

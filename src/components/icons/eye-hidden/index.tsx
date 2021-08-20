import { DireflowComponent } from 'direflow-component';

import EyeHiddenIcon, { EyeHiddenIconProps } from './EyeHiddenIcon';

DireflowComponent.create({
  component: EyeHiddenIcon,
  configuration: {
    tagname: 'lp-eye-hidden-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-eye-hidden-icon': EyeHiddenIconProps
    }
  }
}

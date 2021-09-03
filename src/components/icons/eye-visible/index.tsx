import { DireflowComponent } from 'direflow-component';

import EyeVisibleIcon, { EyeVisibleIconProps } from './EyeVisibleIcon';

DireflowComponent.create({
  component: EyeVisibleIcon,
  configuration: {
    tagname: 'lp-eye-visible-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-eye-visible-icon': EyeVisibleIconProps
    }
  }
}

import { DireflowComponent } from 'direflow-component';

import TextIcon, { TextIconProps } from './TextIcon';

DireflowComponent.create({
  component: TextIcon,
  configuration: {
    tagname: 'lp-text-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-text-icon': TextIconProps
    }
  }
}

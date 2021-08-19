import { DireflowComponent } from 'direflow-component';

import ThemeIcon, { ThemeIconProps } from './ThemeIcon';

DireflowComponent.create({
  component: ThemeIcon,
  configuration: {
    tagname: 'lp-theme-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-theme-icon': ThemeIconProps
    }
  }
}

import { DireflowComponent } from 'direflow-component';

import DarkThemeIcon, { DarkThemeIconProps } from './DarkThemeIcon';

DireflowComponent.create({
  component: DarkThemeIcon,
  configuration: {
    tagname: 'lp-dark-theme-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-dark-theme-icon': DarkThemeIconProps
    }
  }
}

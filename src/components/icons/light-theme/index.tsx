import { DireflowComponent } from 'direflow-component';

import LightThemeIcon, { LightThemeIconProps } from './LightThemeIcon';

DireflowComponent.create({
  component: LightThemeIcon,
  configuration: {
    tagname: 'lp-light-theme-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-light-theme-icon': LightThemeIconProps
    }
  }
}

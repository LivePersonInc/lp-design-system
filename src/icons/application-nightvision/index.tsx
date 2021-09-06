import { DireflowComponent } from 'direflow-component';

import ApplicationNightvisionIcon, { ApplicationNightvisionIconProps } from './ApplicationNightvisionIcon';

DireflowComponent.create({
  component: ApplicationNightvisionIcon,
  configuration: {
    tagname: 'lp-application-nightvision-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-application-nightvision-icon': ApplicationNightvisionIconProps
    }
  }
}

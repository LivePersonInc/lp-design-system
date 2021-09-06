import { DireflowComponent } from 'direflow-component';

import ApplicationHelpIcon, { ApplicationHelpIconProps } from './ApplicationHelpIcon';

DireflowComponent.create({
  component: ApplicationHelpIcon,
  configuration: {
    tagname: 'lp-application-help-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-application-help-icon': ApplicationHelpIconProps
    }
  }
}

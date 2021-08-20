import { DireflowComponent } from 'direflow-component';

import ApplicationAutomationIcon, { ApplicationAutomationIconProps } from './ApplicationAutomationIcon';

DireflowComponent.create({
  component: ApplicationAutomationIcon,
  configuration: {
    tagname: 'lp-application-automation-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-application-automation-icon': ApplicationAutomationIconProps
    }
  }
}

import { DireflowComponent } from 'direflow-component';

import AutomationIcon, { AutomationIconProps } from './AutomationIcon';

DireflowComponent.create({
  component: AutomationIcon,
  configuration: {
    tagname: 'lp-automation-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-automation-icon': AutomationIconProps
    }
  }
}

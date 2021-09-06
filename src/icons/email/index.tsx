import { DireflowComponent } from 'direflow-component';

import EmailIcon, { EmailIconProps } from './EmailIcon';

DireflowComponent.create({
  component: EmailIcon,
  configuration: {
    tagname: 'lp-email-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-email-icon': EmailIconProps
    }
  }
}

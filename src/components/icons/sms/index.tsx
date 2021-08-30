import { DireflowComponent } from 'direflow-component';

import SmsIcon, { SmsIconProps } from './SmsIcon';

DireflowComponent.create({
  component: SmsIcon,
  configuration: {
    tagname: 'lp-sms-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-sms-icon': SmsIconProps
    }
  }
}

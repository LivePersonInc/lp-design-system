import { DireflowComponent } from 'direflow-component';

import QuickIcon, { QuickIconProps } from './QuickIcon';

DireflowComponent.create({
  component: QuickIcon,
  configuration: {
    tagname: 'lp-quick-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-quick-icon': QuickIconProps
    }
  }
}

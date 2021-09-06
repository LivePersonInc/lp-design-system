import { DireflowComponent } from 'direflow-component';

import TabletIcon, { TabletIconProps } from './TabletIcon';

DireflowComponent.create({
  component: TabletIcon,
  configuration: {
    tagname: 'lp-tablet-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-tablet-icon': TabletIconProps
    }
  }
}

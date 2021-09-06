import { DireflowComponent } from 'direflow-component';

import DashboardIcon, { DashboardIconProps } from './DashboardIcon';

DireflowComponent.create({
  component: DashboardIcon,
  configuration: {
    tagname: 'lp-dashboard-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-dashboard-icon': DashboardIconProps
    }
  }
}

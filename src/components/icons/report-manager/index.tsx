import { DireflowComponent } from 'direflow-component';

import ReportManagerIcon, { ReportManagerIconProps } from './ReportManagerIcon';

DireflowComponent.create({
  component: ReportManagerIcon,
  configuration: {
    tagname: 'lp-report-manager-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-report-manager-icon': ReportManagerIconProps
    }
  }
}

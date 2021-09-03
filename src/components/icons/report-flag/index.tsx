import { DireflowComponent } from 'direflow-component';

import ReportFlagIcon, { ReportFlagIconProps } from './ReportFlagIcon';

DireflowComponent.create({
  component: ReportFlagIcon,
  configuration: {
    tagname: 'lp-report-flag-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-report-flag-icon': ReportFlagIconProps
    }
  }
}

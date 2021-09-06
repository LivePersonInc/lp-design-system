import { DireflowComponent } from 'direflow-component';

import ReportIcon, { ReportIconProps } from './ReportIcon';

DireflowComponent.create({
  component: ReportIcon,
  configuration: {
    tagname: 'lp-report-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-report-icon': ReportIconProps
    }
  }
}

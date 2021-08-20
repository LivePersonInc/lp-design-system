import { DireflowComponent } from 'direflow-component';

import ReportBuilderIcon, { ReportBuilderIconProps } from './ReportBuilderIcon';

DireflowComponent.create({
  component: ReportBuilderIcon,
  configuration: {
    tagname: 'lp-report-builder-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-report-builder-icon': ReportBuilderIconProps
    }
  }
}

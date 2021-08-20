import { DireflowComponent } from 'direflow-component';

import ReportViewerIcon, { ReportViewerIconProps } from './ReportViewerIcon';

DireflowComponent.create({
  component: ReportViewerIcon,
  configuration: {
    tagname: 'lp-report-viewer-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-report-viewer-icon': ReportViewerIconProps
    }
  }
}

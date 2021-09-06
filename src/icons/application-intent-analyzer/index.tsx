import { DireflowComponent } from 'direflow-component';

import ApplicationIntentAnalyzerIcon, { ApplicationIntentAnalyzerIconProps } from './ApplicationIntentAnalyzerIcon';

DireflowComponent.create({
  component: ApplicationIntentAnalyzerIcon,
  configuration: {
    tagname: 'lp-application-intent-analyzer-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-application-intent-analyzer-icon': ApplicationIntentAnalyzerIconProps
    }
  }
}

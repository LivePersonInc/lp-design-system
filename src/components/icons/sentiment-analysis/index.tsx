import { DireflowComponent } from 'direflow-component';

import SentimentAnalysisIcon, { SentimentAnalysisIconProps } from './SentimentAnalysisIcon';

DireflowComponent.create({
  component: SentimentAnalysisIcon,
  configuration: {
    tagname: 'lp-sentiment-analysis-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-sentiment-analysis-icon': SentimentAnalysisIconProps
    }
  }
}

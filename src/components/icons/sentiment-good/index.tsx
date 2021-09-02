import { DireflowComponent } from 'direflow-component';

import SentimentGoodIcon, { SentimentGoodIconProps } from './SentimentGoodIcon';

DireflowComponent.create({
  component: SentimentGoodIcon,
  configuration: {
    tagname: 'lp-sentiment-good-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-sentiment-good-icon': SentimentGoodIconProps
    }
  }
}

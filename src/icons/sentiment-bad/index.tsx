import { DireflowComponent } from 'direflow-component';

import SentimentBadIcon, { SentimentBadIconProps } from './SentimentBadIcon';

DireflowComponent.create({
  component: SentimentBadIcon,
  configuration: {
    tagname: 'lp-sentiment-bad-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-sentiment-bad-icon': SentimentBadIconProps
    }
  }
}

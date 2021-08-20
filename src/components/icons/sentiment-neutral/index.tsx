import { DireflowComponent } from 'direflow-component';

import SentimentNeutralIcon, { SentimentNeutralIconProps } from './SentimentNeutralIcon';

DireflowComponent.create({
  component: SentimentNeutralIcon,
  configuration: {
    tagname: 'lp-sentiment-neutral-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-sentiment-neutral-icon': SentimentNeutralIconProps
    }
  }
}

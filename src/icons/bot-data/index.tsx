import { DireflowComponent } from 'direflow-component';

import BotDataIcon, { BotDataIconProps } from './BotDataIcon';

DireflowComponent.create({
  component: BotDataIcon,
  configuration: {
    tagname: 'lp-bot-data-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-bot-data-icon': BotDataIconProps
    }
  }
}

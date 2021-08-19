import { DireflowComponent } from 'direflow-component';

import BotIcon, { BotIconProps } from './BotIcon';

DireflowComponent.create({
  component: BotIcon,
  configuration: {
    tagname: 'lp-bot-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-bot-icon': BotIconProps
    }
  }
}

import { DireflowComponent } from 'direflow-component';

import BotUserIcon, { BotUserIconProps } from './BotUserIcon';

DireflowComponent.create({
  component: BotUserIcon,
  configuration: {
    tagname: 'lp-bot-user-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-bot-user-icon': BotUserIconProps
    }
  }
}

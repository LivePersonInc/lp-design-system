import { DireflowComponent } from 'direflow-component';

import BotConnectIcon, { BotConnectIconProps } from './BotConnectIcon';

DireflowComponent.create({
  component: BotConnectIcon,
  configuration: {
    tagname: 'lp-bot-connect-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-bot-connect-icon': BotConnectIconProps
    }
  }
}

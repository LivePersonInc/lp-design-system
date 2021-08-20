import { DireflowComponent } from 'direflow-component';

import BotPulseIcon, { BotPulseIconProps } from './BotPulseIcon';

DireflowComponent.create({
  component: BotPulseIcon,
  configuration: {
    tagname: 'lp-bot-pulse-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-bot-pulse-icon': BotPulseIconProps
    }
  }
}

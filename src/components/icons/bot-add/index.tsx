import { DireflowComponent } from 'direflow-component';

import BotAddIcon, { BotAddIconProps } from './BotAddIcon';

DireflowComponent.create({
  component: BotAddIcon,
  configuration: {
    tagname: 'lp-bot-add-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-bot-add-icon': BotAddIconProps
    }
  }
}

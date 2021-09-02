import { DireflowComponent } from 'direflow-component';

import BotPreviewIcon, { BotPreviewIconProps } from './BotPreviewIcon';

DireflowComponent.create({
  component: BotPreviewIcon,
  configuration: {
    tagname: 'lp-bot-preview-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-bot-preview-icon': BotPreviewIconProps
    }
  }
}

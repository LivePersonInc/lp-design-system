import { DireflowComponent } from 'direflow-component';

import ApplicationBotStatusIcon, { ApplicationBotStatusIconProps } from './ApplicationBotStatusIcon';

DireflowComponent.create({
  component: ApplicationBotStatusIcon,
  configuration: {
    tagname: 'lp-application-bot-status-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-application-bot-status-icon': ApplicationBotStatusIconProps
    }
  }
}

import { DireflowComponent } from 'direflow-component';

import ApplicationBotAccountsIcon, { ApplicationBotAccountsIconProps } from './ApplicationBotAccountsIcon';

DireflowComponent.create({
  component: ApplicationBotAccountsIcon,
  configuration: {
    tagname: 'lp-application-bot-accounts-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-application-bot-accounts-icon': ApplicationBotAccountsIconProps
    }
  }
}

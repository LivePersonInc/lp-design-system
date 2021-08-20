import { DireflowComponent } from 'direflow-component';

import ApplicationThirdPartyBotsIcon, { ApplicationThirdPartyBotsIconProps } from './ApplicationThirdPartyBotsIcon';

DireflowComponent.create({
  component: ApplicationThirdPartyBotsIcon,
  configuration: {
    tagname: 'lp-application-third-party-bots-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-application-third-party-bots-icon': ApplicationThirdPartyBotsIconProps
    }
  }
}

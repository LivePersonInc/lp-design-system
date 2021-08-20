import { DireflowComponent } from 'direflow-component';

import ApplicationCampaignIcon, { ApplicationCampaignIconProps } from './ApplicationCampaignIcon';

DireflowComponent.create({
  component: ApplicationCampaignIcon,
  configuration: {
    tagname: 'lp-application-campaign-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-application-campaign-icon': ApplicationCampaignIconProps
    }
  }
}

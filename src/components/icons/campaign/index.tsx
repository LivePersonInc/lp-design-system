import { DireflowComponent } from 'direflow-component';

import CampaignIcon, { CampaignIconProps } from './CampaignIcon';

DireflowComponent.create({
  component: CampaignIcon,
  configuration: {
    tagname: 'lp-campaign-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-campaign-icon': CampaignIconProps
    }
  }
}

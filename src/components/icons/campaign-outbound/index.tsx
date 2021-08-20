import { DireflowComponent } from 'direflow-component';

import CampaignOutboundIcon, { CampaignOutboundIconProps } from './CampaignOutboundIcon';

DireflowComponent.create({
  component: CampaignOutboundIcon,
  configuration: {
    tagname: 'lp-campaign-outbound-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-campaign-outbound-icon': CampaignOutboundIconProps
    }
  }
}

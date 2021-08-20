import { DireflowComponent } from 'direflow-component';

import CampaignInboundIcon, { CampaignInboundIconProps } from './CampaignInboundIcon';

DireflowComponent.create({
  component: CampaignInboundIcon,
  configuration: {
    tagname: 'lp-campaign-inbound-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-campaign-inbound-icon': CampaignInboundIconProps
    }
  }
}

import { DireflowComponent } from 'direflow-component';

import BusinessIntelligenceEngineerIcon, { BusinessIntelligenceEngineerIconProps } from './BusinessIntelligenceEngineerIcon';

DireflowComponent.create({
  component: BusinessIntelligenceEngineerIcon,
  configuration: {
    tagname: 'lp-business-intelligence-engineer-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-business-intelligence-engineer-icon': BusinessIntelligenceEngineerIconProps
    }
  }
}

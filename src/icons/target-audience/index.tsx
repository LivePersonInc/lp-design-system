import { DireflowComponent } from 'direflow-component';

import TargetAudienceIcon, { TargetAudienceIconProps } from './TargetAudienceIcon';

DireflowComponent.create({
  component: TargetAudienceIcon,
  configuration: {
    tagname: 'lp-target-audience-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-target-audience-icon': TargetAudienceIconProps
    }
  }
}

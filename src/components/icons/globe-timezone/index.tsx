import { DireflowComponent } from 'direflow-component';

import GlobeTimezoneIcon, { GlobeTimezoneIconProps } from './GlobeTimezoneIcon';

DireflowComponent.create({
  component: GlobeTimezoneIcon,
  configuration: {
    tagname: 'lp-globe-timezone-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-globe-timezone-icon': GlobeTimezoneIconProps
    }
  }
}

import { DireflowComponent } from 'direflow-component';

import FbMessengerIcon, { FbMessengerIconProps } from './FbMessengerIcon';

DireflowComponent.create({
  component: FbMessengerIcon,
  configuration: {
    tagname: 'lp-fb-messenger-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-fb-messenger-icon': FbMessengerIconProps
    }
  }
}

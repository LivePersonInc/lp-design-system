import { DireflowComponent } from 'direflow-component';

import WhatsappIcon, { WhatsappIconProps } from './WhatsappIcon';

DireflowComponent.create({
  component: WhatsappIcon,
  configuration: {
    tagname: 'lp-whatsapp-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-whatsapp-icon': WhatsappIconProps
    }
  }
}

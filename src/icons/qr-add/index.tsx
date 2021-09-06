import { DireflowComponent } from 'direflow-component';

import QrAddIcon, { QrAddIconProps } from './QrAddIcon';

DireflowComponent.create({
  component: QrAddIcon,
  configuration: {
    tagname: 'lp-qr-add-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-qr-add-icon': QrAddIconProps
    }
  }
}

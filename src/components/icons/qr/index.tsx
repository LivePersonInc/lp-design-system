import { DireflowComponent } from 'direflow-component';

import QrIcon, { QrIconProps } from './QrIcon';

DireflowComponent.create({
  component: QrIcon,
  configuration: {
    tagname: 'lp-qr-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-qr-icon': QrIconProps
    }
  }
}

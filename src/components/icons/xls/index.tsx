import { DireflowComponent } from 'direflow-component';

import XlsIcon, { XlsIconProps } from './XlsIcon';

DireflowComponent.create({
  component: XlsIcon,
  configuration: {
    tagname: 'lp-xls-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-xls-icon': XlsIconProps
    }
  }
}

import { DireflowComponent } from 'direflow-component';

import PdfIcon, { PdfIconProps } from './PdfIcon';

DireflowComponent.create({
  component: PdfIcon,
  configuration: {
    tagname: 'lp-pdf-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-pdf-icon': PdfIconProps
    }
  }
}

import { DireflowComponent } from 'direflow-component';

import ExportIcon, { ExportIconProps } from './ExportIcon';

DireflowComponent.create({
  component: ExportIcon,
  configuration: {
    tagname: 'lp-export-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-export-icon': ExportIconProps
    }
  }
}

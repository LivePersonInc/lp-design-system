import { DireflowComponent } from 'direflow-component';

import ImportIcon, { ImportIconProps } from './ImportIcon';

DireflowComponent.create({
  component: ImportIcon,
  configuration: {
    tagname: 'lp-import-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-import-icon': ImportIconProps
    }
  }
}

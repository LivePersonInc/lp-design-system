import { DireflowComponent } from 'direflow-component';

import DocIcon, { DocIconProps } from './DocIcon';

DireflowComponent.create({
  component: DocIcon,
  configuration: {
    tagname: 'lp-doc-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-doc-icon': DocIconProps
    }
  }
}

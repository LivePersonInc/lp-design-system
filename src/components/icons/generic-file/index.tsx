import { DireflowComponent } from 'direflow-component';

import GenericFileIcon, { GenericFileIconProps } from './GenericFileIcon';

DireflowComponent.create({
  component: GenericFileIcon,
  configuration: {
    tagname: 'lp-generic-file-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-generic-file-icon': GenericFileIconProps
    }
  }
}

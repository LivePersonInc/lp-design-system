import { DireflowComponent } from 'direflow-component';

import TrashIcon, { TrashIconProps } from './TrashIcon';

DireflowComponent.create({
  component: TrashIcon,
  configuration: {
    tagname: 'lp-trash-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-trash-icon': TrashIconProps
    }
  }
}

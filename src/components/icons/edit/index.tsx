import { DireflowComponent } from 'direflow-component';

import EditIcon, { EditIconProps } from './EditIcon';

DireflowComponent.create({
  component: EditIcon,
  configuration: {
    tagname: 'lp-edit-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-edit-icon': EditIconProps
    }
  }
}

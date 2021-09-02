import { DireflowComponent } from 'direflow-component';

import GroupAddIcon, { GroupAddIconProps } from './GroupAddIcon';

DireflowComponent.create({
  component: GroupAddIcon,
  configuration: {
    tagname: 'lp-group-add-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-group-add-icon': GroupAddIconProps
    }
  }
}

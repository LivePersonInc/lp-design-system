import { DireflowComponent } from 'direflow-component';

import EntryPointAddIcon, { EntryPointAddIconProps } from './EntryPointAddIcon';

DireflowComponent.create({
  component: EntryPointAddIcon,
  configuration: {
    tagname: 'lp-entry-point-add-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-entry-point-add-icon': EntryPointAddIconProps
    }
  }
}

import { DireflowComponent } from 'direflow-component';

import EntryPointIcon, { EntryPointIconProps } from './EntryPointIcon';

DireflowComponent.create({
  component: EntryPointIcon,
  configuration: {
    tagname: 'lp-entry-point-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-entry-point-icon': EntryPointIconProps
    }
  }
}

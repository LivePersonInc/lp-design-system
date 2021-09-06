import { DireflowComponent } from 'direflow-component';

import Key2Icon, { Key2IconProps } from './Key2Icon';

DireflowComponent.create({
  component: Key2Icon,
  configuration: {
    tagname: 'lp-key-2-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-key-2-icon': Key2IconProps
    }
  }
}

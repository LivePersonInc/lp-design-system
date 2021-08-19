import { DireflowComponent } from 'direflow-component';

import Key1Icon, { Key1IconProps } from './Key1Icon';

DireflowComponent.create({
  component: Key1Icon,
  configuration: {
    tagname: 'lp-key-1-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-key-1-icon': Key1IconProps
    }
  }
}

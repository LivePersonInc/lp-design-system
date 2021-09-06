import { DireflowComponent } from 'direflow-component';

import Filter1Icon, { Filter1IconProps } from './Filter1Icon';

DireflowComponent.create({
  component: Filter1Icon,
  configuration: {
    tagname: 'lp-filter-1-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-filter-1-icon': Filter1IconProps
    }
  }
}

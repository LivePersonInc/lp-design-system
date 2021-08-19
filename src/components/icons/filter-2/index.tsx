import { DireflowComponent } from 'direflow-component';

import Filter2Icon, { Filter2IconProps } from './Filter2Icon';

DireflowComponent.create({
  component: Filter2Icon,
  configuration: {
    tagname: 'lp-filter-2-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-filter-2-icon': Filter2IconProps
    }
  }
}

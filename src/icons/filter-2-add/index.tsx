import { DireflowComponent } from 'direflow-component';

import Filter2AddIcon, { Filter2AddIconProps } from './Filter2AddIcon';

DireflowComponent.create({
  component: Filter2AddIcon,
  configuration: {
    tagname: 'lp-filter-2-add-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-filter-2-add-icon': Filter2AddIconProps
    }
  }
}

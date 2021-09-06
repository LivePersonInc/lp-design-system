import { DireflowComponent } from 'direflow-component';

import SortDescIcon, { SortDescIconProps } from './SortDescIcon';

DireflowComponent.create({
  component: SortDescIcon,
  configuration: {
    tagname: 'lp-sort-desc-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-sort-desc-icon': SortDescIconProps
    }
  }
}

import { DireflowComponent } from 'direflow-component';

import SortAscIcon, { SortAscIconProps } from './SortAscIcon';

DireflowComponent.create({
  component: SortAscIcon,
  configuration: {
    tagname: 'lp-sort-asc-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-sort-asc-icon': SortAscIconProps
    }
  }
}

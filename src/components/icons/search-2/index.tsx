import { DireflowComponent } from 'direflow-component';

import Search2Icon, { Search2IconProps } from './Search2Icon';

DireflowComponent.create({
  component: Search2Icon,
  configuration: {
    tagname: 'lp-search-2-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-search-2-icon': Search2IconProps
    }
  }
}

import { DireflowComponent } from 'direflow-component';

import Search1Icon, { Search1IconProps } from './Search1Icon';

DireflowComponent.create({
  component: Search1Icon,
  configuration: {
    tagname: 'lp-search-1-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-search-1-icon': Search1IconProps
    }
  }
}

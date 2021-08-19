import { DireflowComponent } from 'direflow-component';

import DatabaseIcon , { DatabaseIconProps } from './DatabaseIcon';

DireflowComponent.create({
  component: DatabaseIcon,
  configuration: {
    tagname: 'lp-database-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-database-icon': DatabaseIconProps
    }
  }
}

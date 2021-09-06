import { DireflowComponent } from 'direflow-component';

import TableIcon, { TableIconProps } from './TableIcon';

DireflowComponent.create({
  component: TableIcon,
  configuration: {
    tagname: 'lp-table-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-table-icon': TableIconProps
    }
  }
}

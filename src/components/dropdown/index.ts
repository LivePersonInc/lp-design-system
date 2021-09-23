import { DireflowComponent } from 'direflow-component';

import Dropdown, { DropdownProps } from './Dropdown';
import { getComponentConfig } from 'lpds/common/direflow';

DireflowComponent.create(getComponentConfig(Dropdown, 'lp-dropdown'));

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-dropdown': DropdownProps
    }
  }
}

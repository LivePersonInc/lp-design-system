import { DireflowComponent } from 'direflow-component';

import StructureIcon, { StructureIconProps } from './StructureIcon';

DireflowComponent.create({
  component: StructureIcon,
  configuration: {
    tagname: 'lp-structure-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-structure-icon': StructureIconProps
    }
  }
}

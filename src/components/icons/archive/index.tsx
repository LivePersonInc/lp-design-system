import { DireflowComponent } from 'direflow-component';

import ArchiveIcon, { ArchiveIconProps } from './ArchiveIcon';

DireflowComponent.create({
  component: ArchiveIcon,
  configuration: {
    tagname: 'lp-archive-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-archive-icon': ArchiveIconProps
    }
  }
}

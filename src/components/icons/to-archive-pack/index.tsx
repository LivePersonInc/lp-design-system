import { DireflowComponent } from 'direflow-component';

import ToArchivePackIcon, { ToArchivePackIconProps } from './ToArchivePackIcon';

DireflowComponent.create({
  component: ToArchivePackIcon,
  configuration: {
    tagname: 'lp-to-archive-pack-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-to-archive-pack-icon': ToArchivePackIconProps
    }
  }
}

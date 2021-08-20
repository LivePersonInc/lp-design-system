import { DireflowComponent } from 'direflow-component';

import SubdirectoryIcon, { SubdirectoryIconProps } from './SubdirectoryIcon';

DireflowComponent.create({
  component: SubdirectoryIcon,
  configuration: {
    tagname: 'lp-subdirectory-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-subdirectory-icon': SubdirectoryIconProps
    }
  }
}

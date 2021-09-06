import { DireflowComponent } from 'direflow-component';

import FolderOpenIcon, { FolderOpenIconProps } from './FolderOpenIcon';

DireflowComponent.create({
  component: FolderOpenIcon,
  configuration: {
    tagname: 'lp-folder-open-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-folder-open-icon': FolderOpenIconProps
    }
  }
}

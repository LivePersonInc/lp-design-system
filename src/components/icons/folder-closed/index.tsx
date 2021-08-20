import { DireflowComponent } from 'direflow-component';

import FolderClosedIcon, { FolderClosedIconProps } from './FolderClosedIcon';

DireflowComponent.create({
  component: FolderClosedIcon,
  configuration: {
    tagname: 'lp-folder-closed-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-folder-closed-icon': FolderClosedIconProps
    }
  }
}

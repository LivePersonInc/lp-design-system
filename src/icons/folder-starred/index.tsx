import { DireflowComponent } from 'direflow-component';

import FolderStarredIcon, { FolderStarredIconProps } from './FolderStarredIcon';

DireflowComponent.create({
  component: FolderStarredIcon,
  configuration: {
    tagname: 'lp-folder-starred-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-folder-starred-icon': FolderStarredIconProps
    }
  }
}

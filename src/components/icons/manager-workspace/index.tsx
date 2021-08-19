import { DireflowComponent } from 'direflow-component';

import ManagerWorkspaceIcon, { ManagerWorkspaceIconProps } from './ManagerWorkspaceIcon';

DireflowComponent.create({
  component: ManagerWorkspaceIcon,
  configuration: {
    tagname: 'lp-manager-workspace-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-manager-workspace-icon': ManagerWorkspaceIconProps
    }
  }
}

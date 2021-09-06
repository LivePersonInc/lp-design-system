import { DireflowComponent } from 'direflow-component';

import DebugIcon, { DebugIconProps } from './DebugIcon';

DireflowComponent.create({
  component: DebugIcon,
  configuration: {
    tagname: 'lp-debug-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-debug-icon': DebugIconProps
    }
  }
}

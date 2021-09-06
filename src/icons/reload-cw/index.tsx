import { DireflowComponent } from 'direflow-component';

import ReloadCwIcon, { ReloadCwIconProps } from './ReloadCwIcon';

DireflowComponent.create({
  component: ReloadCwIcon,
  configuration: {
    tagname: 'lp-reload-cw-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-reload-cw-icon': ReloadCwIconProps
    }
  }
}

import { DireflowComponent } from 'direflow-component';

import ReloadCcwIcon, { ReloadCcwIconProps } from './ReloadCcwIcon';

DireflowComponent.create({
  component: ReloadCcwIcon,
  configuration: {
    tagname: 'lp-reload-ccw-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-reload-ccw-icon': ReloadCcwIconProps
    }
  }
}

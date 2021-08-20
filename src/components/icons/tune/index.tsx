import { DireflowComponent } from 'direflow-component';

import TuneIcon, { TuneIconProps } from './TuneIcon';

DireflowComponent.create({
  component: TuneIcon,
  configuration: {
    tagname: 'lp-tune-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-tune-icon': TuneIconProps
    }
  }
}

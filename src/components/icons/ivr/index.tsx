import { DireflowComponent } from 'direflow-component';

import IvrIcon, { IvrIconProps } from './IvrIcon';

DireflowComponent.create({
  component: IvrIcon,
  configuration: {
    tagname: 'lp-ivr-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-ivr-icon': IvrIconProps
    }
  }
}

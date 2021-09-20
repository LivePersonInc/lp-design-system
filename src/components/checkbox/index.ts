import { DireflowComponent } from 'direflow-component';

import { getComponentConfig, RobotoFontWeights } from 'lpds/common/direflow';

import Checkbox, { CheckboxProps } from './Checkbox';

DireflowComponent.create(getComponentConfig(Checkbox, 'lp-checkbox', {
  configuration: { useAnonymousSlot: true },
  withRobotoFont: RobotoFontWeights.regular,
}));

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-checkbox': CheckboxProps
    }
  }
}

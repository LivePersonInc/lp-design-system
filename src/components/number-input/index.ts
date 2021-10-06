import { DireflowComponent } from 'direflow-component';

import { getComponentConfig, RobotoFontWeights } from 'lpds/common/direflow';

import NumberInput from './NumberInput';

DireflowComponent.create(getComponentConfig(NumberInput, 'lp-number-input', {
  withRobotoFont: RobotoFontWeights.regular,
}));

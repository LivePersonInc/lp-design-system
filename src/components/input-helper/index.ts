import { DireflowComponent } from 'direflow-component';

import { getComponentConfig, RobotoFontWeights } from 'lpds/common/direflow';

import InputHelper from './InputHelper';

DireflowComponent.create(getComponentConfig(InputHelper, 'lp-input-helper', {
  withRobotoFont: RobotoFontWeights.regular,
}));

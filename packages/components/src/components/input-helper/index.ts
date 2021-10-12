import { DireflowComponent } from 'direflow-component';

import { getComponentConfig, RobotoFontWeights } from '../../common/direflow';

import InputHelper from './InputHelper';

DireflowComponent.create(getComponentConfig(InputHelper, 'lp-input-helper', {
  withRobotoFont: RobotoFontWeights.regular,
}));

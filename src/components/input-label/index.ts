import { DireflowComponent } from 'direflow-component';

import { getComponentConfig, RobotoFontWeights } from 'lpds/common/direflow';

import InputLabel from './InputLabel';

DireflowComponent.create(getComponentConfig(InputLabel, 'lp-input-label', {
  withRobotoFont: RobotoFontWeights.regular,
}));

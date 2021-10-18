import { DireflowComponent } from 'direflow-component';

import { getComponentConfig, RobotoFontWeights } from '../../common/direflow';

import ToggleButton from './ToggleButton';

DireflowComponent.create(getComponentConfig(ToggleButton, 'lp-toggle-button', {
  withRobotoFont: RobotoFontWeights.bold,
}));

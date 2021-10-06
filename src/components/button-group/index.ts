import { DireflowComponent } from 'direflow-component';

import { getComponentConfig, RobotoFontWeights } from 'lpds/common/direflow';

import ButtonGroup from './ButtonGroup';

DireflowComponent.create(getComponentConfig(ButtonGroup, 'lp-button-group', {
  withRobotoFont: RobotoFontWeights.bold,
}));

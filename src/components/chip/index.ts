import { DireflowComponent } from 'direflow-component';

import { getComponentConfig, RobotoFontWeights } from 'lpds/common/direflow';

import Chip from './Chip';

DireflowComponent.create(getComponentConfig(Chip, 'lp-chip', {
  withRobotoFont: [RobotoFontWeights.medium, RobotoFontWeights.bold],
}));

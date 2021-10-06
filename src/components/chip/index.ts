import { DireflowComponent } from 'direflow-component';

import { getComponentConfig, RobotoFontWeights } from 'lpds/common/direflow';

import Chip from './Chip';
import ChipGroup from './ChipGroup';

DireflowComponent.createAll([
  getComponentConfig(Chip, 'lp-chip', {
    withRobotoFont: [RobotoFontWeights.medium, RobotoFontWeights.bold],
  }),
  getComponentConfig(ChipGroup, 'lp-chip-group'),
]);

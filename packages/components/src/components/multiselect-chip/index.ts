import { DireflowComponent } from 'direflow-component';

import { getComponentConfig, RobotoFontWeights } from '../../common/direflow';

import MultiselectChip from './MultiselectChip';

DireflowComponent.create(
  getComponentConfig(MultiselectChip, 'lp-multiselect-chip', {
    withRobotoFont: [RobotoFontWeights.medium, RobotoFontWeights.bold],
  })
);

import { DireflowComponent } from 'direflow-component';

import { getComponentConfig, RobotoFontWeights } from '../../common/direflow';

import Toggle from './Toggle';

DireflowComponent.create(getComponentConfig(Toggle, 'lp-toggle', {
  configuration: { useAnonymousSlot: true },
  withRobotoFont: RobotoFontWeights.regular,
}));

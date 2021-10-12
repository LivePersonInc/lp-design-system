import { DireflowComponent } from 'direflow-component';

import { getComponentConfig, RobotoFontWeights } from '../../common/direflow';

import Select from './Select';
import SelectOption from './SelectOption';

DireflowComponent.createAll([
  getComponentConfig(Select, 'lp-select'),
  getComponentConfig(SelectOption, 'lp-select-option', {
    configuration: { useAnonymousSlot: true },
    withRobotoFont: RobotoFontWeights.regular,
  }),
]);

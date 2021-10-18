import { DireflowComponent } from 'direflow-component';

import { getComponentConfig, RobotoFontWeights } from '../../common/direflow';

import Radio from './Radio';
import RadioGroup from './RadioGroup';

DireflowComponent.createAll([
  getComponentConfig(Radio, 'lp-radio', {
    configuration: { useAnonymousSlot: true },
    withRobotoFont: RobotoFontWeights.regular,
  }),
  getComponentConfig(RadioGroup, 'lp-radio-group', {
    configuration: { useAnonymousSlot: true },
  }),
]);

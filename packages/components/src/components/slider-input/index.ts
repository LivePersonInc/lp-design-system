import { DireflowComponent } from 'direflow-component';

import { getComponentConfig, RobotoFontWeights } from '../../common/direflow';

import SliderInput from './SliderInput';

DireflowComponent.create(getComponentConfig(SliderInput, 'lp-slider-input', {
  withRobotoFont: [RobotoFontWeights.regular, RobotoFontWeights.medium],
}));

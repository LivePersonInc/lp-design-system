import { DireflowComponent } from 'direflow-component';

import { getComponentConfig, RobotoFontWeights } from '../../common/direflow';

import Button from './Button';

DireflowComponent.create(getComponentConfig(Button, 'lp-button', {
  withRobotoFont: [RobotoFontWeights.medium, RobotoFontWeights.bold],
}));

import { DireflowComponent } from 'direflow-component';

import { getComponentConfig, RobotoFontWeights } from '../../common/direflow';

import FileInput from './FileInput';

DireflowComponent.create(getComponentConfig(FileInput, 'lp-file-input', {
  withRobotoFont: [RobotoFontWeights.regular, RobotoFontWeights.medium],
}));
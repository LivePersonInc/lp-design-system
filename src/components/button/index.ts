import { DireflowComponent } from 'direflow-component';

import { getComponentConfig, RobotoFontWeights } from 'lpds/common/direflow';

import Button from './Button';

DireflowComponent.create(getComponentConfig(Button, 'lp-button', {
  withRobotoFont: RobotoFontWeights.bold,
})).then(element => {
  if (element.tagName === 'LP-BUTTON') {
    element.tabIndex = 0;
  }
});

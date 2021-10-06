import { DireflowComponent } from 'direflow-component';

import { getComponentConfig, RobotoFontWeights } from 'lpds/common/direflow';

import TextInput from './TextInput';

DireflowComponent.create(getComponentConfig(TextInput, 'lp-text-input', {
  withRobotoFont: RobotoFontWeights.regular,
})).then(element => {
  if (element.querySelector('[slot="icon-left"]')) {
    element.shadowRoot?.querySelector('input')?.classList.add('with-icon-left');
  }

  if (element.querySelector('[slot="icon-right"]')) {
    element.shadowRoot?.querySelector('input')?.classList.add('with-icon-right');
  }
});

import { DireflowComponent } from 'direflow-component';

import { getComponentConfig, RobotoFontWeights } from '../../common/direflow';

import Textarea from './Textarea';

DireflowComponent.create(getComponentConfig(Textarea, 'lp-textarea', {
  withRobotoFont: RobotoFontWeights.regular,
})).then(element => {
  if (element.querySelector('[slot="icon-left"]')) {
    element.shadowRoot?.querySelector('textarea')?.classList.add('with-icon-left');
  }

  if (element.querySelector('[slot="icon-right"]')) {
    element.shadowRoot?.querySelector('textarea')?.classList.add('with-icon-right');
  }
});

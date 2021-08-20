import { DireflowComponent } from 'direflow-component';

import TranslateIcon, { TranslateIconProps } from './TranslateIcon';

DireflowComponent.create({
  component: TranslateIcon,
  configuration: {
    tagname: 'lp-translate-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-translate-icon': TranslateIconProps
    }
  }
}

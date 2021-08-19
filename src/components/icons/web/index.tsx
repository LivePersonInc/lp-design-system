import { DireflowComponent } from 'direflow-component';

import WebIcon, { WebIconProps } from './WebIcon';

DireflowComponent.create({
  component: WebIcon,
  configuration: {
    tagname: 'lp-web-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-web-icon': WebIconProps
    }
  }
}

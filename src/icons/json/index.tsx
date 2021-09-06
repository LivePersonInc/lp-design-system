import { DireflowComponent } from 'direflow-component';

import JsonIcon, { JsonIconProps } from './JsonIcon';

DireflowComponent.create({
  component: JsonIcon,
  configuration: {
    tagname: 'lp-json-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-json-icon': JsonIconProps
    }
  }
}

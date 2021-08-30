import { DireflowComponent } from 'direflow-component';

import IntentAnnotationSubmittedIcon, { IntentAnnotationSubmittedIconProps } from './IntentAnnotationSubmittedIcon';

DireflowComponent.create({
  component: IntentAnnotationSubmittedIcon,
  configuration: {
    tagname: 'lp-intent-annotation-submitted-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-intent-annotation-submitted-icon': IntentAnnotationSubmittedIconProps
    }
  }
}

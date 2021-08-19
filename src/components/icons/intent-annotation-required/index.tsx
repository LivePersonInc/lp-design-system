import { DireflowComponent } from 'direflow-component';

import IntentAnnotationRequiredIcon, { IntentAnnotationRequiredIconProps } from './IntentAnnotationRequiredIcon';

DireflowComponent.create({
  component: IntentAnnotationRequiredIcon,
  configuration: {
    tagname: 'lp-intent-annotation-required-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-intent-annotation-required-icon': IntentAnnotationRequiredIconProps
    }
  }
}

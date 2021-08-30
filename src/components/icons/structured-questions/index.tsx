import { DireflowComponent } from 'direflow-component';

import StructuredQuestionsIcon, { StructuredQuestionsIconProps } from './StructuredQuestionsIcon';

DireflowComponent.create({
  component: StructuredQuestionsIcon,
  configuration: {
    tagname: 'lp-structured-questions-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-structured-questions-icon': StructuredQuestionsIconProps
    }
  }
}

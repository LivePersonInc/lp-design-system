import { DireflowComponent } from 'direflow-component';

import ButtonQuestionIcon, { ButtonQuestionIconProps } from './ButtonQuestionIcon';

DireflowComponent.create({
  component: ButtonQuestionIcon,
  configuration: {
    tagname: 'lp-button-question-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-button-question-icon': ButtonQuestionIconProps
    }
  }
}

import { DireflowComponent } from 'direflow-component';

import QuestionCircleIcon, { QuestionCircleIconProps } from './QuestionCircleIcon';

DireflowComponent.create({
  component: QuestionCircleIcon,
  configuration: {
    tagname: 'lp-question-circle-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-question-circle-icon': QuestionCircleIconProps
    }
  }
}

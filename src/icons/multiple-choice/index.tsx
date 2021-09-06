import { DireflowComponent } from 'direflow-component';

import MultipleChoiceIcon, { MultipleChoiceIconProps } from './MultipleChoiceIcon';

DireflowComponent.create({
  component: MultipleChoiceIcon,
  configuration: {
    tagname: 'lp-multiple-choice-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-multiple-choice-icon': MultipleChoiceIconProps
    }
  }
}

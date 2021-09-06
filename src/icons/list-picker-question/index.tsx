import { DireflowComponent } from 'direflow-component';

import ListPickerQuestionIcon, { ListPickerQuestionIconProps } from './ListPickerQuestionIcon';

DireflowComponent.create({
  component: ListPickerQuestionIcon,
  configuration: {
    tagname: 'lp-list-picker-question-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-list-picker-question-icon': ListPickerQuestionIconProps
    }
  }
}

import { DireflowComponent } from 'direflow-component';

import QuickReplyQuestionIcon, { QuickReplyQuestionIconProps } from './QuickReplyQuestionIcon';

DireflowComponent.create({
  component: QuickReplyQuestionIcon,
  configuration: {
    tagname: 'lp-quick-reply-question-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-quick-reply-question-icon': QuickReplyQuestionIconProps
    }
  }
}

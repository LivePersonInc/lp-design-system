import { DireflowComponent } from 'direflow-component';

import FbQuickReplyQuestionIcon, { FbQuickReplyQuestionIconProps } from './FbQuickReplyQuestionIcon';

DireflowComponent.create({
  component: FbQuickReplyQuestionIcon,
  configuration: {
    tagname: 'lp-fb-quick-reply-question-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-fb-quick-reply-question-icon': FbQuickReplyQuestionIconProps
    }
  }
}

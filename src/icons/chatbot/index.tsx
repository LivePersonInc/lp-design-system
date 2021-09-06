import { DireflowComponent } from 'direflow-component';

import ChatbotIcon, { ChatbotIconProps } from './ChatbotIcon';

DireflowComponent.create({
  component: ChatbotIcon,
  configuration: {
    tagname: 'lp-chatbot-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-chatbot-icon': ChatbotIconProps
    }
  }
}

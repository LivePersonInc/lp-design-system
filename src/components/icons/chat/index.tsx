import { DireflowComponent } from 'direflow-component';

import ChatIcon, { ChatIconProps } from './ChatIcon';

DireflowComponent.create({
  component: ChatIcon,
  configuration: {
    tagname: 'lp-chat-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-chat-icon': ChatIconProps
    }
  }
}

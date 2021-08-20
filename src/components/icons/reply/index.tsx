import { DireflowComponent } from 'direflow-component';

import ReplyIcon, { ReplyIconProps } from './ReplyIcon';

DireflowComponent.create({
  component: ReplyIcon,
  configuration: {
    tagname: 'lp-reply-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-reply-icon': ReplyIconProps
    }
  }
}

import { DireflowComponent } from 'direflow-component';

import ReplyAllIcon, { ReplyAllIconProps } from './ReplyAllIcon';

DireflowComponent.create({
  component: ReplyAllIcon,
  configuration: {
    tagname: 'lp-reply-all-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-reply-all-icon': ReplyAllIconProps
    }
  }
}

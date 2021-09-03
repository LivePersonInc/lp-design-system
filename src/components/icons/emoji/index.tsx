import { DireflowComponent } from 'direflow-component';

import EmojiIcon, { EmojiIconProps } from './EmojiIcon';

DireflowComponent.create({
  component: EmojiIcon,
  configuration: {
    tagname: 'lp-emoji-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-emoji-icon': EmojiIconProps
    }
  }
}

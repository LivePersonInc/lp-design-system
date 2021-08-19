import { DireflowComponent } from 'direflow-component';

import ChannelPlaceholderIcon, { ChannelPlaceholderIconProps } from './ChannelPlaceholderIcon';

DireflowComponent.create({
  component: ChannelPlaceholderIcon,
  configuration: {
    tagname: 'lp-channel-placeholder-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-channel-placeholder-icon': ChannelPlaceholderIconProps
    }
  }
}

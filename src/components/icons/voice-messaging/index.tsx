import { DireflowComponent } from 'direflow-component';

import VoiceMessagingIcon, { VoiceMessagingIconProps } from './VoiceMessagingIcon';

DireflowComponent.create({
  component: VoiceMessagingIcon,
  configuration: {
    tagname: 'lp-voice-messaging-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-voice-messaging-icon': VoiceMessagingIconProps
    }
  }
}

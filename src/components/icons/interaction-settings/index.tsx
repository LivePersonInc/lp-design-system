import { DireflowComponent } from 'direflow-component';

import InteractionSettingsIcon, { InteractionSettingsIconProps } from './InteractionSettingsIcon';

DireflowComponent.create({
  component: InteractionSettingsIcon,
  configuration: {
    tagname: 'lp-interaction-settings-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-interaction-settings-icon': InteractionSettingsIconProps
    }
  }
}

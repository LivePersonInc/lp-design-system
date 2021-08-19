import { DireflowComponent } from 'direflow-component';

import ClipboardIcon, { ClipboardIconProps } from './ClipboardIcon';

DireflowComponent.create({
  component: ClipboardIcon,
  configuration: {
    tagname: 'lp-clipboard-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-clipboard-icon': ClipboardIconProps
    }
  }
}

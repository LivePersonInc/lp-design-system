import { DireflowComponent } from 'direflow-component';

import AttachmentIcon, { AttachmentIconProps } from './AttachmentIcon';

DireflowComponent.create({
  component: AttachmentIcon,
  configuration: {
    tagname: 'lp-attachment-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-attachment-icon': AttachmentIconProps
    }
  }
}

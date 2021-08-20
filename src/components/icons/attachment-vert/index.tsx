import { DireflowComponent } from 'direflow-component';

import AttachmentVertIcon, { AttachmentVertIconProps } from './AttachmentVertIcon';

DireflowComponent.create({
  component: AttachmentVertIcon,
  configuration: {
    tagname: 'lp-attachment-vert-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-attachment-vert-icon': AttachmentVertIconProps
    }
  }
}

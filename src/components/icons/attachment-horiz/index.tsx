import { DireflowComponent } from 'direflow-component';

import AttachmentHorizIcon, { AttachmentHorizIconProps } from './AttachmentHorizIcon';

DireflowComponent.create({
  component: AttachmentHorizIcon,
  configuration: {
    tagname: 'lp-attachment-horiz-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-attachment-horiz-icon': AttachmentHorizIconProps
    }
  }
}

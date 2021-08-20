import { DireflowComponent } from 'direflow-component';

import DialogPreviewIcon, { DialogPreviewIconProps } from './DialogPreviewIcon';

DireflowComponent.create({
  component: DialogPreviewIcon,
  configuration: {
    tagname: 'lp-dialog-preview-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-dialog-preview-icon': DialogPreviewIconProps
    }
  }
}

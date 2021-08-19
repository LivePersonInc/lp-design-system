import { DireflowComponent } from 'direflow-component';

import UploadIcon, { UploadIconProps } from './UploadIcon';

DireflowComponent.create({
  component: UploadIcon,
  configuration: {
    tagname: 'lp-upload-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-upload-icon': UploadIconProps
    }
  }
}

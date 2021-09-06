import { DireflowComponent } from 'direflow-component';

import DownloadIcon, { DownloadIconProps } from './DownloadIcon';

DireflowComponent.create({
  component: DownloadIcon,
  configuration: {
    tagname: 'lp-download-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-download-icon': DownloadIconProps
    }
  }
}

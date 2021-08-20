import { DireflowComponent } from 'direflow-component';

import DataTransporterIcon, { DataTransporterIconProps } from './DataTransporterIcon';

DireflowComponent.create({
  component: DataTransporterIcon,
  configuration: {
    tagname: 'lp-data-transporter-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-data-transporter-icon': DataTransporterIconProps
    }
  }
}

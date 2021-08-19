import { DireflowComponent } from 'direflow-component';

import UnpublishedIcon, { UnpublishedIconProps } from './UnpublishedIcon';

DireflowComponent.create({
  component: UnpublishedIcon,
  configuration: {
    tagname: 'lp-unpublished-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-unpublished-icon': UnpublishedIconProps
    }
  }
}

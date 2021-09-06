import { DireflowComponent } from 'direflow-component';

import PublishedIcon, { PublishedIconProps } from './PublishedIcon';

DireflowComponent.create({
  component: PublishedIcon,
  configuration: {
    tagname: 'lp-published-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-published-icon': PublishedIconProps
    }
  }
}

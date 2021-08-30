import { DireflowComponent } from 'direflow-component';

import ApplicationIntentBuilderIcon, { ApplicationIntentBuilderIconProps } from './ApplicationIntentBuilderIcon';

DireflowComponent.create({
  component: ApplicationIntentBuilderIcon,
  configuration: {
    tagname: 'lp-application-intent-builder-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-application-intent-builder-icon': ApplicationIntentBuilderIconProps
    }
  }
}

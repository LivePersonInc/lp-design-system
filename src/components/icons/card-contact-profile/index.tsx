import { DireflowComponent } from 'direflow-component';

import CardContactProfileIcon, { CardContactProfileIconProps } from './CardContactProfileIcon';

DireflowComponent.create({
  component: CardContactProfileIcon,
  configuration: {
    tagname: 'lp-card-contact-profile-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-card-contact-profile-icon': CardContactProfileIconProps
    }
  }
}

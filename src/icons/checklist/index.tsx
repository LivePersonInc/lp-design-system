import { DireflowComponent } from 'direflow-component';

import ChecklistIcon, { ChecklistIconProps } from './ChecklistIcon';

DireflowComponent.create({
  component: ChecklistIcon,
  configuration: {
    tagname: 'lp-checklist-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-checklist-icon': ChecklistIconProps
    }
  }
}

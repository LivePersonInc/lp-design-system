import { DireflowComponent } from 'direflow-component';

import SkillAddIcon, { SkillAddIconProps } from './SkillAddIcon';

DireflowComponent.create({
  component: SkillAddIcon,
  configuration: {
    tagname: 'lp-skill-add-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-skill-add-icon': SkillAddIconProps
    }
  }
}

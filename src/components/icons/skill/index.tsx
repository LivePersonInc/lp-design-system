import { DireflowComponent } from 'direflow-component';

import SkillIcon, { SkillIconProps } from './SkillIcon';

DireflowComponent.create({
  component: SkillIcon,
  configuration: {
    tagname: 'lp-skill-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-skill-icon': SkillIconProps
    }
  }
}

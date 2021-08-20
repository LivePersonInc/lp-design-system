import { DireflowComponent } from 'direflow-component';

import IdeaIcon, { IdeaIconProps } from './IdeaIcon';

DireflowComponent.create({
  component: IdeaIcon,
  configuration: {
    tagname: 'lp-idea-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-idea-icon': IdeaIconProps
    }
  }
}

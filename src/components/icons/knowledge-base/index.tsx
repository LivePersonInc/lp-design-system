import { DireflowComponent } from 'direflow-component';

import KnowledgeBaseIcon, { KnowledgeBaseIconProps } from './KnowledgeBaseIcon';

DireflowComponent.create({
  component: KnowledgeBaseIcon,
  configuration: {
    tagname: 'lp-knowledge-base-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-knowledge-base-icon': KnowledgeBaseIconProps
    }
  }
}

import { DireflowComponent } from 'direflow-component';

import KnowledgeBaseAddIcon, { KnowledgeBaseAddIconProps } from './KnowledgeBaseAddIcon';

DireflowComponent.create({
  component: KnowledgeBaseAddIcon,
  configuration: {
    tagname: 'lp-knowledge-base-add-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-knowledge-base-add-icon': KnowledgeBaseAddIconProps
    }
  }
}

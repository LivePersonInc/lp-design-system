import { DireflowComponent } from 'direflow-component';

import KnowledgeBaseManageIcon, { KnowledgeBaseManageIconProps } from './KnowledgeBaseManageIcon';

DireflowComponent.create({
  component: KnowledgeBaseManageIcon,
  configuration: {
    tagname: 'lp-knowledge-base-manage-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-knowledge-base-manage-icon': KnowledgeBaseManageIconProps
    }
  }
}

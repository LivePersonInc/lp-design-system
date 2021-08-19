import { DireflowComponent } from 'direflow-component';

import ApplicationKnowledgeBaseIcon, { ApplicationKnowledgeBaseIconProps } from './ApplicationKnowledgeBaseIcon';

DireflowComponent.create({
  component: ApplicationKnowledgeBaseIcon,
  configuration: {
    tagname: 'lp-application-knowledge-base-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-application-knowledge-base-icon': ApplicationKnowledgeBaseIconProps
    }
  }
}

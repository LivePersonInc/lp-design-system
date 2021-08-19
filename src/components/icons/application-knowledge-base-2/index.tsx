import { DireflowComponent } from 'direflow-component';

import ApplicationKnowledgeBase2Icon, { ApplicationKnowledgeBase2IconProps } from './ApplicationKnowledgeBase2Icon';

DireflowComponent.create({
  component: ApplicationKnowledgeBase2Icon,
  configuration: {
    tagname: 'lp-application-knowledge-base-2-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-application-knowledge-base-2-icon': ApplicationKnowledgeBase2IconProps
    }
  }
}

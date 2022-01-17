import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import ApplicationKnowledgeBase2 from './icons/name=application-knowledge-base-2.svg';

@customElement('lp-application-knowledge-base-2-icon')
export class ApplicationKnowledgeBase2Icon extends Icon {
  icons = ApplicationKnowledgeBase2;
}

declare global {
  interface HTMLElementTagNameMap {
    "lp-application-knowledge-base-2-icon": ApplicationKnowledgeBase2Icon,
  }
}

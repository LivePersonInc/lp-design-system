import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import ApplicationKnowledgeBase from './icons/name=application-knowledge-base.svg';

@customElement('lp-application-knowledge-base-icon')
export class ApplicationKnowledgeBaseIcon extends Icon {
  icons = ApplicationKnowledgeBase;
}

declare global {
  interface HTMLElementTagNameMap {
    "lp-application-knowledge-base-icon": ApplicationKnowledgeBaseIcon,
  }
}

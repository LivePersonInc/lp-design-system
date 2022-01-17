import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import ApplicationConversationBuilder from './icons/name=application-conversation-builder.svg';

@customElement('lp-application-conversation-builder-icon')
export class ApplicationConversationBuilderIcon extends Icon {
  icons = ApplicationConversationBuilder;
}

declare global {
  interface HTMLElementTagNameMap {
    "lp-application-conversation-builder-icon": ApplicationConversationBuilderIcon,
  }
}

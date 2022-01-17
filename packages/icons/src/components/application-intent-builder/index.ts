import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import ApplicationIntentBuilder from './icons/name=application-intent-builder.svg';

@customElement('lp-application-intent-builder-icon')
export class ApplicationIntentBuilderIcon extends Icon {
  icons = ApplicationIntentBuilder;
}

declare global {
  interface HTMLElementTagNameMap {
    "lp-application-intent-builder-icon": ApplicationIntentBuilderIcon,
  }
}

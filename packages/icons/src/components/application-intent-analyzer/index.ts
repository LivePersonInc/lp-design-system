import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import ApplicationIntentAnalyzer from './icons/name=application-intent-analyzer.svg';

@customElement('lp-application-intent-analyzer-icon')
export class ApplicationIntentAnalyzerIcon extends Icon {
  icons = ApplicationIntentAnalyzer;
}

declare global {
  interface HTMLElementTagNameMap {
    "lp-application-intent-analyzer-icon": ApplicationIntentAnalyzerIcon,
  }
}

import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import ApplicationMaven from './icons/name=application-maven.svg';

@customElement('lp-application-maven-icon')
export class ApplicationMavenIcon extends Icon {
  icons = ApplicationMaven;
}

declare global {
  interface HTMLElementTagNameMap {
    "lp-application-maven-icon": ApplicationMavenIcon,
  }
}

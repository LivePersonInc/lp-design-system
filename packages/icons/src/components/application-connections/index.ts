import { customElement } from 'lit/decorators.js';

import Icon from '../Icon';

import ApplicationConnections from './icons/name=application-connections.svg';

@customElement('lp-application-connections-icon')
export class ApplicationConnectionsIcon extends Icon {
  icons = ApplicationConnections;
}

declare global {
  interface HTMLElementTagNameMap {
    "lp-application-connections-icon": ApplicationConnectionsIcon,
  }
}

import { html, LitElement } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { property } from 'lit/decorators.js';

import styles from './Icon.scss';

export type IconType = 'solid' | 'outline'
export type IconSize = 'small' | 'medium' | 'large'
export type IconColor = 'dark' | 'white'

export type IconProps = {
  type: IconType
  size: IconSize
  color: IconColor
}

abstract class Icon extends LitElement {
  static styles = styles;

  @property() type: IconProps['type'] = 'solid';
  @property() size: IconProps['size'] = 'small';
  @property() color: IconProps['color'] = 'dark';

  abstract icons: string | {
    [type in IconType]: {
      [size in IconSize]: string
    }
  };

  render() {
    return html`
      ${unsafeSVG(typeof this.icons === 'string' ? this.icons : this.icons[this.type][this.size])}
    `;
  }
}

export default Icon

import React from 'react';
import { Styled } from 'direflow-component';

import styles from './Icon.scss';

export type IconType = 'solid' | 'outline'
export type IconSize = 'small' | 'medium' | 'large'
export type IconColor = 'dark' | 'white'

export type IconCustomProps = {
  type?: IconType
  size?: IconSize
  color?: IconColor
}

export type IconProps = IconCustomProps

abstract class Icon<P extends IconProps = IconProps, S = {}> extends React.Component<P, S> {
  static defaultProps = {
    type: 'solid',
    size: 'small',
  };

  abstract icons: string | {
    [type in IconType]: {
      [size in IconSize]: string
    }
  };

  get Icon() {
    return (
      typeof this.icons === 'string'
        ? this.icons
        : this.icons[this.props.type as IconType][this.props.size as IconSize]
    );
  }

  render() {
    const { Icon } = this;

    return (
      <Styled styles={styles} scoped={false}>
        <slot>
          <Icon />
        </slot>
      </Styled>
    );
  }
}

export default Icon
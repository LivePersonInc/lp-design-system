import Icon, { IconProps } from '../Icon';

import OutlineSmall from './icons/name=text&fill=false&size=16.svg';

export type TextIconProps = IconProps

class TextIcon extends Icon {
  icons = {
    solid: {
      small: OutlineSmall,
      medium: OutlineSmall,
      large: OutlineSmall,
    },
    outline: {
      small: OutlineSmall,
      medium: OutlineSmall,
      large: OutlineSmall,
    },
  };
}

export default TextIcon
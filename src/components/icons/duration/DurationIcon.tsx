import Icon, { IconProps } from '../Icon';

import OutlineSmall from './icons/name=duration&fill=false&size=16.svg';

export type DurationIconProps = IconProps

class DurationIcon extends Icon {
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

export default DurationIcon

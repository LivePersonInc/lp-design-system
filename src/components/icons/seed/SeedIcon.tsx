import Icon, { IconProps } from '../Icon';

import OutlineSmall from './icons/name=seed&fill=false&size=16.svg';

export type SeedIconProps = IconProps

class SeedIcon extends Icon {
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

export default SeedIcon

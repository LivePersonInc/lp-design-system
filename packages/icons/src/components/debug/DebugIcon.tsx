import Icon, { IconProps } from '../Icon';

import OutlineSmall from './icons/name=debug&fill=false&size=16.svg';

export type DebugIconProps = IconProps

class DebugIcon extends Icon {
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

export default DebugIcon

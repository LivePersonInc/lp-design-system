import Icon, { IconProps } from '../Icon';

import OutlineSmall from './icons/name=quick&fill=false&size=16.svg';

export type QuickIconProps = IconProps

class QuickIcon extends Icon {
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

export default QuickIcon

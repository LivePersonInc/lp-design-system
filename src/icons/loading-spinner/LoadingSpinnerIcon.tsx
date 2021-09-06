import Icon, { IconProps } from '../Icon';

import OutlineSmall from './icons/name=loading-spinner&fill=false&size=16.svg';

export type LoadingSpinnerIconProps = IconProps

class LoadingSpinnerIcon extends Icon {
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

export default LoadingSpinnerIcon

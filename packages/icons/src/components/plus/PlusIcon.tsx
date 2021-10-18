import Icon, { IconProps } from '../Icon';

import OutlineSmall from './icons/name=plus&fill=false&size=16.svg';
import OutlineMedium from './icons/name=plus&fill=false&size=24.svg';
import OutlineLarge from './icons/name=plus&fill=false&size=32.svg';

export type PlusIconProps = IconProps

class PlusIcon extends Icon {
  icons = {
    solid: {
      small: OutlineSmall,
      medium: OutlineMedium,
      large: OutlineLarge,
    },
    outline: {
      small: OutlineSmall,
      medium: OutlineMedium,
      large: OutlineLarge,
    },
  };
}

export default PlusIcon

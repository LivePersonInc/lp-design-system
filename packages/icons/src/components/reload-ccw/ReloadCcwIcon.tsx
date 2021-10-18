import Icon, { IconProps } from '../Icon';

import SolidLarge from './icons/name=reload-ccw&fill=true&size=32.svg';
import OutlineSmall from './icons/name=reload-ccw&fill=false&size=16.svg';
import OutlineMedium from './icons/name=reload-ccw&fill=false&size=24.svg';
import OutlineLarge from './icons/name=reload-ccw&fill=false&size=32.svg';

export type ReloadCcwIconProps = IconProps

class ReloadCcwIcon extends Icon {
  icons = {
    solid: {
      small: OutlineSmall,
      medium: OutlineMedium,
      large: SolidLarge,
    },
    outline: {
      small: OutlineSmall,
      medium: OutlineMedium,
      large: OutlineLarge,
    },
  };
}

export default ReloadCcwIcon

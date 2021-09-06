import Icon, { IconProps } from '../Icon';

import SolidSmall from './icons/name=releases&fill=true&size=16.svg';
import SolidMedium from './icons/name=releases&fill=true&size=24.svg';
import SolidLarge from './icons/name=releases&fill=true&size=32.svg';
import OutlineSmall from './icons/name=releases&fill=false&size=16.svg';
import OutlineMedium from './icons/name=releases&fill=false&size=24.svg';
import OutlineLarge from './icons/name=releases&fill=false&size=32.svg';

export type ReleasesIconProps = IconProps

class ReleasesIcon extends Icon {
  icons = {
    solid: {
      small: SolidSmall,
      medium: SolidMedium,
      large: SolidLarge,
    },
    outline: {
      small: OutlineSmall,
      medium: OutlineMedium,
      large: OutlineLarge,
    },
  };
}

export default ReleasesIcon

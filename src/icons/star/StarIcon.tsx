import Icon, { IconProps } from '../Icon';

import SolidSmall from './icons/name=star&fill=true&size=16.svg';
import SolidMedium from './icons/name=star&fill=true&size=24.svg';
import SolidLarge from './icons/name=star&fill=true&size=32.svg';
import OutlineSmall from './icons/name=star&fill=false&size=16.svg';
import OutlineMedium from './icons/name=star&fill=false&size=24.svg';
import OutlineLarge from './icons/name=star&fill=false&size=32.svg';

export type StarIconProps = IconProps

class StarIcon extends Icon {
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

export default StarIcon

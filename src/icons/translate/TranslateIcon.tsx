import Icon, { IconProps } from '../Icon';

import SolidSmall from './icons/name=translate&fill=true&size=16.svg';
import SolidMedium from './icons/name=translate&fill=true&size=24.svg';
import SolidLarge from './icons/name=translate&fill=true&size=32.svg';
import OutlineSmall from './icons/name=translate&fill=false&size=16.svg';
import OutlineMedium from './icons/name=translate&fill=false&size=24.svg';
import OutlineLarge from './icons/name=translate&fill=false&size=32.svg';

export type TranslateIconProps = IconProps

class TranslateIcon extends Icon {
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

export default TranslateIcon
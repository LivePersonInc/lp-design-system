import Icon, { IconProps } from '../Icon';

import SolidSmall from './icons/name=intent&fill=true&size=16.svg';
import SolidMedium from './icons/name=intent&fill=true&size=24.svg';
import SolidLarge from './icons/name=intent&fill=true&size=32.svg';
import OutlineSmall from './icons/name=intent&fill=false&size=16.svg';
import OutlineMedium from './icons/name=intent&fill=false&size=24.svg';
import OutlineLarge from './icons/name=intent&fill=false&size=32.svg';

export type IntentIconProps = IconProps

class IntentIcon extends Icon {
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

export default IntentIcon

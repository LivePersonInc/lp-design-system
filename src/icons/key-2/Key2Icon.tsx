import Icon, { IconProps } from '../Icon';

import SolidSmall from './icons/name=key-2&fill=true&size=16.svg';
import SolidMedium from './icons/name=key-2&fill=true&size=24.svg';
import SolidLarge from './icons/name=key-2&fill=true&size=32.svg';
import OutlineSmall from './icons/name=key-2&fill=false&size=16.svg';
import OutlineMedium from './icons/name=key-2&fill=false&size=24.svg';
import OutlineLarge from './icons/name=key-2&fill=false&size=32.svg';

export type Key2IconProps = IconProps

class Key2Icon extends Icon {
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

export default Key2Icon

import Icon, { IconProps } from '../Icon';

import SolidLarge from './icons/name=expand-2&fill=true&size=32.svg';
import OutlineSmall from './icons/name=expand-2&fill=false&size=16.svg';
import OutlineMedium from './icons/name=expand-2&fill=false&size=24.svg';
import OutlineLarge from './icons/name=expand-2&fill=false&size=32.svg';

export type Expand2IconProps = IconProps

class Expand2Icon extends Icon {
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

export default Expand2Icon

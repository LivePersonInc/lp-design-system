import Icon, { IconProps } from '../Icon';

import SolidLarge from './icons/name=undo&fill=true&size=32.svg';
import OutlineSmall from './icons/name=undo&fill=false&size=16.svg';
import OutlineMedium from './icons/name=undo&fill=false&size=24.svg';
import OutlineLarge from './icons/name=undo&fill=false&size=32.svg';

export type UndoIconProps = IconProps

class UndoIcon extends Icon {
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

export default UndoIcon
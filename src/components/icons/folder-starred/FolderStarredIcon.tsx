import Icon, { IconProps } from '../Icon';

import SolidSmall from './icons/name=folder-starred&fill=true&size=16.svg';

export type FolderStarredIconProps = IconProps

class FolderStarredIcon extends Icon {
  icons = {
    solid: {
      small: SolidSmall,
      medium: SolidSmall,
      large: SolidSmall,
    },
    outline: {
      small: SolidSmall,
      medium: SolidSmall,
      large: SolidSmall,
    },
  };
}

export default FolderStarredIcon

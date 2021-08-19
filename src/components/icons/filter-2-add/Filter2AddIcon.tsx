import Icon, { IconProps } from '../Icon';

import OutlineSmall from './icons/name=filter-2-add&fill=false&size=16.svg';

export type Filter2AddIconProps = IconProps

class Filter2AddIcon extends Icon {
  icons = {
    solid: {
      small: OutlineSmall,
      medium: OutlineSmall,
      large: OutlineSmall,
    },
    outline: {
      small: OutlineSmall,
      medium: OutlineSmall,
      large: OutlineSmall,
    },
  };
}

export default Filter2AddIcon

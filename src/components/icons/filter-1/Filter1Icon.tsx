import Icon, { IconProps } from '../Icon';

import OutlineSmall from './icons/name=filter-1&fill=false&size=16.svg';

export type Filter1IconProps = IconProps

class Filter1Icon extends Icon {
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

export default Filter1Icon

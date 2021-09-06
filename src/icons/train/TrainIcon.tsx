import Icon, { IconProps } from '../Icon';

import OutlineSmall from './icons/name=train&fill=false&size=16.svg';

export type TrainIconProps = IconProps

class TrainIcon extends Icon {
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

export default TrainIcon

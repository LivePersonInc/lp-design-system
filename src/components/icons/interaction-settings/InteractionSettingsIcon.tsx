import Icon, { IconProps } from '../Icon';

import OutlineSmall from './icons/name=interaction-settings&fill=false&size=16.svg';

export type InteractionSettingsIconProps = IconProps

class InteractionSettingsIcon extends Icon {
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

export default InteractionSettingsIcon

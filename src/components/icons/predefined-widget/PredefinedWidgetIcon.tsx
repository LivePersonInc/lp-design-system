import Icon, { IconProps } from '../Icon';

import OutlineSmall from './icons/name=predefined-widget&fill=false&size=16.svg';

export type PredefinedWidgetIconProps = IconProps

class PredefinedWidgetIcon extends Icon {
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

export default PredefinedWidgetIcon

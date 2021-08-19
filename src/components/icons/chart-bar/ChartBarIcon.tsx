import Icon, { IconProps } from '../Icon';

import SolidSmall from './icons/name=chart-bar&fill=true&size=16.svg';
import SolidMedium from './icons/name=chart-bar&fill=true&size=24.svg';
import SolidLarge from './icons/name=chart-bar&fill=true&size=32.svg';
import OutlineMedium from './icons/name=chart-bar&fill=false&size=24.svg';
import OutlineLarge from './icons/name=chart-bar&fill=false&size=32.svg';

export type ChartBarIconProps = IconProps

class ChartBarIcon extends Icon {
  icons = {
    solid: {
      small: SolidSmall,
      medium: SolidMedium,
      large: SolidLarge,
    },
    outline: {
      small: OutlineMedium,
      medium: OutlineMedium,
      large: OutlineLarge,
    },
  };
}

export default ChartBarIcon

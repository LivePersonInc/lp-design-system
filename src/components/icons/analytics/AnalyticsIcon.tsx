import Icon, { IconProps } from '../Icon';

import SolidSmall from './icons/name=analytics&fill=true&size=16.svg';
import SolidMedium from './icons/name=analytics&fill=true&size=24.svg';
import SolidLarge from './icons/name=analytics&fill=true&size=32.svg';
import OutlineSmall from './icons/name=analytics&fill=false&size=16.svg';
import OutlineMedium from './icons/name=analytics&fill=false&size=24.svg';
import OutlineLarge from './icons/name=analytics&fill=false&size=32.svg';

export type AnalyticsIconProps = IconProps

class AnalyticsIcon extends Icon {
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

export default AnalyticsIcon

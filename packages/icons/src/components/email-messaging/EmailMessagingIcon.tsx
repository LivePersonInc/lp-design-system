import Icon, { IconProps } from '../Icon';

import SolidSmall from './icons/name=email-messaging&fill=true&size=16.svg';
import SolidMedium from './icons/name=email-messaging&fill=true&size=24.svg';
import SolidLarge from './icons/name=email-messaging&fill=true&size=32.svg';
import OutlineSmall from './icons/name=email-messaging&fill=false&size=16.svg';
import OutlineMedium from './icons/name=email-messaging&fill=false&size=24.svg';
import OutlineLarge from './icons/name=email-messaging&fill=false&size=32.svg';

export type EmailMessagingIconProps = IconProps

class EmailMessagingIcon extends Icon {
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

export default EmailMessagingIcon

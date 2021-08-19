import Icon, { IconProps } from '../Icon';

import SolidExtraSmall from './icons/name=question-circle&fill=true&size=12.svg';
import SolidSmall from './icons/name=question-circle&fill=true&size=16.svg';
import SolidMedium from './icons/name=question-circle&fill=true&size=24.svg';
import SolidLarge from './icons/name=question-circle&fill=true&size=32.svg';
import OutlineExtraSmall from './icons/name=question-circle&fill=false&size=12.svg';
import OutlineSmall from './icons/name=question-circle&fill=false&size=16.svg';
import OutlineMedium from './icons/name=question-circle&fill=false&size=24.svg';
import OutlineLarge from './icons/name=question-circle&fill=false&size=32.svg';

export type QuestionCircleIconProps = IconProps

class QuestionCircleIcon extends Icon {
  icons = {
    solid: {
      'extra-small': SolidExtraSmall,
      small: SolidSmall,
      medium: SolidMedium,
      large: SolidLarge,
    },
    outline: {
      'extra-small': OutlineExtraSmall,
      small: OutlineSmall,
      medium: OutlineMedium,
      large: OutlineLarge,
    },
  };
}

export default QuestionCircleIcon

import Icon, { IconProps } from '../Icon';

import ApplicationBotStatus from './icons/name=application-bot-status.svg';

export type ApplicationBotStatusIconProps = IconProps

class ApplicationBotStatusIcon extends Icon {
  icons = ApplicationBotStatus;
}

export default ApplicationBotStatusIcon

import IconsList from './IconsList';

import { Icons } from '../icons';
import { IconProps } from '../Icon';

export * from './IconsList';
export * from './IconsListItem';
export * from './IconImportDetails';

export type IconsNames = {
  name: Icons
}

export type IconPropsWithName = IconProps & IconsNames

export default IconsList

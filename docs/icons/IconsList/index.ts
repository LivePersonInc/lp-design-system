import { Icons } from '@liveperson-design-system/icons/src/components/icons';
import { IconProps } from '@liveperson-design-system/icons/src/components/Icon';

import IconsList from './IconsList';

export * from './IconsList';
export * from './IconsListItem';
export * from './IconImportDetails';

export type IconsNames = {
  name: Icons
}

export type IconPropsWithName = IconProps & IconsNames

export default IconsList

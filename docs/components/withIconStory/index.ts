import { ArgType, ArgTypes } from '@storybook/addons/dist/ts3.9/types';
// @ts-ignore
import Description from './Description.md';

import { icons } from './icons';

import '@lpds/icons';

export { icons };

export const argTypeWithIcons: ArgType = {
  options: icons,
  control: { type: 'select' },
}
export function getArgTypesWithIcons(keys: string | string[], options: ArgTypes = {}): ArgTypes {
  const argTypes: ArgTypes = {};

  if (Array.isArray(keys)) {
    keys.forEach(key => {
      argTypes[key] = { ...argTypeWithIcons, ...options };
    });
  } else {
    argTypes[keys] = { ...argTypeWithIcons, ...options };
  }

  return argTypes;
}

export default Description

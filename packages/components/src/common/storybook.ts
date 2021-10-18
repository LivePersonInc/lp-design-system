import { ArgTypes } from '@storybook/addons/dist/ts3.9/types';

export const commonArgTypes: ArgTypes = {
  theme: {
    control: { type: 'inline-radio' },
  },
  size: {
    control: { type: 'inline-radio' },
  },
};

type HideControlsArgTypes = {
  [control: string]: { table: { disable: true } }
}
export function hideControls(controls: string[]): HideControlsArgTypes {
  const argTypes: HideControlsArgTypes = {};

  controls.forEach(control => {
    argTypes[control] = { table: { disable: true } };
  });

  return argTypes;
}

type GroupControlsArgTypes = {
  [control: string]: { table: { category: string } }
}
export function groupControls(controls: string[], category: string): GroupControlsArgTypes {
  const argTypes: GroupControlsArgTypes = {};

  controls.forEach(control => {
    argTypes[control] = { table: { category } };
  });

  return argTypes;
}

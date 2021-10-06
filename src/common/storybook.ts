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

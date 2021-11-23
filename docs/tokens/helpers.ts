export const firstLetterUpper = (str: string): string => (str.charAt(0).toUpperCase() + str.slice(1));

const descriptions: { [name: string]: string } = {
  Navy: 'Main palette for background and text purposes',
  Blue: 'Primary accent color. Used for buttons in the dark theme. Used in toast notifications',
  Orange: 'Orange is an signal color. Use for notification indicators, key actions that require immediate attention. Used also for template component',
  Green: 'Lime is a signal color. Mostly used for indication of successfully completed action or a process. Used for notifications.',
  Red: 'Red is a signal color. Used to notify of alert if a process or an action is incomplete or failed. Light shade used  as error state in inputs for better contrast on dark background.',
  Yellow: 'Yellow is a signal color. Used as a warning for the prevention of errors.',
};

type GroupedColors = {
  [key: string]: {
    subtitle?: string
    colors: { [key: string]: string }
  }
}
export function getGroupedColors(colors: { [key: string]: string }): GroupedColors {
  const groups: GroupedColors = {};

  Object.keys(colors).forEach(key => {
    const name = key.replace(/[A-Z]/g, value => `-${value.toLowerCase()}`);

    const groupName = firstLetterUpper(name.split('-')[0]);

    if (!groups[groupName]) {
      groups[groupName] = {
        subtitle: descriptions[groupName],
        colors: {},
      };
    }

    groups[groupName].colors[`$${name}`] = colors[key as any];
  });

  return groups;
}

export function parseClasses(css: string): string[] {
  return (css.match(/^\..+/gm) || []).map(row => row.replace(' {', ''));
}

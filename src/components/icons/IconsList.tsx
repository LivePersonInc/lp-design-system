import React from 'react';
import { Clipboard } from '@storybook/design-system';

import { Icons, icons } from './icons';

import { IconProps } from './Icon';

import './';

import classes from './IconsList.module.scss';

const IconsListItem: React.FC<IconProps & { name: Icons }> = ({ name, ...props }) => (
  <Clipboard className={classes['list-item']} toCopy={name}>
    {React.createElement(`lp-${name}-icon`, { ...props, class: classes['icon'] })}

    <div className={classes['name']}>{name}</div>
  </Clipboard>
);

const IconsList: React.FC<IconProps & { name: Icons }> = ({ name, ...props }) => (
  <div className={classes['list']}>
    {(
      name
        ? icons.filter(icon => icon.includes(name))
        : icons
    ).map(icon => <IconsListItem key={icon} name={icon} {...props} />)}
  </div>
);

export default IconsList

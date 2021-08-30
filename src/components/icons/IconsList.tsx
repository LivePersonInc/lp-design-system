import React from 'react';

import { Icons, icons } from './icons';

import { IconProps } from './Icon';

import './';

import classes from './IconsList.module.scss';

const IconsListItem: React.FC<IconProps & { name: Icons }> = ({ name, ...props }) => (
  <div className={classes['list-item']}>
    <div className={classes['list-item-icon']}>
      {React.createElement(`lp-${name}-icon`, { ...props, class: classes['icon'] })}

    </div>

    <div className={classes['list-item-name']}>{name}</div>
  </div>
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

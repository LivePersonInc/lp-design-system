import React from 'react';
import classNames from 'classnames';

import { IconsListProps } from './IconsList';

import classes from './IconsList.module.scss';

export type IconListItemProps = IconsListProps & {
  selected?: boolean
  onClick?(): void
}

export type IconListItemComponent = React.FC<IconListItemProps>

const IconListItem:IconListItemComponent = ({ name, selected, onClick, ...props }) => (
  <div className={classNames(classes['list-item'], { [classes['selected']]: selected })} onClick={onClick}>
    {React.createElement(`lp-${name}-icon`, { ...props, class: classes['icon'] })}

    <div className={classes['name']}>{name}</div>
  </div>
);

export default IconListItem

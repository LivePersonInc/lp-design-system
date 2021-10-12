import React, { useCallback, useMemo, useState } from 'react';

import { Icons, icons } from '../icons';

import { IconProps } from '../Icon';

import '../';

import { IconsNames } from './';

import IconListItem from './IconsListItem';
import IconImportDetails from './IconImportDetails';

import classes from './IconsList.module.scss';

export type IconsListProps = IconProps & IconsNames

export type IconsListComponent = React.FC<IconsListProps>

const IconsList: IconsListComponent = ({ name, ...props }) => {
  const [selectedIcon, setSelectedIcon] = useState<Icons>();

  const filteredIcons = useMemo<Icons[]>(() => (
    name ? icons.filter(icon => icon.includes(name)) : icons
  ), [name]);

  const itemClickHandler = useCallback((icon?: Icons) => (): void => {
    setSelectedIcon(icon);
  }, []);

  return (
    <div className={classes['list']}>
      {filteredIcons.map(icon => (
        icon === selectedIcon
          ? (
            <React.Fragment key={icon}>
              <IconListItem key={icon} name={icon} selected onClick={itemClickHandler()} {...props} />

              <IconImportDetails name={icon} {...props} />
            </React.Fragment>
          )
          : <IconListItem key={icon} name={icon} onClick={itemClickHandler(icon)} {...props} />
      ))}
    </div>
  );
};

export default IconsList

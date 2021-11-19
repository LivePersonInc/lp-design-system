import React, { useCallback, useMemo, useState } from 'react';

import { icons } from '@liveperson-design-system/icons/src/components/icons';

import '@liveperson-design-system/icons/src/components';

import { IconPropsWithName, IconsNames } from './';

import IconListItem from './IconsListItem';
import IconImportDetails from './IconImportDetails';

import classes from './IconsList.module.scss';

export type IconsListProps = IconPropsWithName

export type IconsListComponent = React.FC<IconsListProps>

const IconsList: IconsListComponent = ({ name, ...props }) => {
  const [selectedIcon, setSelectedIcon] = useState<IconsNames['name']>();

  const filteredIcons = useMemo<IconsNames['name'][]>(() => (
    name ? icons.filter(icon => icon.includes(name)) : icons
  ), [name]);

  const itemClickHandler = useCallback((icon?: IconsNames['name']) => (): void => {
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

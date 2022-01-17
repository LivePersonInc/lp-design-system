import React, { useCallback, useMemo, useState } from 'react';
import { styled } from '@storybook/theming';

import { icons } from '@lpds/icons/src/components/icons';

import '@lpds/icons';

import { IconPropsWithName, IconsNames } from './';

import IconListItem from './IconsListItem';
import IconImportDetails from './IconImportDetails';

export type IconsListProps = IconPropsWithName

export type IconsListComponent = React.FC<IconsListProps>

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const IconsList: IconsListComponent = ({ name, ...props }) => {
  const [selectedIcon, setSelectedIcon] = useState<IconsNames['name']>();

  const filteredIcons = useMemo<IconsNames['name'][]>(() => (
    name ? icons.filter(icon => icon.includes(name)) : icons
  ), [name]);

  const itemClickHandler = useCallback((icon?: IconsNames['name']) => (): void => {
    setSelectedIcon(icon);
  }, []);

  return (
    <List>
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
    </List>
  );
};

export default IconsList

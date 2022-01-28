import React, { useCallback, useState } from 'react';
import { styled } from '@storybook/theming';

import { icons, Icons } from '@lpds/icons/src/components/icons';

import '@lpds/icons';

import IconListItem from './IconsListItem';
import IconsListSearchField from './IconsListSearchField';

export type IconsListComponent = React.VFC

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const IconsList: IconsListComponent = () => {
  const [filteredIcons, setFilteredIcons] = useState<Icons[]>(icons);

  const iconsListSearchFieldSearchHandler = useCallback((icons: Icons[]): void => {
    setFilteredIcons(icons);
  }, []);

  return (
    <>
      <IconsListSearchField onSearch={iconsListSearchFieldSearchHandler} />

      <List>
        {filteredIcons.map(icon => <IconListItem key={icon} name={icon} />)}
      </List>
    </>
  );
};

export default IconsList

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-search-1-icon': any;
      'lp-close-icon': any;
    }
  }
}

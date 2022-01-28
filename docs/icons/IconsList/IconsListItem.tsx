import React, { useCallback, useState } from 'react';
import { styled } from '@storybook/theming'

import { variables as colorsVariables } from '@lpds/tokens/build/js/colors';
import { Icons } from '@lpds/icons/src/components/icons';

import IconDetailsModal from './IconDetailsModal';

export type IconListItemProps = {
  name: Icons
}

export type IconListItemComponent = React.VFC<IconListItemProps>

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
  text-align: center;
  font-size: 12px;
  border-radius: 4px;
  color: ${({ theme }) => theme.color.defaultText};
  padding: 15px 0;
  cursor: pointer;
  transition: background-color .15s ease-out;

  &:hover {
    background-color: ${colorsVariables.navy.dark};
  }
`;

const ListItemIconWrap = styled.div`
  margin-bottom: 15px;
`;

const ListItemName = styled.div`
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 0 10px;
`;

const IconListItem: IconListItemComponent = ({ name }) => {
  const [isIconDetailsModalOpen, setIsIconDetailsModalOpen] = useState<boolean>(false);

  const onListItemClick = useCallback((): void => {
    setIsIconDetailsModalOpen(true);
  }, []);

  const iconDetailsModalCloseHandler = useCallback((): void => {
    setIsIconDetailsModalOpen(false);
  }, []);

  return (
    <>
      <ListItem title={name} onClick={onListItemClick}>
        <ListItemIconWrap>
          {React.createElement(`lp-${name}-icon`, { size: 'large' })}
        </ListItemIconWrap>

        <ListItemName>{name}</ListItemName>
      </ListItem>

      {isIconDetailsModalOpen && <IconDetailsModal name={name} onClose={iconDetailsModalCloseHandler} />}
    </>
  );
};

export default IconListItem

import React from 'react';
import { styled } from '@storybook/theming'
import classNames from 'classnames';

import { variables as colorsVariables } from '@liveperson-design-system/tokens/build/js/colors';

import { IconsListProps } from './IconsList';

export type IconListItemProps = IconsListProps & Pick<JSX.IntrinsicElements['div'], 'onClick'> & {
  selected?: boolean
}

export type IconListItemComponent = React.FC<IconListItemProps>

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

  &:hover,
  &.selected {
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

const IconListItem: IconListItemComponent = ({ name, selected, onClick, ...props }) => (
  <ListItem className={classNames({ selected })} onClick={onClick}>
    <ListItemIconWrap>
      {React.createElement(`lp-${name}-icon`, props)}
    </ListItemIconWrap>

    <ListItemName>{name}</ListItemName>
  </ListItem>
);

export default IconListItem

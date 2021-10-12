import React from 'react';
import styled from 'styled-components';

import { DropdownProps } from './Dropdown';

export const Decorator = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
  width: 100%;
  height: 100%;
  min-height: 500px;

  > div {
    display: flex;
    justify-content: flex-start;
    flex: 0 0 33%;

    &:nth-child(2),
    &:nth-child(3n + 2) {
      justify-content: center;
    }

    &:nth-child(3n) {
      justify-content: flex-end;
    }
  }
`;

export const DropdownContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  color: #fff;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .7);
  overflow: auto;
`;

export const AutoPlacementStoryDecorator = (Story: React.FC<DropdownProps>): React.ReactElement => (
  <Decorator>
    {Array(9).fill(null).map((item, index) => (
      <div key={index}>
        <Story parentSelector=".story-decorator" />
      </div>
    ))}
  </Decorator>
);

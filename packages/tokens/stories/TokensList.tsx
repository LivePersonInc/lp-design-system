// @ts-ignore
import React from 'react';
import { styled, css } from '@storybook/theming';

export type TokensListProps = {
  header?: React.ReactNode[]
  body?: (React.ReactNode[])[]
}

export type TokensListComponents = React.FC<TokensListProps>

const TokensTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: ${({ theme }) => `${theme.typography.size.s2}px`};
  margin: ${({ theme }) => {
    console.log(theme);
    return `${theme.layoutMargin * 2}px 0`;
  }};
`;

const thTdStyles = css`
  border: solid #C4C6CA;
  border-width: 1px 0;
  padding: 15px 20px 15px 0;

  &:last-of-type {
    padding-right: 0;
  }
`;

const TokensTableTh = styled.th`
  text-align: left;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  ${thTdStyles};
`;

const TokensTableTd = styled.td`
  ${thTdStyles};
`;

const TokensList: TokensListComponents = ({ header = [], body = [[]] }) => (
  <TokensTable>
    <thead>
    <tr>
      {header.map((head, index) => <TokensTableTh key={index}>{head}</TokensTableTh>)}
    </tr>
    </thead>

    <tbody>
    {body.map((items, index) => (
      <tr key={index}>
        {items.map((item, index) => <TokensTableTd key={index}>{item}</TokensTableTd>)}
      </tr>
    ))}
    </tbody>
  </TokensTable>
);

export default TokensList

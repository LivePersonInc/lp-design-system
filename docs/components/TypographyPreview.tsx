import React, { createElement, useMemo } from 'react';
import { styled, themes } from '@storybook/theming';
import { loremIpsum } from 'lorem-ipsum';
import { ILoremIpsumParams } from 'lorem-ipsum/src';

export const Table = styled.table<{ light?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: ${({ theme }) => `${theme.typography.size.s2}px`};
  color: ${({ light }) => (light ? themes.light.textColor : themes.dark.textColor)};

  td:first-of-type {
    color: ${({ light }) => (light ? 'rgba(51, 51, 51, .6)' : 'rgba(255, 255, 255, .4)')};
  }
`;

export const Td = styled.td`
  vertical-align: middle;

  &:first-of-type {
    width: 1px;
    font-size: ${({ theme }) => `${theme.typography.size.s1}px`};
    white-space: nowrap;
    padding-right: ${({ theme }) => `${theme.layoutMargin * 3}px`};
  }

  tr:not(:last-child) & {
    padding-bottom: 1rem;
  }

  > * {
    margin: 0;
  }

  input {
    width: 100%;
    font: inherit;
    letter-spacing: inherit;
    text-transform: inherit;
    color: inherit;
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;

    &:focus {
      outline: none;
    }
  }
`;

export type TypographyPreviewProps = {
  light?: boolean
  singleLine?: boolean
  items: { name: React.ReactNode, example: any, exampleProps?: Object, exampleText?: string}[]
  loremIpsumOptions?: ILoremIpsumParams
}

export const TypographyPreview: React.FC<TypographyPreviewProps> = ({ light, singleLine, items, loremIpsumOptions }) => {
  const defaultText = useMemo(() => loremIpsum(loremIpsumOptions), []);

  return (
    <Table light={light}>
      <tbody>
      {items.map(({ name, example, exampleProps = null, exampleText = defaultText }, index) => (
        <tr key={index}>
          <Td>{name || `${++index}.`}</Td>
          <Td>
            {createElement(example, exampleProps, (singleLine ? <input value={exampleText} readOnly /> : exampleText))}
          </Td>
        </tr>
      ))}
      </tbody>
    </Table>
  );
}

export default TypographyPreview

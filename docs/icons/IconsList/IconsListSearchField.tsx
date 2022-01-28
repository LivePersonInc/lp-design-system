import React, { useCallback, useState } from 'react';
import { styled } from '@storybook/theming';
import { debounce } from 'lodash';

import { Icons, icons } from '@lpds/icons/src/components/icons';
import { variables as colorsVariables } from '@lpds/tokens/build/js/colors';

import iconsKeywords from './icons-keywords.json';

type IconsKeywords = { [name in Icons]?: string[] }

export type IconsListSearchFieldProps = {
  onSearch?(icons: Icons[]): void
}

export type IconsListSearchFieldComponent = React.VFC<IconsListSearchFieldProps>

const Input = styled.input`
  display: block;
  width: 100%;
  font-size: ${({ theme }) => `${theme.typography.size.l1}px`};
  line-height: 1.5;
  color: inherit;
  border: none;
  border-radius: ${({ theme }) => `${theme.input.borderRadius}px`};
  box-shadow: ${({ theme }) => `inset 0 0 0 1px ${theme.input.border}`};
  background: ${({ theme }) => theme.input.background};
  padding: 6px 15px 6px 62px;
  margin: ${({ theme }) => `0 0 ${theme.layoutMargin}px`};
  transition: box-shadow .2s ease-out, opacity .2s ease-out;

  &:focus {
    box-shadow: inset 0 0 0 1px ${colorsVariables.orange.default};
    outline: none;
  }

  &:not(:placeholder-shown) {
    padding-right: 62px;

    + .input-icon {
      display: flex;
    },
  }
`;

const InputIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: absolute;
  top: 0;
  padding: 0 15px;
  pointer-events: none;

  &:first-child {
    left: 0;
  }

  &:last-child {
    display: none;
    right: 0;
    pointer-events: initial;
    cursor: pointer;
  }

  > * {
    color: inherit;
  }
`;

const InputWrap = styled.div<{ withClose?: boolean }>`
  position: relative;
  color: ${({ theme }) => theme.input.color};
`;

const IconsListSearchField: IconsListSearchFieldComponent = ({ onSearch }) => {
  const [value, setValue] = useState<string>('');

  const iconsFilter = useCallback(debounce((value: string): void => {
    const names = icons.filter(name => (
      name.includes(value) || ((iconsKeywords as IconsKeywords)[name]?.some(keyword => keyword.includes(value)))
    ));

    onSearch?.(names);
  }, 500), [onSearch]);

  const inputChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);

    iconsFilter(e.target.value);
  }, [iconsFilter]);

  const clearButtonClickHandler = useCallback((): void => {
    setValue('');

    onSearch?.(icons);
  }, [onSearch]);

  return (
    <InputWrap>
      <InputIcon className="input-icon">
        <lp-search-1-icon size="large" />
      </InputIcon>

      <Input type="text" placeholder="Search..." value={value} onChange={inputChangeHandler}/>

      <InputIcon className="input-icon" onClick={clearButtonClickHandler}>
        <lp-close-icon size="large" />
      </InputIcon>
    </InputWrap>
  );
};

export default IconsListSearchField

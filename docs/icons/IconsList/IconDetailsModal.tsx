import React from 'react';
import { Source } from '@storybook/addon-docs';
import { styled } from '@storybook/theming';

import { variables as colorsVariables } from '@lpds/tokens/build/js/colors';
import { Icons } from '@lpds/icons/src/components/icons';
import { IconProps } from '@lpds/icons/src/components/Icon';

export type IconDetailsModalProps = {
  name: Icons
  onClose?(): void
}

export type IconDetailsModalComponent = React.VFC<IconDetailsModalProps>

const ModalWrap = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ModalOverlay = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => {
    console.log(theme);
    return 'rgba(0,0,0,.15)';
  }};
`;

const ModalContent = styled.div`
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  width: 90%;
  max-width: 1000px;
  border: ${({ theme }) => `1px solid ${theme.appBorderColor}`};
  border-radius: ${({ theme }) => `${theme.appBorderRadius}px`};
  background-color: ${colorsVariables.navy.dark};
  transform: translate(-50%, -50%);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.color.defaultText};
  border-bottom: ${({ theme }) => `1px solid ${theme.appBorderColor}`};
  padding: 15px;
`;

const ModalBody = styled.div`
  padding: 15px;
`;

const DetailsName = styled.h3`
  display: flex;
  align-items: center;
  margin: 0;
`;

const ModalCloseIcon = styled.button`
  color: inherit;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;

  lp-close-icon {
    display: block;
  }
`;

const ExamplesList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.defaultText};
  margin-bottom: 15px;
`;

const ExamplesListItem = styled.div`
  text-align: center;
  border-right: ${({ theme }) => `1px solid ${theme.appBorderColor}`};
  padding: ${({ theme }) => `0 ${theme.layoutMargin}px`};

  &:last-child {
    border-right: none;
  }
`;

const ExamplesListItemIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => `${theme.layoutMargin}px`};

  > * {
    margin: ${({ theme }) => `0 ${theme.layoutMargin}px`};
  }
`;

const ExamplesListItemName = styled.div`
  text-align: center;
  text-transform: capitalize;
  font-size: ${({ theme }) => `${theme.typography.size.s1}px`};
`;

const SourceWrap = styled.div`
  .docblock-source {
    background-color: transparent;
    margin: 15px 0;

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .os-host {
    + div {
      &,
      button {
        background-color: transparent;
      }
    }
  }
`;

const types: IconProps['type'][] = ['solid', 'outline'];
const sizes: IconProps['size'][] = ['small', 'medium', 'large'];

const IconDetailsModal: IconDetailsModalComponent = ({ name, onClose }) => (
  <ModalWrap>
    <ModalContent>
      <ModalHeader>
        <DetailsName>{name}</DetailsName>

        <ModalCloseIcon type="button" onClick={onClose}>
          <lp-close-icon size="medium" />
        </ModalCloseIcon>
      </ModalHeader>

      <ModalBody>
        <ExamplesList>
          {types.map(type => (
            <ExamplesListItem key={type}>
              <ExamplesListItemIcons>
                {sizes.map(size => React.createElement(`lp-${name}-icon`, { key: size, type, size }))}
              </ExamplesListItemIcons>

              <ExamplesListItemName>{type}</ExamplesListItemName>
            </ExamplesListItem>
          ))}
        </ExamplesList>

        <SourceWrap>
          <Source
            dark
            language="html"
            code={`<script src="https://unpkg.com/@liveperson-design-system/icons/dist/${name}.js"></script>`}
          />

          <Source dark language="javascript" code={`import '@liveperson-design-system/icons/dist/${name}';`} />

          <Source dark language="html" code={`<lp-${name}-icon />`} />
        </SourceWrap>
      </ModalBody>
    </ModalContent>

    <ModalOverlay onClick={onClose} />
  </ModalWrap>
);

export default IconDetailsModal

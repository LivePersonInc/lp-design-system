import React from 'react';
import { Source } from '@storybook/addon-docs';
import { styled } from '@storybook/theming';

import { IconsListProps } from './IconsList';

export type IconImportDetailsProps = IconsListProps

export type IconImportDetailsComponent = React.FC<IconImportDetailsProps>

const Details = styled.div`
  width: 100%;
  border: ${({ theme }) => `solid ${theme.appBorderColor}`};
  border-width: 1px 0;
  margin: 15px 0;

  .docblock-source {
    margin: 15px 0;

    &:first-of-type {
      margin-top: 15px;
    }

    &:last-of-type {
      margin-bottom: 15px;
    }
  }
`;

const DetailsName = styled.h4`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.defaultText};
`

const DetailsIcon = styled.span`
  margin-right: 7px;

  > * {
    display: block;
  }
`

const SourceWrap = styled.div`
  .docblock-source {
    background-color: transparent;
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

const IconImportDetails: IconImportDetailsComponent = ({ name, type, size, color }) => (
  <Details>
    <DetailsName>
      <DetailsIcon>
        {React.createElement(`lp-${name}-icon`, { type, size: 'medium' })}
      </DetailsIcon>
      {name}
    </DetailsName>

    <SourceWrap>
      <Source
        dark
        language="html"
        code={`<script src="https://unpkg.com/@liveperson-design-system/icons/${name}.js"></script>`}
      />

      <Source
        dark
        language="javascript"
        code={`import '@liveperson-design-system/icons/${name}';`}
      />

      <Source
        dark
        language="html"
        code={(
          `<lp-${name}-icon${type === 'solid' ? '' : ` type="${type}"`}${size === 'small' ? '' : ` size="${size}"`}${color === 'dark' ? '' : ` color="${color}"`} />`
        )}
      />
    </SourceWrap>
  </Details>
);

export default IconImportDetails

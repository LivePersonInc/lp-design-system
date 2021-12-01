import React from 'react';
import { DocsContainer as SBDocsContainer } from '@storybook/addon-docs';
import { styled } from '@storybook/theming';

import { variables as colorsVariables } from '@liveperson-design-system/tokens/build/js/colors';

const DocsDecorator = styled.div`
  .sbdocs {
    &-h2,
    &-h3,
    &-h4,
    &-h5,
    &-h6 {
      color: ${colorsVariables.orange.default};

      &:first-of-type {
        margin-top: 20px;
      }
    }

    &-h2 {
      border-bottom-color: ${colorsVariables.orange.default};
    }
  }
`;

const DocsContainer = ({ children, context }) => (
  <DocsDecorator>
    <SBDocsContainer context={context}>
      {children}
    </SBDocsContainer>
  </DocsDecorator>
);

export default DocsContainer

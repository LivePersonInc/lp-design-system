import React from 'react';
import { Canvas, SourceState } from '@storybook/addon-docs';
import { styled } from '@storybook/theming';

import * as colors from '@liveperson-design-system/tokens/build/js/colors';

const CanvasWrap = styled.div`
  .docs-story {
    background-color: ${({ dark }) => (dark ? colors.variables.navy.darker : '#fff')};
  }
`;

const Preview = ({ dark, withSource = SourceState.NONE, children, ...props }) => (
  <CanvasWrap dark={dark}>
    <Canvas {...props} withSource={withSource}>
      {children}
    </Canvas>
  </CanvasWrap>
);

export default Preview

import React from 'react';
import { Canvas, SourceState } from '@storybook/addon-docs';
import { styled } from '@storybook/theming';

import { variables as colorsVariables } from '@liveperson-design-system/tokens/build/js/colors';

const CanvasWrap = styled.div`
  .docs-story {
    background-color: ${({ bg, light }) => (bg ? bg : (light ? '#fff' : colorsVariables.navy.dark))};
  }
`;

const Preview = ({ bg, light, withSource = SourceState.NONE, children, ...props }) => (
  <CanvasWrap bg={bg} light={light}>
    <Canvas {...props} withSource={withSource}>
      {children}
    </Canvas>
  </CanvasWrap>
);

export default Preview

import React from 'react';
import { Canvas, SourceState } from '@storybook/addon-docs';
import { styled } from '@storybook/theming';

import { variables as colorsVariables } from '@lpds/tokens/build/js/colors';

type CanvasWrapProps = {
  bg?: string
  light?: boolean
}

const CanvasWrap = styled.div<CanvasWrapProps>`
  .docs-story {
    background-color: ${({ bg, light }) => (bg ? bg : (light ? '#fff' : colorsVariables.navy.dark))};
  }
`;

export type PreviewProps = CanvasWrapProps & React.ComponentProps<typeof Canvas>

const Preview: React.FC<PreviewProps> = ({ bg, light, withSource, children, ...props }) => (
  <CanvasWrap bg={bg} light={light}>
    <Canvas {...props} withSource={(withSource || SourceState.NONE) as any}>
      {children}
    </Canvas>
  </CanvasWrap>
);

export default Preview

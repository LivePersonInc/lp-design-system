import React, { useCallback, useState } from 'react';
import { styled, keyframes } from '@storybook/theming';

import * as animation from '@liveperson-design-system/tokens/build/js/animation';

const growAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const AnimationItem = styled.div`
  width: 100%;
  color: #fff;
  background: ${({ theme }) => theme.barSelectedColor};
  border-radius: ${({ theme }) => `${theme.appBorderRadius}px`};
  padding: ${({ theme }) => `${theme.layoutMargin}px`};
  animation: ${animation.variables.animationSetting};
  animation-name: ${({ animationName }) => animationName};
  animation-duration: ${({ duration }) => (animation.variables.durations[duration] || duration)};
  animation-timing-function: ${({ timingFunction }) => (animation.variables.timingFunctions[timingFunction] || timingFunction)};
  animation-fill-mode: initial;
  cursor: pointer;
`;

const AnimationExample = ({ animationName: animationNameProp, children, ...props }) => {
  const [animationName, setAnimationName] = useState();

  const animationItemClickHandler = useCallback(() => {
    setAnimationName(undefined);

    setTimeout(() => {
      setAnimationName(
        animation.keyframes[animationNameProp] ? keyframes(animation.keyframes[animationNameProp]) : growAnimation
      );
    });
  }, []);

  return (
    <AnimationItem {...props} animationName={animationName} onClick={animationItemClickHandler}>
      {children}
    </AnimationItem>
  );
}

export default AnimationExample

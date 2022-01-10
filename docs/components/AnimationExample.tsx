import React, { useCallback, useState } from 'react';
import { styled, keyframes } from '@storybook/theming';

import * as animation from '@lpds/tokens/build/js/animation';

const growAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export type AnimationItemProps = {
  animationName?: string | ReturnType<typeof keyframes>
  duration?: animation.Durations | string
  timingFunction?: animation.TimingFunctions | string
}

const AnimationItem = styled.div<AnimationItemProps>`
  width: 100%;
  color: #fff;
  background: ${({ theme }) => theme.barSelectedColor};
  border-radius: ${({ theme }) => `${theme.appBorderRadius}px`};
  padding: ${({ theme }) => `${theme.layoutMargin}px`};
  animation: ${animation.variables.animationSetting};
  animation-name: ${({ animationName }) => animationName};
  animation-duration: ${({ duration }) => (animation.variables.durations[duration as animation.Durations] || duration)};
  animation-timing-function: ${({ timingFunction }) => (
    animation.variables.timingFunctions[timingFunction as animation.TimingFunctions] || timingFunction
  )};
  animation-fill-mode: initial;
  cursor: pointer;
`;

export type AnimationExampleProps = Omit<AnimationItemProps, 'animationName'> & {
  animationName?: animation.Animations
}

const AnimationExample: React.FC<AnimationExampleProps> = ({ animationName: animationNameProp, children, ...props }) => {
  const [animationName, setAnimationName] = useState<AnimationItemProps['animationName']>();

  const animationItemClickHandler = useCallback(() => {
    setAnimationName(undefined);

    setTimeout(() => {
      setAnimationName(
        animation.keyframes[animationNameProp as animation.Animations]
          ? keyframes(JSON.stringify(animation.keyframes[animationNameProp as animation.Animations]))
          : growAnimation
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

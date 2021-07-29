import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from "styled-components";
import { Button } from '../components';
import { ButtonSize, ButtonVariant } from '../components/button/enum';

interface BackgroundDivProps {
  backgroundColor: string;
}

const StyledBackground = styled.div<BackgroundDivProps>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({backgroundColor}: BackgroundDivProps) => backgroundColor};
`;

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    // backgroundColor: {
    //   options: ["#0C1836", "#E5ECFE"],
    //   control: { type: "inline-radio" },
    //   defaultValue: "#0C1836"
    // },
    size: {
      options: ["large", "medium", "small"],
      control: { type: "inline-radio" },
      defaultValue: 'medium',
    },
    theme: {
      options: ["dark", "light"],
      control: { type: "inline-radio" },
      defaultValue: 'dark'
    },
    variant: {
      options: [
        "primary",
        "secondary",
        "tertiary",
        "destructive",
        "ghost",
        "inline",
      ],
      control: { type: "inline-radio" },
      // table: {
      //   disable: true,
      // },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  console.log('args', args);

  // const { backgroundColor, ...rest} = args;
  return (
    // <StyledBackground backgroundColor={backgroundColor}>
      <Button {...args} />
    // </StyledBackground>
  )

};

export const ButtonStory = Template.bind({});
ButtonStory.args = {
  variant: ButtonVariant.PRIMARY,
  size: ButtonSize.MEDIUM,
  label: 'Button',
  disabled: false,
};

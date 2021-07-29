import "./button.css";
import React from 'react';
import {color, borderRadius, shadow, typography} from '../../styles';
import styled from 'styled-components';
import { themeResolver } from "../common";
import { Theme } from '../enum';
import { ButtonSize, ButtonVariant } from "./enum";

export interface IButtonProps {
  variant?: ButtonVariant;
  theme?: Theme;
  size?: ButtonSize;
  label?: string | React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const StyledButton = styled.button<IButtonProps>`
  cursor: pointer;
  font-style: normal;
  display: inline-block;
  border: ${({variant, theme}) => {
    if (variant === ButtonVariant.TERTIARY) {
      return `2px solid ${themeResolver(theme, color["periwinkle-dark-l"], color["ocean-lighter"])}`;
    }
    return '0px';
  }};
  font-family: ${typography.fontFace.roboto};
  font-weight: ${({variant}) => {
    if (variant === ButtonVariant.INLINE) {
      return typography.fontWeight.normal;
    }
    return typography.fontWeight.bold;
  }};
  font-size: ${typography.fontSize.button};
  line-height: ${typography.lineHeight.button};
  border-radius: ${borderRadius.s};
  padding: ${({size}) => {
    switch (size) {
      case ButtonSize.SMALL:
        return '4px 8px';
      case ButtonSize.MEDIUM:
        return '8px 12px';
      case ButtonSize.LARGE:
        return '12px 16px';
      default:
        throw new Error(`button size not supported: ${size}`);
    }
  }};
  height: ${({size}) => {
    switch (size) {
      case ButtonSize.SMALL:
        return '24px';
      case ButtonSize.MEDIUM:
        return '32px';
      case ButtonSize.LARGE:
        return '40px';
      default:
        throw new Error(`button size not supported: ${size}`);
    }
  }};
  background-color: ${({variant, theme}) => {
    switch (variant) {
      case ButtonVariant.PRIMARY:
        return themeResolver(theme, color["blue-default-l"], color["blue-default-d"]);
      case ButtonVariant.SECONDARY:
        return themeResolver(theme, color["ocean-lighter"], color["ocean-white"]);
      case ButtonVariant.DESTRUCTIVE:
        return themeResolver(theme, color["red-default-l"], color["red-default-d"]);
      case ButtonVariant.TERTIARY:
      case ButtonVariant.GHOST:
      case ButtonVariant.INLINE:
        return 'transparent';
      default: 
        throw new Error(`unsupported button variant: ${variant}`);
    }
  }};
  color: ${({variant, theme}) => {
    switch (variant) {
      case ButtonVariant.PRIMARY:
        return themeResolver(theme, color["white"], color["white"]);
      case ButtonVariant.SECONDARY:
        return themeResolver(theme, color["ocean-darker"], color["periwinkle-darker-d"]);
      case ButtonVariant.DESTRUCTIVE:
        return color.white;
      case ButtonVariant.TERTIARY:
        return themeResolver(theme, color['periwinkle-default-l'], color["ocean-lightest"]);
      case ButtonVariant.GHOST:
      case ButtonVariant.INLINE:
        return themeResolver(theme, color["blue-dark-l"], color["cyan-default-d"])
      default: 
        throw new Error(`unsupported button variant: ${variant}`);
  }}};
  text-shadow: ${({variant, theme}) => {
    switch (variant) {
      case ButtonVariant.PRIMARY:
        return shadow["light-text-m"];
      case ButtonVariant.SECONDARY:
        return shadow["dark-text-m"];
      case ButtonVariant.DESTRUCTIVE:
        return shadow["light-text-m"];
      case ButtonVariant.TERTIARY:
        return themeResolver(theme, shadow["dark-text-m"], shadow["light-text-m"]);
      case ButtonVariant.GHOST:
      case ButtonVariant.INLINE:
        return 'none';
      default: 
        throw new Error(`unsupported button variant: ${variant}`);
  }}};
  &:hover {
    background-color: ${({variant, theme}) => {
      switch (variant) {
        case ButtonVariant.PRIMARY:
          return themeResolver(theme, color["blue-dark-l"], color["blue-dark-d"]);
        case ButtonVariant.SECONDARY:
          return themeResolver(theme, color["navy-dark-l"], color["navy-lighter-d"]);
        case ButtonVariant.DESTRUCTIVE:
          return themeResolver(theme, color["red-dark-l"], color["red-dark-d"]);
        case ButtonVariant.GHOST:
          return themeResolver(theme, color["transparent-dark-l"], color["transparent-light-d"]);
        case ButtonVariant.INLINE:
        case ButtonVariant.TERTIARY:
          return 'transparent';
        default: 
          throw new Error(`unsupported button variant: ${variant}`);
    }}
  }
`;


/**
 * Styled Button
 */
const Button: React.FC<IButtonProps> = ({
  variant = ButtonVariant.PRIMARY,
  theme = Theme.DARK,
  size = ButtonSize.MEDIUM,
  label = '',
  onClick = () => {},
  disabled = false
}) => {
  return (
    <StyledButton
      type="button"
      variant={variant}
      theme={theme}
      size={size}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </StyledButton>
  )
};

export default Button;
import React, { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';
import {
  SpaceProps,
  ColorProps,
  FontFamilyProps,
  FontSizeProps,
  FontStyleProps,
  FontWeightProps,
  SizeProps,
  FlexboxProps,
  BorderProps,
  ZIndexProps,
  BoxShadowProps,
  ButtonStyleProps,
  space,
  color,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  size,
  flexbox,
  border,
  zIndex,
  boxShadow,
  buttonStyle
} from 'styled-system';

export type BaseButtonProps = SpaceProps &
  ColorProps &
  FontFamilyProps &
  FontSizeProps &
  FontStyleProps &
  FontWeightProps &
  SizeProps &
  FlexboxProps &
  BorderProps &
  ZIndexProps &
  BoxShadowProps &
  ButtonStyleProps;

export type ButtonProps = Omit<BaseButtonProps, 'color'> &
  HTMLAttributes<HTMLButtonElement>;

export const StyledButton = styled.button<ButtonProps>`
  ${space}
  ${color}
  ${fontFamily}
  ${fontSize}
  ${fontStyle}
  ${fontWeight}
  ${size}
  ${flexbox}
  ${border}
  ${zIndex}
  ${boxShadow}
  ${buttonStyle}
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledButton {...props} ref={ref}>
        {children}
      </StyledButton>
    );
  }
);

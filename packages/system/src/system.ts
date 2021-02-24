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
  ResponsiveValue,
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
  buttonStyle,
  compose
} from 'styled-system';
import { SystemStyleObject } from '@styled-system/css';

export type BaseProps = SpaceProps &
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
  ButtonStyleProps & {
    css?: ResponsiveValue<SystemStyleObject>;
  };

export const baseStyle = compose(
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
);

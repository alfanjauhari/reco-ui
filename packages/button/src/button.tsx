import React, { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import css from '@styled-system/css';
import { baseStyle, BaseProps, SystemStyleObject } from '@reco-ui/system';

export type ButtonProps = BaseProps & HTMLAttributes<HTMLButtonElement>;

export const StyledButton = styled('button')<ButtonProps>(
  baseStyle,
  (props) => css(props.css),
  variant<SystemStyleObject>({
    variants: {
      primary: {
        color: 'white',
        bg: 'blue.600',
        borderRadius: 4,
        px: 6,
        py: 2,
        '&:hover': {
          backgroundColor: 'blue.700',
          transition: '.5s'
        }
      },
      secondary: {
        color: 'white',
        bg: 'gray.600',
        borderRadius: 4,
        px: 6,
        py: 2,
        '&:hover': {
          backgroundColor: 'gray.700',
          transition: '.5s'
        }
      },
      success: {
        color: 'white',
        bg: 'green.600',
        borderRadius: 4,
        px: 6,
        py: 2,
        '&:hover': {
          backgroundColor: 'green.700',
          transition: '.5s'
        }
      },
      danger: {
        color: 'white',
        bg: 'red.600',
        borderRadius: 4,
        px: 6,
        py: 2,
        '&:hover': {
          backgroundColor: 'red.700',
          transition: '.5s'
        }
      },
      warning: {
        color: 'white',
        bg: 'yellow.500',
        borderRadius: 4,
        px: 6,
        py: 2,
        '&:hover': {
          backgroundColor: 'yellow.600',
          transition: '.5s'
        }
      }
    }
  })
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledButton {...props} ref={ref}>
        {children}
      </StyledButton>
    );
  }
);

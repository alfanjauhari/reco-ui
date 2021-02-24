import React from 'react';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from '../src/button';

export default {
  title: 'Button',
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'danger', 'warning']
      }
    }
  }
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Example = Template.bind({});
Example.args = {
  variant: 'primary',
  children: 'Hello World'
};

import { Button, ButtonProps } from "../src/button";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "Button",
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Button Primary",
  px: 4,
  py: 2,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Button Secondary",
  px: 4,
  py: 2,
};

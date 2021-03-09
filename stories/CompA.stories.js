import React from 'react';

import CompA from '@monorollup/comp-a';

export default {
  title: 'Section1/CompA',
  component: CompA
};

const Template = (args) => <CompA {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};
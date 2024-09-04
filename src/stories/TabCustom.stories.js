// src/components/TabCustomRandom/TabCustomRandom.stories.jsx
import React from 'react';
import TabCustomRandom from '../components/Tabs/TabCustomRandom';

export default {
  title: 'Components/TabCustomRandom',
  component: TabCustomRandom,
};

const Template = (args) => <TabCustomRandom {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Tab',
  value: 0,
  variant: 'default',
};

export const Fill = Template.bind({});
Fill.args = {
  label: 'Fill Tab',
  value: 1,
  variant: 'fill',
};

export const Pill = Template.bind({});
Pill.args = {
  label: 'Pill Tab',
  value: 2,
  variant: 'pill',
  size: 'M',
};

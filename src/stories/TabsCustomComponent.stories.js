// src/components/TabsComponent/TabsComponent.stories.jsx
import React, { useState } from 'react';
import { TabsCustomComponent } from '../components/Tabs/TabsCustomComponent';
import { TabCustomComponent } from '../components/Tabs/TabCustomComponent';

export default {
  title: 'Components/TabsComponent',
  component: TabsCustomComponent,
};

const Template = (args) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <TabsCustomComponent {...args} value={value} onChange={handleChange}>
      <TabCustomComponent label="Tab Item One" value={0} variant="default" />
      <TabCustomComponent label="Tab Item Two" value={1} variant="default" />
      <TabCustomComponent label="Tab Item Three" value={2} variant="default" disabled/>
    </TabsCustomComponent>

    <TabsCustomComponent {...args} value={value} onChange={handleChange} >
      <TabCustomComponent label="Tab Item One" value={0} variant="fill" />
      <TabCustomComponent label="Tab Item Two" value={1} variant="fill" />
      <TabCustomComponent label="Tab Item Three" value={2} variant="fill" disabled/>
    </TabsCustomComponent>

    <TabsCustomComponent {...args} value={value} onChange={handleChange} size='M'>
      <TabCustomComponent label="Tab Item One" value={0} variant="pill" />
      <TabCustomComponent label="Tab Item Two" value={1} variant="pill" />
      <TabCustomComponent label="Tab Item Three" value={2} variant="pill" disabled/>
    </TabsCustomComponent>
    </div>
    
  );
};

export const Default = Template.bind({});
Default.args = {
  type: 'default',
};

export const Fill = Template.bind({});
Fill.args = {
  type: 'fill',
};

export const Pill = Template.bind({});
Pill.args = {
  type: 'pill',
  size: 'M',
};

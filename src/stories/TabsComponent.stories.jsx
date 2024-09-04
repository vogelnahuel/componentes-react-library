// src/components/TabsComponent/TabsComponent.stories.jsx
import React, { useState } from 'react';
import { TabsComponent } from '../components/Tabs/TabsComponent';
import { TabCustomRandom } from '../components/Tabs/TabCustomRandom';

export default {
  title: 'Components/TabsComponent',
  component: TabsComponent,
};

const Template = (args) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <TabsComponent {...args} value={value} onChange={handleChange} type='default'>
      <TabCustomRandom label="Tab Item One" value={0} variant="default" />
      <TabCustomRandom label="Tab Item Two" value={1} variant="default" />
      <TabCustomRandom label="Tab Item Three" value={2} variant="default" />
    </TabsComponent>

    <TabsComponent {...args} value={value} onChange={handleChange} type='fill'>
      <TabCustomRandom label="Tab Item One" value={0} variant="fill" />
      <TabCustomRandom label="Tab Item Two" value={1} variant="fill" />
      <TabCustomRandom label="Tab Item Three" value={2} variant="fill" />
    </TabsComponent>

    <TabsComponent {...args} value={value} onChange={handleChange} type='pill' size='M'>
      <TabCustomRandom label="Tab Item One" value={0} variant="pill" />
      <TabCustomRandom label="Tab Item Two" value={1} variant="pill" />
      <TabCustomRandom label="Tab Item Three" value={2} variant="pill" />
    </TabsComponent>
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

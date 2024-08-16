// components/TabBar.tsx

import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface TabBarProps {
  onChange: (event: React.ChangeEvent<{}>, value: number) => void;
}


const TabBar: React.FC<TabBarProps> = ({ onChange }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    onChange(event, newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} >
      <Tab label="Account Age" />
      <Tab label="Account Mix" />
      <Tab label="Enquiries" />
    </Tabs>
  );
};

export default TabBar;

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} >
      <Box sx={{ borderBottom: 1 , borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab label="All" {...a11yProps(0)}   sx={{color: "#FFFFFF"}}/>
          <Tab label="Rock" {...a11yProps(1)}  sx={{color: "#FFFFFF"}}/>
          <Tab label="Pop" {...a11yProps(2)}   sx={{color: "#FFFFFF"}}/>
          <Tab label="Jazz" {...a11yProps(3)}  sx={{color: "#FFFFFF"}}/>
          <Tab label="Blues" {...a11yProps(4)} sx={{color: "#FFFFFF"}}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      All
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      Rock
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Pop
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      Jazz
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
      Blues
      </CustomTabPanel>
    </Box>
  );
}

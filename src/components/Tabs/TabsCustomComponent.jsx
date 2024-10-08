import React from 'react';
import { Tabs, styled } from '@mui/material';
import PropTypes from 'prop-types';

const CustomTabsDefault = styled(Tabs)(({  }) => ({
  '&.MuiTabs-root': {
    minHeight: '40px',
    height: '40px',
    maxHeight: '60px',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const CustomTabsFill = styled(Tabs)(({  }) => ({
  '&.MuiTabs-root': {
    minHeight: '40px',
    height: '40px',
    maxHeight: '50px',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const CustomTabsPill = styled(Tabs)(({ size }) => {

  let height = '60px';
  if (size === 'M') height = '78px';
  else if (size === 'XS') height = '43px';
  return {
    fontFamily: '"Open Sans", sans-serif',
   '&.MuiTabs-root': {
      maxHeight: height,
      height: height,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F8F8F8',
      padding: '5px',
      borderRadius: '25px',
    },
    '& .MuiTabs-indicator': {
      display: 'none',
    },
  };
});

export const TabsCustomComponent = ({ value, onChange, children, size, type }) => {
  // Iterar sobre los children y clonar cada uno agregando la prop size
  const childrenWithSize = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { size });
    }
    return child;
  });

  if (type === 'fill') {
    return (
      <CustomTabsFill value={value} onChange={onChange}>
        {childrenWithSize}
      </CustomTabsFill>
    );
  } else if (type === 'pill') {
    return (
      <CustomTabsPill value={value} onChange={onChange}>
        {childrenWithSize}
      </CustomTabsPill>
    );
  }
  return (
    <CustomTabsDefault value={value} onChange={onChange}>
      {childrenWithSize}
    </CustomTabsDefault>
  )
};

TabsCustomComponent.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['M', 'SM', 'XS']),
  type: PropTypes.oneOf(['default', 'fill', 'pill']),
};

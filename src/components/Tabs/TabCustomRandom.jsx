import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Tab, styled } from '@mui/material';

const CustomTabDefault = styled(Tab)(({ theme }) => ({
    '&.MuiTab-root': {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: '14px',
      fontWeight: 400,
      textTransform: 'none',
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
      paddingTop: '0px',
      paddingBottom: '0px',
      minHeight: '40px',
      height: '40px',
      '&:focus': {
        outline: 'none',
      },
      '&.Mui-selected': {
        color: theme.palette.primary.main,
      },
      '&:hover': {
        color: theme.palette.grey[700],
      },
      '&.Mui-disabled': {
        color: '#B1B3BB',
        opacity: 0.5,
      },
    },
  }));
  
  const CustomTabFill = styled(Tab)(({ theme }) => ({
    '&.MuiTab-root': {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: '14px',
      fontWeight: 400,
      textTransform: 'none',
      maxHeight: '40px',
      borderTopLeftRadius: '28px',
      borderTopRightRadius: '28px',
      margin: '1px',
      '&:focus': {
        outline: 'none',
      },
      '&.Mui-selected': {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
      },
      '&:hover': {
        backgroundColor: '#EBF4FF',
        color: '#000E1F',
      },
      '&.Mui-disabled': {
        backgroundColor: '#EDF1F3',
        color: '#B1B3BB',
      },
    },
  }));
  
  const CustomTabPill = styled(Tab)(({ size }) => {
    let height = '50px';
    if (size === 'M') height = '60px';
    else if (size === 'XS') height = '40px';
  
    return {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: '14px',
      fontWeight: 400,
      textTransform: 'none',
      minHeight: '38px',
      height,
      margin: '1px',
      backgroundColor: '#F8F8F8',
      borderRadius: '68px',
      '&:focus': {
        outline: 'none',
      },
      '&.Mui-selected': {
        backgroundColor: '#002855',
        color: 'white',
      },
      '&:hover': {
        backgroundColor: 'white',
        color: '#000E1F',
      },
      '&.Mui-disabled': {
        backgroundColor: '#F8F8F8',
        color: '#B1B3BB',
        opacity: 0.5,
      },
    };
  });

const TabCustomRandom = ({ size = 'M', variant, ...props }) => {
    const { label, disabled } = props;

    const [isSelected, setIsSelected] = useState(false);
    const tabRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (tabRef.current) {
        setIsSelected(tabRef.current.classList.contains('Mui-selected'));
      }
    }, [tabRef.current?.classList.contains('Mui-selected')]);
  
    const labelItem = label && label.length > 10 ? label.substring(0, 10) + '...' : label;
    const iconColor = disabled
      ? '#B1B3BB'
      : isSelected && variant === 'fill'
      ? 'white'
      : isSelected && variant === 'default'
      ? '#0072CE'
      : '#000E1F';

    if (variant === 'pill') {
        return <CustomTabPill {...props} ref={tabRef} size={size} label={labelItem} />;
      } else if (variant === 'fill') {
        return <CustomTabFill {...props} ref={tabRef} icon={<PersonIcon color={iconColor} />} iconPosition='start' label={labelItem} />;
      }
      return <CustomTabDefault {...props} ref={tabRef} icon={<PersonIcon color={iconColor} />} iconPosition='start' label={labelItem} />;
};

const PersonIcon = ({ color = '#000000', width = 20, height = 21 }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 16.3333C15 14.4923 12.7614 12.9999 10 12.9999C7.23858 12.9999 5 14.4923 5 16.3333M10 10.4999C8.15905 10.4999 6.66667 9.00753 6.66667 7.16659C6.66667 5.32564 8.15905 3.83325 10 3.83325C11.8409 3.83325 13.3333 5.32564 13.3333 7.16659C13.3333 9.00753 11.8409 10.4999 10 10.4999Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  PersonIcon.propTypes = {
    color: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  };

TabCustomRandom.propTypes = {
  size: PropTypes.oneOf(['M', 'SM', 'XS']),
  variant: PropTypes.oneOf(['default', 'fill', 'pill']).isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  value: PropTypes.number.isRequired,
};



export default TabCustomRandom;



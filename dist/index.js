'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var material = require('@mui/material');

const Requirements = () => {
  return /*#__PURE__*/React.createElement("div", null, "Hello world");
};

// src/components/TabsComponent/TabsComponent.jsx
const CustomTabsDefault = material.styled(material.Tabs)(({}) => ({
  '&.MuiTabs-root': {
    minHeight: '40px',
    height: '40px',
    maxHeight: '60px',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));
const CustomTabsFill = material.styled(material.Tabs)(({}) => ({
  '&.MuiTabs-root': {
    minHeight: '40px',
    height: '40px',
    maxHeight: '50px',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));
const CustomTabsPill = material.styled(material.Tabs)(({
  size
}) => {
  let height = '60px';
  if (size === 'M') height = '78px';else if (size === 'XS') height = '43px';
  return {
    fontFamily: '"Open Sans", sans-serif',
    '&.MuiTabs-root': {
      maxHeight: height,
      height: height,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F8F8F8',
      padding: '5px',
      borderRadius: '25px'
    },
    '& .MuiTabs-indicator': {
      display: 'none'
    }
  };
});
const TabsComponent = ({
  value,
  onChange,
  children,
  size,
  type
}) => {
  const childrenWithSize = React.Children.map(children, child => {
    if ( /*#__PURE__*/React.isValidElement(child)) {
      return /*#__PURE__*/React.cloneElement(child, {
        size
      });
    }
    return child;
  });
  if (type === 'fill') {
    return /*#__PURE__*/React.createElement(CustomTabsFill, {
      value: value,
      onChange: onChange
    }, childrenWithSize);
  } else if (type === 'pill') {
    return /*#__PURE__*/React.createElement(CustomTabsPill, {
      value: value,
      onChange: onChange
    }, childrenWithSize);
  }
  return /*#__PURE__*/React.createElement(CustomTabsDefault, {
    value: value,
    onChange: onChange
  }, childrenWithSize);
};
TabsComponent.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['M', 'SM', 'XS']),
  type: PropTypes.oneOf(['default', 'fill', 'pill']).isRequired
};

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

const CustomTabDefault = material.styled(material.Tab)(({
  theme
}) => ({
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
      outline: 'none'
    },
    '&.Mui-selected': {
      color: theme.palette.primary.main
    },
    '&:hover': {
      color: theme.palette.grey[700]
    },
    '&.Mui-disabled': {
      color: '#B1B3BB',
      opacity: 0.5
    }
  }
}));
const CustomTabFill = material.styled(material.Tab)(({
  theme
}) => ({
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
      outline: 'none'
    },
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: 'white'
    },
    '&:hover': {
      backgroundColor: '#EBF4FF',
      color: '#000E1F'
    },
    '&.Mui-disabled': {
      backgroundColor: '#EDF1F3',
      color: '#B1B3BB'
    }
  }
}));
const CustomTabPill = material.styled(material.Tab)(({
  size
}) => {
  let height = '50px';
  if (size === 'M') height = '60px';else if (size === 'XS') height = '40px';
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
      outline: 'none'
    },
    '&.Mui-selected': {
      backgroundColor: '#002855',
      color: 'white'
    },
    '&:hover': {
      backgroundColor: 'white',
      color: '#000E1F'
    },
    '&.Mui-disabled': {
      backgroundColor: '#F8F8F8',
      color: '#B1B3BB',
      opacity: 0.5
    }
  };
});
const TabCustomRandom = ({
  size = 'M',
  variant,
  ...props
}) => {
  const {
    label,
    disabled
  } = props;
  const [isSelected, setIsSelected] = React.useState(false);
  const tabRef = React.useRef < HTMLDivElement > null;
  React.useEffect(() => {
    if (tabRef.current) {
      setIsSelected(tabRef.current.classList.contains('Mui-selected'));
    }
  }, [tabRef.current?.classList.contains('Mui-selected')]);
  const labelItem = label && label.length > 10 ? label.substring(0, 10) + '...' : label;
  const iconColor = disabled ? '#B1B3BB' : isSelected && variant === 'fill' ? 'white' : isSelected && variant === 'default' ? '#0072CE' : '#000E1F';
  if (variant === 'pill') {
    return /*#__PURE__*/React.createElement(CustomTabPill, _extends({}, props, {
      ref: tabRef,
      size: size,
      label: labelItem
    }));
  } else if (variant === 'fill') {
    return /*#__PURE__*/React.createElement(CustomTabFill, _extends({}, props, {
      ref: tabRef,
      icon: /*#__PURE__*/React.createElement(PersonIcon, {
        color: iconColor
      }),
      iconPosition: "start",
      label: labelItem
    }));
  }
  return /*#__PURE__*/React.createElement(CustomTabDefault, _extends({}, props, {
    ref: tabRef,
    icon: /*#__PURE__*/React.createElement(PersonIcon, {
      color: iconColor
    }),
    iconPosition: "start",
    label: labelItem
  }));
};
const PersonIcon = ({
  color = '#000000',
  width = 20,
  height = 21
}) => /*#__PURE__*/React.createElement("svg", {
  width: width,
  height: height,
  viewBox: "0 0 20 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  d: "M15 16.3333C15 14.4923 12.7614 12.9999 10 12.9999C7.23858 12.9999 5 14.4923 5 16.3333M10 10.4999C8.15905 10.4999 6.66667 9.00753 6.66667 7.16659C6.66667 5.32564 8.15905 3.83325 10 3.83325C11.8409 3.83325 13.3333 5.32564 13.3333 7.16659C13.3333 9.00753 11.8409 10.4999 10 10.4999Z",
  stroke: color,
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
PersonIcon.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};
TabCustomRandom.propTypes = {
  size: PropTypes.oneOf(['M', 'SM', 'XS']),
  variant: PropTypes.oneOf(['default', 'fill', 'pill']).isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  value: PropTypes.number.isRequired
};

exports.Requirements = Requirements;
exports.TabCustomRandom = TabCustomRandom;
exports.TabsComponent = TabsComponent;

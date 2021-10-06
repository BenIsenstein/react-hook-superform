function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from 'react';
import { Input, FlexSection, EyeIcon, EyeSlashIcon } from '../resources'; // you can declare an object of 'wrapperProps' for the outside FlexSection.
// all other props are passed to the Input element.

const ToggleVisibleInput = props => {
  const [inputTextVisible, setInputTextVisible] = useState(props.startVisible || false);

  const toggleInputTextVisible = () => setInputTextVisible(!inputTextVisible);

  return /*#__PURE__*/React.createElement(FlexSection, _extends({
    fullWidth: true
  }, props.wrapperProps), /*#__PURE__*/React.createElement(Input, _extends({
    type: !inputTextVisible ? "password" : "text"
  }, props.register(props.name, props.registerOptions), props)), !inputTextVisible ? /*#__PURE__*/React.createElement(EyeIcon, {
    onClick: toggleInputTextVisible
  }) : /*#__PURE__*/React.createElement(EyeSlashIcon, {
    onClick: toggleInputTextVisible
  }));
};

export { ToggleVisibleInput };
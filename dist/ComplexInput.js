function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Label, Textarea, Input, FlexSection, Error } from './resources';
import Skeleton from 'react-loading-skeleton';

const ComplexInput = ({
  name,
  errors,
  register,
  isCustomComponent,
  forwardErrors,
  type,
  wrapperProps,
  labelProps,
  ...props
}) => {
  const isCheckbox = type === 'checkbox';
  const isNumber = type === 'number'; // ensuring the wheel behaviour is disabled on number inputs
  // const registerMethods = !isCustomComponent && register && register(name, !isCheckbox && props.registerOptions) // only apply registerOptions if it isn't a checkbox. 
  // const numberRegisterMethods = !isCustomComponent && register && {
  //   ...registerMethods,
  //   ref: elem => {
  //     elem?.addEventListener("wheel", event => event.preventDefault(), {passive: false})
  //     registerMethods?.ref(elem)
  //   }
  // }

  return /*#__PURE__*/React.createElement(FlexSection, _extends({
    key: props.key,
    gridColumn: wrapperProps?.gridColumn || "1/-1" // gridColumn: "1/-1" unless specified otherwise
    ,
    fullWidth: !wrapperProps?.noFullWidth // fullWidth unless specified otherwise
    ,
    column: !wrapperProps?.noColumn // column unless specified otherwise

  }, isCheckbox ? {
    alignCenter: true
  } : {
    alignStart: true
  }, wrapperProps), props.isAddMode || props.areDetailsLoaded || isCustomComponent ? /*#__PURE__*/React.createElement(React.Fragment, null, !props.labelHidden && (props.isAddMode || props.areDetailsLoaded) &&
  /*#__PURE__*/
  // label can be hidden with labelHidden. 
  React.createElement(Label, _extends({
    htmlFor: name || props.labelText
  }, isCheckbox && {
    margin: '0'
  }, labelProps), props.labelText || name), /*#__PURE__*/React.createElement(Textarea, _extends({
    id: name || props.labelText,
    name: name || props.labelText
  }, !isCustomComponent && register && register(name, {
    shouldUnregister: true,
    ...(isCheckbox ? {} : props.registerOptions)
  }), isCustomComponent && register && {
    register
  }, forwardErrors && errors && {
    errors
  }, type && {
    as: Input,
    type
  }, props)), !forwardErrors && errors && /*#__PURE__*/React.createElement(Error, null, errors[name]?.message)) : /*#__PURE__*/React.createElement(Skeleton, {
    height: 20,
    width: 400
  }));
};

export { ComplexInput };
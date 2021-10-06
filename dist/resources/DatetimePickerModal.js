function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect } from "react";
import { Button, CalendarIcon, StyledDateTimePicker } from '.';
import { ConfirmModal } from './ConfirmModal';
import { isValidDate, useConfirmModal } from "../functions";

const DatetimePickerModal = ({
  watch,
  setValue,
  isAddMode,
  recurrenceFrequency,
  isCompleted,
  name,
  ...props
}) => {
  const {
    isConfirmModalShowing,
    toggleConfirmModal
  } = useConfirmModal();
  const currentValue = watch(name);
  const [modalDate, setModalDate] = useState(currentValue || new Date());
  const [mostRecentValidDate, setMostRecentValidDate] = useState(currentValue, new Date()); // - - - - - General housekeeping effects - - - - - - - -
  // tracking the last valid date value

  useEffect(() => setMostRecentValidDate(prevState => isValidDate(currentValue) ? currentValue : prevState), [currentValue]); // ensuring all date inputs have invalid date values handled

  useEffect(() => !isValidDate(currentValue) && setValue(name, mostRecentValidDate), [currentValue]); //make sure the modal always opens with the current value of the input element, if it has a value.

  useEffect(() => {
    console.log(`current value of date "${name}" is ${currentValue}`);
    setModalDate(currentValue || new Date());
  }, [currentValue]);

  const ModalContent = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, props.modalTitle), /*#__PURE__*/React.createElement(StyledDateTimePicker, {
    closeWidgets: true,
    onChange: setModalDate,
    value: modalDate
  }));

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ConfirmModal, {
    isConfirmModalShowing: isConfirmModalShowing,
    hideConfirmModal: toggleConfirmModal,
    modalContentProps: {
      column: true
    },
    modalContent: /*#__PURE__*/React.createElement(ModalContent, null),
    confirmPrompt: "Confirm",
    actionOnConfirm: () => setValue(name, modalDate),
    actionOnCancel: () => {}
  }), /*#__PURE__*/React.createElement(Button, _extends({
    type: "button",
    noBorder: true,
    onClick: toggleConfirmModal
  }, props), props.iconButton ? /*#__PURE__*/React.createElement(CalendarIcon, null) : 'Cancel'));
};

export { DatetimePickerModal };
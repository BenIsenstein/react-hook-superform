import React from 'react';
import ReactDOM from 'react-dom';
import { Button, FlexSection } from '.';
import './ConfirmModal.css'; // const ConfirmModal = ({ isConfirmModalShowing, hideConfirmModal, modalContent, confirmPrompt, actionOnConfirm, ...props }) => {

const ConfirmModal = ({
  isConfirmModalShowing,
  hideConfirmModal,
  modalContent,
  confirmPrompt,
  actionOnConfirm,
  actionOnCancel,
  ...props
}) => {
  // buttonResponse = false
  if (isConfirmModalShowing) {
    return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "modal-confirm-overlay"
    }), /*#__PURE__*/React.createElement("div", {
      className: "modal-confirm-wrapper",
      "aria-modal": true,
      "aria-hidden": true,
      tabIndex: -1,
      role: "dialog"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-confirm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-confirm-header"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "modal-confirm-close-button",
      "data-dismiss": "modal",
      "aria-label": "Close",
      onClick: hideConfirmModal
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7"))), /*#__PURE__*/React.createElement(FlexSection, props.modalContentProps, modalContent), /*#__PURE__*/React.createElement(FlexSection, {
      fullWidth: true,
      justifyCenter: true,
      marginTop1em: true
    }, /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      onClick: () => {
        hideConfirmModal();
        actionOnConfirm();
      }
    }, confirmPrompt), /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      important: true,
      onClick: () => {
        hideConfirmModal();
        actionOnCancel();
      }
    }, "Cancel"))))), document.body);
  } else {
    return null;
  }
};

export { ConfirmModal };
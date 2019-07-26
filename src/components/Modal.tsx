import React from 'react';
import ReactDOM from 'react-dom';

const Modal: React.FunctionComponent = ({ children }) => {
  return ReactDOM.createPortal(children, document.getElementById(
    'modal',
  ) as HTMLElement);
};

export default Modal;

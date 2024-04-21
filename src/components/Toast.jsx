import React, { useEffect } from 'react';

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 7000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const handleMouseOver = () => {
    timer = setTimeout(() => {
      onClose();
    }, 7000);
  };


  return (
    <div className="toast" onMouseOver={handleMouseOver}>
      <div>{message}</div>
      <button className="close-btn" onClick={onClose}>X</button>
    </div>
  );
};

export default Toast;

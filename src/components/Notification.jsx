import React from 'react';
import Toast from './Toast';
import './style.css'

const Notification = ({ messages, onClose }) => {
  return (
    <div className="notification">
      {messages.map((message, index) => (
        <Toast key={index} message={message} onClose={() => onClose(index)} />
      ))}
    </div>
  );
};

export default Notification;

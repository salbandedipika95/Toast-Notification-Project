import React from 'react'
import './style.css'
const Component1 = ({ showToast }) => {
  const handleClick = () => {
    showToast("Default message");
  };
  return (
    <form onSubmit={handleClick}>
     <button type="submit">Show Toast Message</button>
    </form>
  )
}

export default Component1
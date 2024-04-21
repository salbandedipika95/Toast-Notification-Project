import React from 'react'
import './style.css'

const Component2 = ({ showToast }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    showToast(e.target.elements[0].value);
  };
  return (
    <>
     <form onSubmit={handleSubmit}>
      Enter Custom Toast Text<br/>
      <input type="text" placeholder='Enter Here'/><br/>
      <button type='submit'>Show Custom Toast Message</button>
    </form>
    </>
  )
}

export default Component2;
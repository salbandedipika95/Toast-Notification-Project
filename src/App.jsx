import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Component1 from './components/Component1'
import Component3 from './components/Component3'
import Component2 from './components/Component2'
import Notification from './components/Notification'
const App = () => {
  const [toasts, setToasts] = useState([]);

  const showToast = (message) => {
    setToasts([...toasts, message]);
  };

  const closeToast = (index) => {
    const newToasts = [...toasts]; // Create a copy of the array
    newToasts.splice(index, 1); // Remove the element at the specified index
    setToasts(newToasts); // Update the state with the modified array
  };
  return (
    <>
       <Navbar></Navbar>
       <Routes>
        <Route path="/" element={<Component1 showToast={showToast}/>} />
        <Route path="/component1" element={<Component1 showToast={showToast}/>} />
        <Route path="/component2" element={<Component2 showToast={showToast}/>} />
        <Route path="/component3" element={<Component3 showToast={showToast}/>} />
      </Routes>
      <Notification messages={toasts} onClose={closeToast} />
    </>
  )
}

export default App
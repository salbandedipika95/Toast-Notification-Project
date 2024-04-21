import React, { useState } from "react";

const Component3 = ({ showToast }) => {
  const [countries, setCountries] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const seconds = parseInt(e.target.elements[0].value);
    let timer = seconds;
    const interval = setInterval(() => {
      if (timer === 0) {
        clearInterval(interval);
        fetch("https://api.knowmee.co/api/v1/master/get-country-list")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setCountries(data);
          })
          .catch((err)=>{
            console.log(err);
          })
      } else {
        showToast(`Countdown: ${timer}`);
        timer--;
      }
    }, 1000);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        Enter Countdown Time
        <br />
        <input type="number" placeholder="Enter seconds" />
        <br />
        <button type="submit">Start Timer</button>
      </form>
      <div>
        <ul>
          {countries.map((country, index) => (
              <li key={index}>{country.country_name}</li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Component3;

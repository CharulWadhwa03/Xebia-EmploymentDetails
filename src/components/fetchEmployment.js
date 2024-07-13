import React from 'react';

const FetchEmployment = () => {
  const handleContinue = () => {
    const employmentStatus = document.querySelector('.tab button.active').innerText;
    const industry = document.querySelector('.dropdown .dropbtn.selected-option').innerText;
    const occupation = document.querySelector('.dropdown .dropbtn.selected-option').innerText;
    const annualIncome = document.querySelector('.annual-income-options button.active').innerText;

    const formData = {
      employmentStatus,
      industry,
      occupation,
      annualIncome,
    };

    fetch('http://localhost:8000/api/application/employment/create-employment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <button className="continue-btn" onClick={handleContinue}>Continue</button>
  );
};

export default FetchEmployment;

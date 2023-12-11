import '../App.css';

import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    trueFalseQuestion: false,
    checkboxes: {
      option1: false,
      option2: false,
      option3: false,
    },
  });

  const [tripType, setTripType] = useState("oneWay");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'radio' ? (checked ? null : tripType) : (type === 'checkbox' ? checked : value);


    // For radio buttons and checkboxes, handle their checked state
    // const inputValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handleCheckboxChange = (checkboxName) => {
    setFormData((prevData) => ({
      ...prevData,
      checkboxes: {
        ...prevData.checkboxes,
        [checkboxName]: !prevData.checkboxes[checkboxName],
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      {/* <div className="radio-btn-container">
        <div
        //   className="radio-btn"
        //   onClick={() => {
        //     setTripType("oneWay");
        //   }}
        //   onChange={handleInputChange}
        >
          <input
            type="radio"
            value={tripType}
            name="tripType"
            checked={tripType === "oneWay"}
          />
          One-way
        </div>
        <div
          className="radio-btn"
          onClick={() => {
            setTripType("roundTrip");
          }}
        >
          <input
            type="radio"
            value={tripType}
            name="tripType"
            checked={tripType === "roundTrip"}
          />
          Round-Trip
        </div>
        <div
          className="radio-btn"
          onClick={() => {
            setTripType("multiCity");
          }}
        >
          <input
            type="radio"
            value={tripType}
            name="tripType"
            checked={tripType === "multiCity"}
          />
          Multi-City
        </div>
      </div> */}
      <br />
      <label>
        Checkboxes:
        <br />
        <label className='form-option'>
          Option 1
          <input
            type="checkbox"
            name="option1"
            checked={formData.checkboxes.option1}
            onChange={() => handleCheckboxChange('option1')}
          />
        </label>
        <label className='form-option'>
          Option 2
          <input
            type="checkbox"
            name="option2"
            checked={formData.checkboxes.option2}
            onChange={() => handleCheckboxChange('option2')}
          />
        </label >
        <label className='form-option'>
          Option 3
          <input
            type="checkbox"
            name="option3"
            checked={formData.checkboxes.option3}
            onChange={() => handleCheckboxChange('option3')}
          />
        </label>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

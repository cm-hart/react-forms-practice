import React, { useState } from 'react';

const TrueFalseForm = () => {
  // State to manage the true/false value
  const [selectedOption, setSelectedOption] = useState(null);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any action with the true/false value here
    console.log('Form submitted with value:', selectedOption);
  };

  // Function to handle changes in the true/false value
  const handleOptionChange = (event) => {
    // Update the selected option when a radio button is selected
    setSelectedOption(event.target.value === 'true');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Radio buttons for true and false */}
      <label>
        <input
          type="radio"
          value="true"
          checked={selectedOption === true}
          onChange={handleOptionChange}
        />
        True
      </label>

      <label>
        <input
          type="radio"
          value="false"
          checked={selectedOption === false}
          onChange={handleOptionChange}
        />
        False
      </label>

      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default TrueFalseForm;

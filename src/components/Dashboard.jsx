import React, { useState } from 'react';

function RadioButtonForm() {
  const [selectedOption, setSelectedOption] = useState('');
  const [error, setError] = useState('');

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedOption) {
      setError('You must select an option.');
    } else {
      setError('');
      alert('Form submitted!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            type="radio"
            name="option"
            value="option1"
            onChange={handleRadioChange}
          />
          Option 1
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="option"
            value="option2"
            onChange={handleRadioChange}
          />
          Option 2
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="option"
            value="option3"
            onChange={handleRadioChange}
          />
          Option 3
        </label>
      </div>

      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default RadioButtonForm;

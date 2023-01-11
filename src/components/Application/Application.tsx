import { useState } from 'react';

const Application = () => {
  const [inputName, setInputName] = useState('');

  console.log(inputName);

  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <span title='close'>X</span>
      <img src='https://via.placeholder.com/150' alt='a person with a laptop' />
      <p data-testid='custom-element'>Custom HTML element</p>
      <form>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            placeholder='Fullname'
            value='Ron'
            onChange={(e) => {
              setInputName(e.target.value);
            }}
          />
          <label htmlFor='bio'>Bio</label>
          <input type='text' id='bio' />
        </div>
        <div>
          <label htmlFor='job-location'>Job location</label>
          <select id='job-location'>
            <option value=''>Select a country</option>
            <option value='US'>United States</option>
            <option value='GB'>United Kingdom</option>
            <option value='CA'>Canada</option>
            <option value='IN'>India</option>
            <option value='AU'>Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type='checkbox' id='terms' /> I agree to the terms and
            conditions
          </label>
        </div>
        <button type='button'>Submit</button>
      </form>
    </>
  );
};

export default Application;

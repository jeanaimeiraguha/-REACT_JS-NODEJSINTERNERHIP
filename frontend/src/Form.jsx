import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Your Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

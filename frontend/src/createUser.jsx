import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateUser = () => {
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/user/create', { username, address })
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={e => setUsername(e.target.value)} 
        /> <br /><br />
        <input 
          type="text" 
          placeholder="Address" 
          value={address} 
          onChange={e => setAddress(e.target.value)} 
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateUser;

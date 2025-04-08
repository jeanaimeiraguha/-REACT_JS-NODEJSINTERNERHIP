import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Create = () => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");  
  const navigate = useNavigate();  

  const handleSubmit = (event) => {
    event.preventDefault();
   
    const userData = { username: name, email };

    
    axios.post("http://localhost:1000/create", userData)
      .then((res) => {
        console.log(res);
       
        navigate('/');
      })
      .catch((err) => console.error("Error creating user:", err));
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username: 
          <input 
            type="text" 
            value={name} 
            onChange={e => setUsername(e.target.value)} 
          />
        </label>
        <br />
        <label>
          Email: 
          <input 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
          />
        </label>
        <br /> <br />
        <button type="submit">Add new</button>
      </form>
    </div>
  );
}

export default Create;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/user')
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Link to="/create">Add +</Link>  
      <table border={1}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Address</th>
            <th colSpan="2">Action</th>  
          </tr>
        </thead>
        <tbody>
          {
            user.map((data, i) => (
              <tr key={i}>
                <td>{data.username}</td>
                <td>{data.address}</td>  
                <td>
                  <button>Update</button>
                  <button>Delete</button>
                </td>  
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default User;

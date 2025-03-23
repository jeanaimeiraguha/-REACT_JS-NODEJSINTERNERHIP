import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]); // Fixed useState usage

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(res => setData(res.data)) // Fixed reference to response data
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td><button>Edit</button></td>
              <td><button>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;

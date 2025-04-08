import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:1000")
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setError(err);
        setLoading(false);
      });
  }, []);

  const addUser = () => {
    console.log("Add User functionality not implemented yet.");
  };

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div style={{ textAlign: "center", justifyContent: "center" }}>
      <Link to="/create">Add +</Link>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th colSpan={2}>Operations</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
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
}

export default User;
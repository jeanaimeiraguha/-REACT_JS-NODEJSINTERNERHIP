import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();  

  useEffect(() => {
    axios.get("http://localhost:1000")  // Assuming the API fetches the list of users
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching users:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  const addUser = () => {
    navigate('/create');  
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading users: {error.message}</div>;
  }

  return (
    <div style={{ textAlign: "center", justifyContent: "center" }}>
      <button onClick={addUser}>Add User +</button>  {/* Button to add user */}
      <table border={1} style={{ width: '80%', margin: '20px auto' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th colSpan={2}>Operations</th>
          </tr>
        </thead>
        <tbody>
          {users.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.username}</td>
              <td>{data.email}</td>
              <td>
                <Link to={`/update/${data.id}`}>Update</Link>  {/* Correct link path for Update */}
                <Link to={`/delete/${data.id}`}>Delete</Link>  {/* Correct link path for Delete */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;

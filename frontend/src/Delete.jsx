import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Delete = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    axios.get(`http://localhost:1000/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Error fetching user:", err));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:1000/users/${id}`)
      .then(() => {
        console.log("User deleted");
        navigate('/');
      })
      .catch((err) => console.error("Error deleting user:", err));
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Delete User</h2>
      {user ? (
        <div>
          <p>Are you sure you want to delete <strong>{user.username}</strong>?</p>
          <p>Email: {user.email}</p>
          <button onClick={handleDelete}>Yes, Delete</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default Delete;

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:1000/users/${id}`)
      .then((res) => {
        console.log("Fetched user:", res.data); // 👀 DEBUG
        const user = res.data;
        if (user) {
          setUsername(user.username || '');
          setEmail(user.email || '');
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        setError('Failed to load user data.');
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedUser = { username: name, email };

    axios.put(`http://localhost:1000/users/${id}`, updatedUser)
      .then(() => {
        console.log("User updated successfully");
        navigate('/'); // Redirect to the home page after update
      })
      .catch((err) => {
        console.error("Error updating user:", err);
        setError('Failed to update user data.');
      });
  };

  if (loading) return <div>Loading user data...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br /><br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br /><br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;

import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
        console.log("Inside handleLogin")
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
        
      });
      console.log(response.data); // Handle successful login
      if (response.data.message === 'Login successful') {
        // Redirect to a new route (e.g., '/dashboard')
        console.log("Hello: ",username)
        console.log("Password: ",password)
      }
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  )
  ;
};

export default Login;

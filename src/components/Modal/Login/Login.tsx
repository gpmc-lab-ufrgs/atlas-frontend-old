import React, { useState } from 'react';

function Login() {

  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: password })
    };
    fetch('http://127.0.0.1:8000/authentication/login/login/', requestOptions)
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('token', data.token);
        window.location.href = '/dashboard'; // redirect to dashboard page after successful login
      })
      .catch(error => console.error(error));
  };

  return (
  <div style={{width: '100%', height: '100vh', padding: '200px'}}>
  <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <label>
        <input type="username" placeholder="Username" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      </label><br /><br />
      <button type="submit">Log In</button>
    </form>
    </div>
  );
}

export default Login;

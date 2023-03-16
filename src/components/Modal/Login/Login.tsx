import React, { useState } from 'react';
import { ModalContainer } from '@components/Modal';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleClick = () => {
    window.location.href = '/dashboard';
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
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
    fetch('http://127.0.0.1:8001/authentication/login/login/', requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Login failed. Please check your username and password and try again.');
        }
        return response.json();
      })
      .then(data => {
        localStorage.setItem('token', data.token);
        window.location.href = '/dashboard';
      })
      .catch(error => {
        console.error(error);
        setErrorMessage(error.message);
      });
  };

  return (
    <ModalContainer title="Login">
      <form onSubmit={handleSubmit}>

      {errorMessage && (
        <div style={{ color: 'red' }}>{errorMessage}</div>
      )}
        <label>
          <input type="username" placeholder="Username" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </label><br /><br />
        <button type="submit">Log In</button>
      </form>
    </ModalContainer>
  );
}

export default Login;

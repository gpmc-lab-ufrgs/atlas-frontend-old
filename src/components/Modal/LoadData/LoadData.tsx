import React, { useState } from 'react';
import { ModalContainer } from '@components/Modal';

function LoadData(props) {
  const [file, setFile] = useState(null);
  const [table, setTable] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTableChange = (event) => {
    setTable(event.target.value);
  };

  const handleSubmit = (event) => {
  event.preventDefault();
  setErrorMessage('');
  const formData = new FormData();
  formData.append('file', file);
  formData.append('table', table);
  formData.append('username', username);
  formData.append('password', password);
  fetch('http://127.0.0.1:8001/upload/load_data/upload/', {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to log in.');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      alert('File sent to upload. Wait an e-mail with status of upload');
      setFile(null);
      setTable('');
      setUsername('');
      setPassword('');
    })
    .catch(error => setErrorMessage(error.message));
};

  return (
    <ModalContainer title="Load data">
      <h2>Carregue sua planilha para upload</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select a table:
          <select value={table} onChange={handleTableChange}>
            <option value="">Please select a table</option>
            <option value="state">State</option>
            <option value="city">City</option>
            <option value="sensus block">Sensus block</option>
          </select>
        </label><br />
        <br />
        <label>
          Select a file:
          <input type="file"  accept=".xlsx" onChange={handleFileChange} />
        </label>
        <br /><br />
        <h2>Autenticação</h2>

        {errorMessage && (
          <div style={{ color: 'red' }}>{errorMessage}</div>
        )}

        <label>
          <input type="username" placeholder="Username" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </label><br /><br />

        <button type="submit" disabled={!table || !file}>Upload</button>
      </form>
    </ModalContainer>
  );
}

export default LoadData;

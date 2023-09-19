import React, { useState } from 'react';
import { ModalContainer } from '@components/Modal';

function LoadData(props) {
  const [file, setFile] = useState(null);
  const [table, setTable] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [sheetType, setSheetType] = useState('');
  const [uploadMessageVisible, setUploadMessageVisible] = useState(false);


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

  const handleSheetTypeChange = (event) => {
    setSheetType(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage('');
    const formData = new FormData();
    formData.append('file', file);
    formData.append('table', table);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('sheetType', sheetType);
    setUploadMessageVisible(true); // set flag to show message
    fetch('http://127.0.0.1:8000/upload/load_data/upload/', { //http://0.0.0.0:8001/ http://3.92.188.34:8001/upload/load_data/upload/
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed.');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        alert('File sent to upload. An e-mail with status of upload was sent for you.');
        setFile(null);
        setTable('');
        setUsername('');
        setPassword('');
        setSheetType('');
      })
      .catch(error => setErrorMessage(error.message));
  };

  return (
    <ModalContainer title="Load data">
      <h2>Upload spreadsheet</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select the spreadsheet type:
          <select value={sheetType} onChange={handleSheetTypeChange}>
            <option value="">---</option>
            <option value="dictionary">Dictionary spreadsheet</option>
            <option value="data">Data spreadsheet</option>
          </select>
        </label><br />
        <br />
        <label>
          Select a table:
          <select value={table} onChange={handleTableChange}>
             <option value="">---</option>
            <option value="state">State</option>
            <option value="city">City</option>
            <option value="sensus">Census</option>
            <option value="cnaes">cnaes</option>
          </select>
        </label><br />
        <br />
        <label>
          Select a file:
          <input type="file" accept=".xlsx" onChange={handleFileChange} />
        </label>
        <br /><br />
        <h2>Autentication</h2>

        {errorMessage && (
          <div style={{ color: 'red' }}>{errorMessage}</div>
        )}

        <label>
          <input type="username" placeholder="username" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          <input type="password" placeholder="password" value={password} onChange={handlePasswordChange} />
        </label><br />
        <br />
        <button type="submit" disabled={!table || !file}>Upload</button>
      </form>
      {uploadMessageVisible && (
        <div>If everything went well with your login, you will receive an email about the status of your upload.</div>
      )}
    </ModalContainer>
  );
}

export default LoadData;

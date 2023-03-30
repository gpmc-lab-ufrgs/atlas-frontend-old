import React, { useState } from 'react';
import { ModalContainer } from '@components/Modal';

function LoadData(props) {
  const [file, setFile] = useState(null);
  const [table, setTable] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [sheetType, setSheetType] = useState('');

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
    fetch('http://0.0.0.0:8000/upload/load_data/upload/', {
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
      <h2>Carregue sua planilha para upload</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Selecione o tipo de planilha:
          <select value={sheetType} onChange={handleSheetTypeChange}>
            <option value="">---</option>
            <option value="dictionary">Planilha de Dicionário</option>
            <option value="data">Planilha de Dados</option>
          </select>
        </label><br />
        <br />
        <label>
          Selecione uma tabela:
          <select value={table} onChange={handleTableChange}>
             <option value="">---</option>
=            <option value="state">Estado</option>
            <option value="city">Cidade</option>
            <option value="sensus=">Censo</option>
          </select>
        </label><br />
        <br />
        <label>
          Selecione um arquivo:
          <input type="file" accept=".xlsx" onChange={handleFileChange} />
        </label>
        <br /><br />
        <h2>Autenticação</h2>

        {errorMessage && (
          <div style={{ color: 'red' }}>{errorMessage}</div>
        )}

        <label>
          <input type="username" placeholder="Nome de usuário" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          <input type="password" placeholder="Senha" value={password} onChange={handlePasswordChange} />
        </label><br />
        <br />
        <button type="submit" disabled={!table || !file}>Upload</button>
      </form>
    </ModalContainer>
  );
}

export default LoadData;

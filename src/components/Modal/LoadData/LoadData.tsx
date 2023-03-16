import React, { useState } from 'react';
import { ModalContainer } from '@components/Modal';

function LoadData() {
  const [file, setFile] = useState(null);
  const [table, setTable] = useState(''); // add state for table selection

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTableChange = (event) => {
    setTable(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('table', table); // add table data to form data
    fetch('http://127.0.0.1:8000/upload-excel/', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
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
          <input type="file"  accept=".csv" onChange={handleFileChange} />
        </label>
        <br /><br />
        <button type="submit" disabled={!table || !file}>Upload</button>
      </form>
    </ModalContainer>
  );
}

export default LoadData;

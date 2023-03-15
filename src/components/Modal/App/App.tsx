import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('http://127.0.0.1:8000/data/') // Replace this URL with your API endpoint
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div style={{width: '100%', height: '100vh', padding: '100px'}}>
    <h4>Conteúdo da API /data</h4>
      <p>State: {data.state}</p>
      <p>District: {data.district}</p>
      {/* Render the rest of your content */}
    </div>

    //<ul>
    //    {data.map((item) => (
    //      <li key={item.id}>{item.name}</li>
    //    ))}
   //</ul>
  );
}

export default App;

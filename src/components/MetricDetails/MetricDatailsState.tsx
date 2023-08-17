import React, { useState, useEffect } from 'react';
import Bar from './Bar';

const MetricDetails = ({ state, metric }: any) => {
  const [geosesData, setGeosesData] = useState(null);

  useEffect(() => {
  let abortController = new AbortController();
  const cachedData = localStorage.getItem(`geosesData_${state?.properties.CD_UF}_${metric.label}`);

  if (cachedData) {
    setGeosesData(JSON.parse(cachedData));
  } else {
    if (state && state.properties && state.properties.SIGLA_UF) {
      // Abort any ongoing fetch requests
      abortController.abort();
      abortController = new AbortController();
      const signal = abortController.signal;

      fetch(`http://3.92.188.34:8001/data/data_state_dicio/json/?cd_uf=${state.properties.CD_UF}`, { signal })
        .then(response => response.json())
        .then(data => {
          setGeosesData(data);
          localStorage.setItem(`geosesData_${state?.properties.CD_UF}_${metric.label}`, JSON.stringify(data));
        })
        .catch(error => console.log(error));
    }
  }
  // Clean up the AbortController when the effect is cleaned up
  return () => abortController.abort();
}, [state, metric]);


  const renderSingleMetric = () => {
    if (!geosesData) {
      return <div>Loading data...</div>;
    }

    const rawValue = geosesData[state?.properties.CD_UF][metric.label];
    const value = typeof metric.format === 'function' ? metric.format(rawValue) : rawValue;
    const unit = geosesData?.[state?.properties.CD_UF]?.[metric.label]?.unit;

    switch (metric.format) {
      case 'bar':
        return <Bar rawValue={rawValue} metric={metric} id={state.properties.CD_UF} />;
      case 'Float .2':
        if (unit === 'Número') {
          const geosesDataValue2 = geosesData?.[state?.properties.CD_UF]?.[metric.label]?.value;
          const parsedValue2 = parseFloat(geosesDataValue2);
          const displayValue2 = isNaN(parsedValue2) ? '-----' : parsedValue2.toLocaleString('de-DE', { minimumFractionDigits: 3, maximumFractionDigits: 3 });
          return (
            <div key={state?.properties.CD_UF}>
              <data value={geosesDataValue2}>{displayValue2}</data>
            </div>
          );
        }
        if (unit === 'R$') {
          const geosesDataValue2 = geosesData?.[state?.properties.CD_UF]?.[metric.label]?.value;
          const parsedValue2 = parseFloat(geosesDataValue2);
          const displayValue2 = isNaN(parsedValue2) ? '-----' : parsedValue2.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
          return (
            <div key={state?.properties.CD_UF}>
              <data value={geosesDataValue2}>R${displayValue2}</data>
            </div>
          );
        }
        if (unit === 'Salários Mínimos') {
          const geosesDataValue2 = geosesData?.[state?.properties.CD_UF]?.[metric.label]?.value;
          const parsedValue2 = parseFloat(geosesDataValue2);
          const displayValue2 = isNaN(parsedValue2) ? '-----' : parsedValue2.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 1 });
          return (
            <div key={state?.properties.CD_UF}>
              <data value={geosesDataValue2}>{displayValue2} salários mínimos</data>
            </div>
          );
        }
        if (unit === 'Km²') {
          const geosesDataValue2 = geosesData?.[state?.properties.CD_UF]?.[metric.label]?.value;
          const parsedValue2 = parseFloat(geosesDataValue2);
          const formattedValue2 = isNaN(parsedValue2) ? '-----' : parsedValue2.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
          return (
            <div key={state?.properties.CD_UF}>
              <data value={geosesDataValue2}>{formattedValue2} km²</data>
            </div>
          );
        }
        if (unit === 'Hab/km²') {
          const geosesDataValue2 = geosesData?.[state?.properties.CD_UF]?.[metric.label]?.value;
          const parsedValue2 = parseFloat(geosesDataValue2);
          const formattedValue2 = isNaN(parsedValue2) ? '-----' : parsedValue2.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 2 });
          return (
            <div key={state?.properties.CD_UF}>
              <data value={geosesDataValue2}>{formattedValue2} Hab/km²</data>
            </div>
          );
        }
        if (unit === 'Mbps') {
          const geosesDataValue2 = geosesData?.[state?.properties.CD_UF]?.[metric.label]?.value;
          const parsedValue2 = parseFloat(geosesDataValue2);
          const formattedValue2 = isNaN(parsedValue2) ? '-----' : parsedValue2.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 2 });
          return (
            <div key={state?.properties.CD_UF}>
              <data value={geosesDataValue2}>{formattedValue2} Mbps</data>
            </div>
          );
        }
      case 'Float .2 (-1 to +1)':
        return (
          <div key={state.properties.CD_UF}>
            <data value={rawValue} >{parseFloat(geosesData[state?.properties.CD_UF][metric.label].value).toFixed(3)}</data>
          </div>
        );
      case 'Float':
        return (
          <div key={state.properties.CD_UF}>
            <data value={rawValue} >{parseFloat(geosesData[state?.properties.CD_UF][metric.label].value).toFixed(3)}</data>
          </div>
        );

      case 'Int':
      case 'int':
        const geosesDataValue = geosesData?.[state?.properties.CD_UF]?.[metric.label]?.value;
        const parsedValue = parseInt(geosesDataValue);
        const displayValue = isNaN(parsedValue) ? '-----' : parsedValue;
        return (
          <div key={state?.properties.CD_UF}>
            <data value={geosesDataValue}>{displayValue}</data>
          </div>
        );
      case 'String':
        return (
          <div key={state.properties.CD_UF}>
            <data value={rawValue}>{geosesData[state?.properties.CD_UF][metric.label].value}</data>
          </div>
        );

      case 'Progress Bar':
        // Get the value for the progress bar
        const value = geosesData[state?.properties.CD_UF][metric.label].value;

        // Calculate the percentage value of the progress bar
        const percentage = parseFloat(((value / 100) * 100).toFixed(2));

        // Define a style for the progress bar
        const progressBarStyle = {
          width: '100px',
          height: '20px',
          borderRadius: '3px',
          backgroundColor: '#ddd',
          margin: '10px 0'
        };

        // Define a style for the filled part of the progress bar

        const progressBarFilledStyle = {
          width: `${percentage}%`,
          height: '100%',
          borderRadius: '3px',
          backgroundColor: '#87A96B',
          textAlign: 'center',
          color: 'black',
          fontWeight: 'bold',
          lineHeight: '20px'
        };

        return (
          <div key={state.properties.CD_UF}>
            <div style={progressBarStyle}>
              <div style={progressBarFilledStyle}>{value}%</div>
            </div>
          </div>
        );

      case 'Graphic':
        // Get the value for the graphic
        const geosesDataValue2 = geosesData?.[state?.properties.CD_UF]?.[metric.label]?.value;
          const parsedValue2 = parseFloat(geosesDataValue2);
          const displayValue2 = isNaN(parsedValue2) ? '-----' : parsedValue2.toLocaleString('de-DE', { minimumFractionDigits: 3, maximumFractionDigits: 3 });
          return (
            <div key={state?.properties.CD_UF}>
              <data value={geosesDataValue2}>{displayValue2}</data>
            </div>
          );

    return (
      <div key={state.properties.CD_UF}>
        {isNaN(geosesData[state?.properties.CD_UF][metric.label].value) ? (
          <div>-----</div> // Replace with the desired action for NaN value
        ) : (
          <data value={rawValue}>{geosesData[state?.properties.CD_UF][metric.label].value}</data>
        )}
      </div>
    );
  }};

return <div>{renderSingleMetric()}</div>;
};

export default MetricDetails;

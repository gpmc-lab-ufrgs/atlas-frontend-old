import React, { useState, useEffect } from 'react';
import Bar from './Bar';

const MetricDetails = ({ district, metric }: any) => {
  const [geosesData, setGeosesData] = useState(null);

  useEffect(() => {
  let abortController = new AbortController();
  const cachedData = localStorage.getItem(`geosesData_${district?.properties.CD_MUN}_${metric.label}`);

  if (cachedData) {
    setGeosesData(JSON.parse(cachedData));
  } else {
    if (district && district.properties && district.properties.SIGLA_UF) {
      // Abort any ongoing fetch requests
      abortController.abort();
      abortController = new AbortController();
      const signal = abortController.signal;

      fetch(`http://3.92.188.34:8001/data/data_city_dicio/json/?cd_mun=${district.properties.CD_MUN}`, { signal })
        .then(response => response.json())
        .then(data => {
          setGeosesData(data);
          localStorage.setItem(`geosesData_${district?.properties.CD_MUN}_${metric.label}`, JSON.stringify(data));
        })
        .catch(error => console.log(error));
    }
  }
  // Clean up the AbortController when the effect is cleaned up
  return () => abortController.abort();
}, [district, metric]);


  const renderSingleMetric = () => {
    if (!geosesData) {
      return <div>Loading data...</div>;
    }

    const rawValue = geosesData[district?.properties.CD_MUN][metric.label];
    const value = typeof metric.format === 'function' ? metric.format(rawValue) : rawValue;

    switch (metric.format) {
      case 'bar':
        return <Bar rawValue={rawValue} metric={metric} id={district.properties.CD_MUN} />;
      case 'Float .2':
        if (metric.unit === 'Número') {
          const geosesDataValue2 = geosesData?.[district?.properties.CD_MUN]?.[metric.label]?.value;
          const parsedValue2 = parseFloat(geosesDataValue2);
          const displayValue2 = isNaN(parsedValue2) ? '-----' : parsedValue2.toLocaleString('de-DE', { minimumFractionDigits: 3, maximumFractionDigits: 3 });
          return (
            <div key={district?.properties.CD_MUN}>
              <data value={geosesDataValue2}>{displayValue2}</data>
            </div>
          );
        }
      case 'Float .2 (-1 to +1)':
        return (
          <div key={district.properties.CD_MUN}>
            <data value={rawValue} >{parseFloat(geosesData[district?.properties.CD_MUN][metric.label].value).toFixed(3)}</data>
          </div>
        );
      case 'Float':
        return (
          <div key={district.properties.CD_MUN}>
            <data value={rawValue} >{parseFloat(geosesData[district?.properties.CD_MUN][metric.label].value).toFixed(3)}</data>
          </div>
        );

      case 'Int':
        const geosesDataValue = geosesData?.[district?.properties.CD_MUN]?.[metric.label]?.value;
        const parsedValue = parseInt(geosesDataValue);
        const displayValue = isNaN(parsedValue) ? '-----' : parsedValue;
        return (
          <div key={district?.properties.CD_MUN}>
            <data value={geosesDataValue}>{displayValue}</data>
          </div>
        );
      case 'String':
        return (
          <div key={district.properties.CD_MUN}>
            <data value={rawValue}>{geosesData[district?.properties.CD_MUN][metric.label].value}</data>
          </div>
        );

      case 'Progress Bar':
        // Get the value for the progress bar
        const value = geosesData[district?.properties.CD_MUN][metric.label].value;

        // Calculate the percentage value of the progress bar
        const percentage = Math.round((value / 100) * 100);

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
      backgroundColor: 'green',
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bold',
      lineHeight: '20px'
    };

    return (
      <div key={district.properties.CD_MUN}>
        <div style={progressBarStyle}>
          <div style={progressBarFilledStyle}>{value}%</div>
        </div>
      </div>
    );
  default:
    return (
      <div key={district.properties.CD_MUN}>
        <data value={rawValue} >{geosesData[district?.properties.CD_MUN][metric.label].value}</data>
      </div>
    );
}};

return <div>{renderSingleMetric()}</div>;
};

export default MetricDetails;

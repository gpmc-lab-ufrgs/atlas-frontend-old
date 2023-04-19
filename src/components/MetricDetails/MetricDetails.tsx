import React, { useState, useEffect } from 'react';
import Bar from './Bar';

const MetricDetails = ({ district, metric }: any) => {
  const [geosesData, setGeosesData] = useState(null);

  useEffect(() => {
    fetch('http://54.163.63.53:8001/data/data_city_dicio/json/')
      .then(response => response.json())
      .then(data => setGeosesData(data))
      .catch(error => console.log(error));
  }, []);

  const renderSingleMetric = () => {
  if (!geosesData) {
    return <div>Loading data...</div>;
  }

  const rawValue = geosesData[district?.properties.CD_MUN][metric.label];
  const value = typeof metric.format === 'function' ? metric.format(rawValue) : rawValue; //UPDATE

  switch (metric.type) {
    case 'bar':
      return <Bar rawValue={rawValue} metric={metric} id={district.properties.CD_MUN} />;
    default:
      return (
        <div key={district.properties.CD_MUN}>
          <data value={rawValue}>{value}</data>
        </div>
      );
  }
};

  return <div>{renderSingleMetric()}</div>;
};

export default MetricDetails;

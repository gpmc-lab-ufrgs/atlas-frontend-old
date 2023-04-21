import React, { useState, useEffect } from 'react';
import Bar from './Bar';

const MetricDetails = ({ district, metric }: any) => {
  const [geosesData, setGeosesData] = useState(null);

  useEffect(() => {
    if (district && district.properties && district.properties.SIGLA_UF) {
      fetch(`http://localhost:8001/data/data_city_dicio/json/?cd_mun=${district.properties.CD_MUN}`)
        .then(response => response.json())
        .then(data => setGeosesData(data))
        .catch(error => console.log(error));
    }
  }, [district]);

  const renderSingleMetric = () => {
    if (!geosesData) {
      return <div>Loading data...</div>;
    }

    const rawValue = geosesData[district?.properties.CD_MUN][metric.label];
    const value = typeof metric.format === 'function' ? metric.format(rawValue) : rawValue;

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

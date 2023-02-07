import React from 'react';

import Bar from './Bar';
import geosesData from '@data/Data.json';

const MetricDetails = ({ district, metric }: any) => {
  const renderSingleMetric = () => {
    // @ts-ignore
    const rawValue = geosesData[district?.properties.MUNICIPALITY_CODE][metric.label];
    const value = metric.format(rawValue);

    switch (metric.type) {
      case 'bar':
        return <Bar rawValue={rawValue} metric={metric} id={district.properties.MUNICIPALITY_CODE} />;
      default:
        return (
          <div key={district.properties.MUNICIPALITY_CODE}>
            <data value={rawValue}>{value}</data>
          </div>
        );
    }
  };

  return <div>{renderSingleMetric()}</div>;
};

export default MetricDetails;

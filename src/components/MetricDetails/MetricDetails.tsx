import React from 'react';

import Bar from './Bar';
import geosesData from '@data/Data.json';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip as Tooltips } from 'recharts';
import { mochDataGraphics } from '../../data/mock';

const MetricDetails = ({ district, metric }: any) => {
  const renderSingleMetric = () => {
    // @ts-ignore
    const rawValue = geosesData[district?.properties.CD_MUN][metric.label];
    const func = () => {
      console.log('metric.type', metric.type);
      console.log('metric.label', metric.label);
      return rawValue;
    };

    const value = metric.format(rawValue);

    switch (metric.type) {
      case 'bar':
        return <Bar rawValue={rawValue} metric={metric} id={district.properties.CD_MUN} />;
      case 'graphic_line':
        return (
          <div>
            <div key={district.properties.CD_MUN} style={{ position: 'relative', float: 'right', top: '-15px' }}>
              <data value={func()}>{value}</data>
            </div>
            <LineChart
              width={275}
              height={160}
              data={mochDataGraphics[metric.label]}
              margin={{ top: 5, right: 12, bottom: 5, left: -10 }}
            >
              <Line type="monotone" dataKey="dado" stroke="#4A7729" />
              <CartesianGrid stroke="#ccc" strokeDasharray="2 2" />
              <XAxis dataKey="age" />
              <YAxis />
              <Tooltips />
            </LineChart>
          </div>
        );
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

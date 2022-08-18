import React from 'react';
import { render  } from '@testing-library/react';

import { mockData, district, metric, metricBar } from './mockData';
import MetricDetails from '@components/MetricDetails';

jest.mock('../../../data/Data.json', () => (mockData));


describe('MetricDetails component', () => {
  it('should be able to render the MetricDetails component without bar', () => {
    const { getByText } = render(
      <MetricDetails district={district} metric={metric} />,
    );

    const metricValue = getByText('1035544.91');
    expect(metricValue).toBeTruthy();
  });

  it('should be able to render the MetricDetails component with Bar', () => {
    const { getByText } = render(
      <MetricDetails district={district} metric={metricBar} />,
    );

    const metricValue = getByText('33%');
    expect(metricValue).toBeTruthy();
  });
});

import { render, screen } from '@testing-library/react';

import { mockData, district, metric, metricBar } from './mock';
import MetricDetails from '@components/MetricDetails';

jest.mock('@data/Data.json', () => mockData);

describe('MetricDetails component', () => {
  test('should be able to render the MetricDetails component without bar', () => {
    render(<MetricDetails district={district} metric={metric} />);

    screen.getByText('1035544.91');
  });

  test('should be able to render the MetricDetails component with Bar', () => {
    render(<MetricDetails district={district} metric={metricBar} />);

    screen.getByText('33%');
  });
});

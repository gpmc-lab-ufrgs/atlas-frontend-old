import { render, screen } from '@testing-library/react';

import MetricStateDetails from '../MetricStateDetails';

import { metricBar, metricState, mockData, state } from './mock';

jest.mock('@data/Data.json', () => mockData);

describe('MetricStateDetails component', () => {
  test('should be able to render the MetricStateDetails component without bar', () => {
    render(<MetricStateDetails state={state} metric={metricState} />);

    screen.getByText('0,657');
  });

  test('should be able to render the MetricStateDetails component with Bar', () => {
    render(<MetricStateDetails state={state} metric={metricBar} />);

    screen.getByText('48%');
  });
});

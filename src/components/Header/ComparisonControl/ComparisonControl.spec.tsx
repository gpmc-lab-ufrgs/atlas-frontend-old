import { render, screen } from '@testing-library/react';

import ComparisonControl from './ComparisonControl';

describe('ComparisonControl', () => {
  test('should render the ComparisonControl component with not comparisonType', () => {
    render(<ComparisonControl comparisonType="" setComparison={() => {}} />);

    screen.getByText('Table');
    screen.getByText('Grid');
  });

  test('should render the ComparisonControl component with grid comparisonType', () => {
    render(<ComparisonControl comparisonType="grid" setComparison={() => {}} />);

    screen.getByText('Table');
    screen.getByText('Grid');
  });

  test('should render the ComparisonControl component with table comparisonType', () => {
    render(<ComparisonControl comparisonType="table" setComparison={() => {}} />);

    screen.getByText('Table');
    screen.getByText('Grid');
  });

  test('should render the ComparisonControl component with the comparisonType table the comparison with the string "São Paulo"', () => {
    render(
      <ComparisonControl
        comparisonType="table"
        setComparison={() => {
          'São Paulo';
        }}
      />,
    );

    screen.getByText('Table');
    screen.findAllByAltText('São Paulo');
  });
});

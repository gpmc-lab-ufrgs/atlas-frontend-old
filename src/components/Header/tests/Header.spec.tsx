import { render, screen } from '@testing-library/react';

import * as SidebarContext from '@context/sidebarContext';

import Header from '@components/Header';

describe('Header', () => {
  test('should be able to render the Header component', () => {
    render(<Header isComparisonModeOn={false} comparisonType="table" setComparisonType={() => {}} />);

    screen.getByPlaceholderText('Pesquise por regiões');
    screen.getByText('Brasil');
    screen.getByTestId('MenuIcon');
  });

  test('should not be able to render the Header with a wrong comparisonType', () => {
    render(<Header isComparisonModeOn={false} comparisonType="wrongComparisonType" setComparisonType={() => {}} />);

    expect(screen.queryByPlaceholderText('Pesquise por regiões')).toBeNull();
    expect(screen.queryByText('Brasil')).toBeNull();
    expect(screen.queryByTestId('MenuIcon')).toBeNull();
  });

  test('should be able to render the Header component with table comparisonType', () => {
    render(<Header isComparisonModeOn comparisonType="table" setComparisonType={() => {}} />);

    screen.getByText('Table');
    screen.getByText('Grid');
  });

  test('should be able to render the Header component with grid comparisonType', () => {
    render(<Header isComparisonModeOn comparisonType="grid" setComparisonType={() => {}} />);

    screen.getByText('Table');
    screen.getByText('Grid');
  });

  test('should be able to render the Header with isSidebarOpen as true', () => {
    const contextValues = { isSidebarOpen: true, setIsSidebarOpen: jest.fn().mockReturnValue(true) };
    jest.spyOn(SidebarContext, 'useSidebar').mockImplementation(() => contextValues);

    render(<Header isComparisonModeOn comparisonType="grid" setComparisonType={() => {}} />);
    screen.getAllByText('Table');
  });
});

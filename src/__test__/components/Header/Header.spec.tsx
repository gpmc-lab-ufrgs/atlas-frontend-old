import React from 'react';
import Header from '@components/Header';
import { render } from '@testing-library/react';
import * as SidebarContext from '@store/sidebarContext';

describe('Header component', () => {
  it('should be able to render the Header component', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <Header isComparisonModeOn={false} comparisonType="table" setComparisonType={() => {}} />,
    );

    const regionSearchInput = getByPlaceholderText('Pesquise por regiões');
    const layerRoute = getByText('Brasil');
    const drawerButton = getByTestId('MenuIcon');

    expect(regionSearchInput).toBeTruthy();
    expect(layerRoute).toBeTruthy();
    expect(drawerButton).toBeTruthy();
  });

  it('should not be able to render the Header with a wrong comparisonType', () => {
    const { queryByText, queryByPlaceholderText, queryByTestId } = render(
      <Header isComparisonModeOn={false} comparisonType="wrongComparisonType" setComparisonType={() => {}} />,
    );

    expect(queryByPlaceholderText('Pesquise por regiões')).toBeNull();
    expect(queryByText('Brasil')).toBeNull();
    expect(queryByTestId('MenuIcon')).toBeNull();
  });

  it('should be able to render the Header component with table comparisonType', () => {
    const { getByText } = render(<Header isComparisonModeOn comparisonType="table" setComparisonType={() => {}} />);
    const tableButton = getByText('Table');
    const gridButton = getByText('Grid');

    expect(tableButton).toBeTruthy();
    expect(gridButton).toBeTruthy();
  });

  it('should be able to render the Header component with grid comparisonType', () => {
    const { getByText } = render(<Header isComparisonModeOn comparisonType="grid" setComparisonType={() => {}} />);
    const tableButton = getByText('Table');
    const gridButton = getByText('Grid');

    expect(tableButton).toBeTruthy();
    expect(gridButton).toBeTruthy();
  });

  it('should be able to render the Header with isSidebarOpen as true', () => {
    const contextValues = { isSidebarOpen: true, setIsSidebarOpen: jest.fn().mockReturnValue(true) };
    jest.spyOn(SidebarContext, 'useSidebar').mockImplementation(() => contextValues);

    const { getAllByText } = render(<Header isComparisonModeOn comparisonType="grid" setComparisonType={() => {}} />);
    const tableButton = getAllByText('Table');

    expect(tableButton).toBeTruthy();
  });
});

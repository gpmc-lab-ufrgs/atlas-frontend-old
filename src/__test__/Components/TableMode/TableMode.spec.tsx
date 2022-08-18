import { render } from '@testing-library/react';
import 'jest-styled-components';
import TableMode from '@components/ComparisonMode/TableMode';
import { TablerContainer } from '@components/ComparisonMode/TableMode/styles';
import { Feature } from '@customTypes/feature';
// import { MapPropsSectionType, MapPropsContentType } from '@customTypes/mapProps';
// import districtProps from '@config/district';

// jest.mock('@config/district');

const featureMock: Array<Feature> = [{
  type: "Feature",
  geometry: {
    type: "Polygon",
    coordinates: [[[-52.8662109375, -30.92225448145129]]]
  },
  properties: {
    SIGLA_UF: "RS",
    CD_MUN: 4314605,
    NM_MUN: "Piratini",
    POPULATION: 20743,
    AREA_KM2: 3537.799
  }
}]

// const districtPropsContentMock: MapPropsContentType = {
//   label: "OBSERVED",
//   title: "Número de mortes observadas por causas evitáveis",
//   description: "Número de mortes observadas por causas evitáveis de 5 a 74 anos (2013 a 2017) - GeoSES",
//   format: "",
//   type: "none"
// }

// const districtPropsMock: MapPropsSectionType = {
//   title: "Demográfica (D)",
//   content: [districtPropsContentMock]
// }

describe('Table Mode', () => {
  test('Test title',  () => {
    const { getByText } = render(
      <TableMode comparison = {featureMock} />
    );
    const title = getByText('Demográfica (D)');
    expect(title).toBeTruthy;
  });

  test('Test TablerContainer',  () => {
    const { container: tablerContainer } = render(<TablerContainer />)
    expect(tablerContainer.firstChild).toHaveStyleRule('width', 'calc(100% - 50px)');
    expect(tablerContainer.firstChild).toHaveStyleRule('height', 'fit-content');
    expect(tablerContainer.firstChild).toHaveStyleRule('padding', '0px 25px');
    expect(tablerContainer.firstChild).toHaveStyleRule('padding-top', '70px');
    expect(tablerContainer.firstChild).toHaveStyleRule('padding-bottom', '35px');
  });

  test('Test description ',  () => {
    const { getByText } = render(
      <TableMode comparison = {featureMock} />
    );
    const description = getByText('Dimensão de educação (%) - GeoSES');
    expect(description).toBeTruthy;
  });
});
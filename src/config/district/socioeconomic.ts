import { formatValue } from '@utils/formatValue';
import { MapPropsSectionType } from '@customTypes/map';

const socioeconomicProps: MapPropsSectionType = {
  title: 'Socioeconômico (SE)',
  content: [
    {
      label: 'GeoSES',
      title: 'Índice socioeconômico',
      description: 'Índice socioeconômico proposto, variando de -1 a +1 (das piores às melhores condições) - GeoSES',
      format: (e: any) => formatValue(e, 'float_2'),
      type: 'none',
    },
  ],
};

export default socioeconomicProps;

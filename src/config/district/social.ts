import { formatValue } from '@utils/formatValue';
import { MapPropsSectionType } from '@customTypes/map';

const socialProps: MapPropsSectionType = {
  title: 'Social (S)',
  content: [
    {
      label: 'IDEB_anos_iniciais_do_ensino_fundamental(2015)',
      title: 'IDEB anos iniciais do ensino fundamental',
      description: 'Índice de Desenvolvimento da Educação Básica - Anos iniciais do ensino fundamental (2010) - GeoSES',
      format: (e: any) => formatValue(e, 'float_2'),
      type: 'none',
    },
    {
      label: 'IDEB_anos_finais_do_ensino_fundamental(2015)',
      title: 'IDEB anos finais do ensino fundamental',
      description: 'Índice de Desenvolvimento da Educação Básica - Anos iniciais do ensino médio (2010) - GeoSES',
      format: (e: any) => formatValue(e, 'float_2'),
      type: 'none',
    },
    {
      label: 'Matriculas_no_ensino_fundamental(2020)',
      title: 'Matriculas no ensino fundamental',
      description: 'Matrículas no ensino fundamental (2020) - GeoSES',
      format: (e: any) => formatValue(e, 'float_2'),
      type: 'none',
    },
    {
      label: 'Matriculas_no_ensino_medio(2020)',
      title: 'Matrículas no ensino médio',
      description: 'Matrículas no ensino médio (2020) - GeoSES',
      format: (e: any) => formatValue(e, 'float_2'),
      type: 'none',
    },
    {
      label: 'Docentes_no_ensino_fundamental(2020)',
      title: 'Docentes no ensino fundamental',
      description: 'Docentes no ensino fundamental (2020) - GeoSES',
      format: (e: any) => formatValue(e, 'float_2'),
      type: 'none',
    },
    {
      label: 'Docentes_no_ensino_medio(2020)',
      title: 'Docentes no ensino médio',
      description: 'Docentes no ensino médio (2020) - GeoSES',
      format: (e: any) => formatValue(e, 'float_2'),
      type: 'none',
    },
    {
      label: 'Numero_de_estabelecimentos_de_ensino_fundamental(2020)',
      title: 'Escolas de ensino fundamental',
      description: 'Número de escolas de ensino fundamental (2020) - GeoSES',
      format: (e: any) => formatValue(e, 'float_2'),
      type: 'none',
    },
    {
      label: 'Numero_de_estabelecimentos_de_ensino_medio(2020)',
      title: 'Escolas de ensino médio',
      description: 'Número de escolas de ensino médio (2020) - GeoSES',
      format: (e: any) => formatValue(e, 'float_2'),
      type: 'none',
    },
    {
      label: 'Internacoes_por_diarreia(2016)',
      title: 'Internações por diarréia ',
      description: 'Número de internações por diarréia (2016) - GeoSES',
      format: (e: any) => formatValue(e, 'float_2'),
      type: 'none',
    },
    {
      label: 'Estabelecimentos_de_saude_sus(2009)',
      title: 'Estabelecimentos de saúde (SUS)',
      description: 'Estabelecimentos de saúde do SUS (2009) - GeoSES',
      format: (e: any) => formatValue(e, 'float_2'),
      type: 'none',
    },
    {
      label: 'Esgotamento_sanitario_adequado(2020)',
      title: 'Esgotamento sanitário adequado',
      description:
        '[População total residente nos domicílios particulares permanentes com esgotamento sanitário do tipo rede geral e fossa séptica / População total residente nos domicílios particulares permanentes] x 100 (2020) - GeoSES',
      format: (e: any) => formatValue(e, 'percent'),
      type: 'bar',
    },
    {
      label: 'Arborizacao_de_vias_publicas(2010)',
      title: 'Arborização de vias públicas',
      description:
        '[Domicílios urbanos em face de quadra com arborização/domicílios urbanos totais] x100 (2020) - GeoSES',
      format: (e: any) => formatValue(e, 'percent'),
      type: 'bar',
    },
    {
      label: 'Urbanizacao_de_vias_publicas(2010)',
      title: 'Urbanização de vias públicas',
      description:
        '[Domicílios urbanos em face de quadra com boca de lobo e pavimentação e meio-fio e calçada/domicílios urbanos totais] x 100 (2020) - GeoSES',
      format: (e: any) => formatValue(e, 'percent'),
      type: 'bar',
    },
    {
      label: 'ACIDT(2019)',
      title: 'Óbitos causados por acidentes de trânsito',
      description: 'Óbitos causados por acidentes de trânsito - DATASUS',
      format: (e: any) => formatValue(e, 'none'),
      type: 'none',
    },
    {
      label: 'HOMIC(2019)',
      title: 'Óbitos por homicidio',
      description: 'Óbitos por homicidio - DATASUS',
      format: (e: any) => formatValue(e, 'none'),
      type: 'none',
    },
    {
      label: 'SUICID(2019)',
      title: 'Óbitos por suicídio',
      description: 'Óbitos por suicídio - DATASUS',
      format: (e: any) => formatValue(e, 'none'),
      type: 'none',
    },
  ],
};

export default socialProps;

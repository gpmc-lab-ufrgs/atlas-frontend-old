import { formatValue } from '@utils/formatValue';

export const district = {
  'type': 'Feature',
  'properties': {
      'CD_MUN': '4314506',
      'POPULATION': 12122,
      'NM_MUN': 'Pinheiro Machado',
      'SIGLA_UF': 'RS',
      'AREA_KM2': 2248.221
  },
  'id': '4314506',
  'layer': {
      'id': 'fill-district',
      'type': 'fill',
      'source': 'district',
      'layout': {},
      'paint': {
          'fill-color': {
              'r': 0.2963254521928753,
              'g': 0.5065075961164346,
              'b': 0.16691368748699298,
              'a': 1
          },
          'fill-opacity': 1
      }
  },
  'source': 'district',
  'state': {
      'hover': true
  }
};

export const metric = {
  'label': 'IPTUCH(2019)',
  'title': 'IPTU',
  'description': 'Destina-se ao registro dos valores do tributo que tem como fato gerador a propriedade, o domínio útil ou a posse de bem imóvel por natureza ou por acessão física, como definido na lei civil, localizado na zona urbana do município, fixada em lei municipal. - IPEA',
  'type': 'none',
  format: (value: string) => formatValue(value, 'float_2')
};

export const metricBar = {
  label: 'GeoSESpv',
  title: 'Dimensão da pobreza',
  description: 'Dimensão da pobreza (%) - GeoSES',
  format: (e: any) => formatValue(e, 'percent'),
  type: 'bar',
};

export const mockData = {
  '4314506': {
    'MUNICIPIO': 'Pinheiro Machado',
    'Area_Territorial_km': '2248,221',
    'Populacao_Estimada': 12122,
    'Densidade_demografica': '5,68',
    'Escolarizacao': '97,1',
    'IDHM': '0,661',
    'Mortalidade_infantil': 10,
    'Receitas_realizadas': '48905,90443',
    'Despesas_empenhadas': '45734,59745',
    'PIB_per_capita': '23263,4',
    'Populacao_no_ultimo_censo(2010)': 12780,
    'Salario_medio_mensal_dos_trabalhadores_formais(2019)': '2,3',
    'Pessoal_ocupado(2019)': 1369,
    'Populacao_ocupada(2019)': '11,2',
    'Percentual_da_populacao_com_rendimento_nominal_mensal_per_capita_de_ate_1/2_salario_minimo(2010)': '36,1',
    'IDEB_anos_iniciais_do_ensino_fundamental(2015)': '5,2',
    'IDEB_anos_finais_do_ensino_fundamental(2015)': '4,1',
    'Matriculas_no_ensino_fundamental(2020)': 1307,
    'Matriculas_no_ensino_medio(2020)': 239,
    'Docentes_no_ensino_fundamental(2020)': 95,
    'Docentes_no_ensino_medio(2020)': 12,
    'Numero_de_estabelecimentos_de_ensino_fundamental(2020)': 7,
    'Numero_de_estabelecimentos_de_ensino_medio(2020)': 1,
    'Internacoes_por_diarreia(2016)': '0,8',
    'Estabelecimentos_de_saude_sus(2009)': 9,
    'Esgotamento_sanitario_adequado(2020)': '77,3',
    'Arborizacao_de_vias_publicas(2010)': '41,8',
    'Urbanizacao_de_vias_publicas(2010)': '7,3',
    'OBSERVED': 282,
    'EXPECTED': '257,4320048',
    'RR_PREV': '1,095444',
    'HDI_educ': '0,499',
    'HDI_long': '0,846',
    'HDI_inc': '0,685',
    'GeoSES': '-0,29958',
    'GeoSESed': '65,65934',
    'GeoSESpv': '33,75563',
    'GeoSESdp': '40,43469',
    'GeoSESwl': 0,
    'GeoSESin': '1583,111',
    'GeoSESsg': '0,127948',
    'Frota_2020': 6958,
    'AGENCIAS(2019)': 3,
    'APLICACOES(2019)': '64770,13886',
    'POUPANCA(2019)': '25480,32686',
    'ACIDT(2019)': 4,
    'HOMIC(2019)': 1,
    'SUICID(2019)': 2,
    'IPTUCH(2019)': '1035544,911',
    'DISTCAPU(1998)': '267,8277119',
    'POPM(2010)': 6381,
    'POPF(2010)': 6399
  }
};

// const economicProps: MapPropsSectionType = {
//   title: 'Econômica (E)',
//   content: [
//     {
//       label: 'HDI_inc',
//       title: 'Índice de Desenvolvimento Humano, dimensão de renda',
//       description: 'Índice de Desenvolvimento Humano, dimensão de renda - GeoSES',
//       format: (e: any) => formatValue(e, 'float_3'),
//       type: 'none',
//     },
//     {
//       label: 'GeoSESpv',
//       title: 'Dimensão da pobreza',
//       description: 'Dimensão da pobreza (%) - GeoSES',
//       format: (e: any) => formatValue(e, 'percent'),
//       type: 'bar',
//     },
//     {
//       label: 'GeoSESdp',
//       title: 'Dimensão de privação',
//       description: 'Dimensão de privação (%) - GeoSES',
//       format: (e: any) => formatValue(e, 'percent'),
//       type: 'bar',
//     },
//     {
//       label: 'GeoSESwl',
//       title: 'Dimensão de riqueza (%)',
//       description: 'Dimensão de riqueza (%) - GeoSES',
//       format: (e: any) => formatValue(e, 'percent'),
//       type: 'bar',
//     },
//     {
//       label: 'GeoSESsg',
//       title: 'Dimensão de segregação por raça e renda',
//       description:
//         'Dimensão de segregação por raça e renda (Índice de Concentração nos Extremos, variando de -1 a +1) - GeoSES',
//       format: (e: any) => formatValue(e, 'float_2'),
//       type: 'none',
//     },
//     {
//       label: 'GeoSESin',
//       title: 'Dimensão da renda',
//       description: 'Dimensão da renda (em reais; 1 dólar americano = 1,76 reais em 2010) - GeoSES',
//       format: (e: any) => formatValue(e, 'float_2'),
//       type: 'none',
//     },
//     {
//       label: 'Receitas_realizadas',
//       title: 'Receitas',
//       description: 'Receitas realizadas - R$ (×1000) (2017) - IBGE cidades',
//       format: (e: any) => formatValue(e, 'float_2'),
//       type: 'none',
//     },
//     {
//       label: 'Despesas_empenhadas',
//       title: 'Despesas',
//       description: 'Despesas empenhadas - R$ (×1000) (2017) - IBGE cidades',
//       format: (e: any) => formatValue(e, 'float_2'),
//       type: 'none',
//     },
//     {
//       label: 'PIB_per_capita',
//       title: 'PIB per capita',
//       description: 'PIB per capita - R$ (2018) - IBGE cidades',
//       format: (e: any) => formatValue(e, 'float_2'),
//       type: 'none',
//     },
//     {
//       label: 'Salario_medio_mensal_dos_trabalhadores_formais(2019)',
//       title: 'Salário médio mensal',
//       description: 'Salário médio mensal dos trabalhadores formais (2019) - IBGE cidades',
//       format: (e: any) => formatValue(e, 'float_2'),
//       type: 'none',
//     },
//     {
//       label: 'Pessoal_ocupado(2019)',
//       title: 'Pessoas empregadas',
//       description: 'Número de pessoas empregadas no município (2019) - IBGE cidades',
//       format: (e: any) => formatValue(e, 'float_2'),
//       type: 'none',
//     },
//     {
//       label: 'Populacao_ocupada(2019)',
//       title: 'Percentual da população empregada',
//       description: 'Porcentagem da população empregada (2019) - IBGE cidades',
//       format: (e: any) => formatValue(e, 'percent'),
//       type: 'bar',
//     },
//     {
//       label: 'Percentual_da_populacao_com_rendimento_nominal_mensal_per_capita_de_ate_1/2_salario_minimo(2010)',
//       title: 'Percentual população renda mensal até 1/2 salário mínimo',
//       description:
//         'Percentual da população com rendimento nominal mensal per capita de até 1/2 salário mínimo (2010) - IBGE cidades',
//       format: (e: any) => formatValue(e, 'percent'),
//       type: 'bar',
//     },
//     {
//       label: 'AGENCIAS(2019)',
//       title: 'Número de agências bancárias',
//       description: 'Número de agências bancárias - BCB',
//       format: (e: any) => formatValue(e, 'none'),
//       type: 'none',
//     },
//     {
//       label: 'APLICACOES(2019)',
//       title: 'Aplicações',
//       description: 'Valor corresponde a conta Operações de Crédito - BCB',
//       format: (e: any) => formatValue(e, 'float_2'),
//       type: 'none',
//     },

//     {
//       label: 'POUPANCA(2019)',
//       title: 'Poupança',
//       description: 'Valor corresponde a conta Depósitos de Poupança - BCB',
//       format: (e: any) => formatValue(e, 'float_2'),
//       type: 'none',
//     },
//     {
//       label: 'IPTUCH(2019)',
//       title: 'IPTU',
//       description:
//         'Destina-se ao registro dos valores do tributo que tem como fato gerador a propriedade, o domínio útil ou a posse de bem imóvel por natureza ou por acessão física, como definido na lei civil, localizado na zona urbana do município, fixada em lei municipal. - IPEA',
//       format: (e: any) => formatValue(e, 'float_2'),
//       type: 'none',
//     },
//   ],
// };

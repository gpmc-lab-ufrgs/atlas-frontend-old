import { formatValue } from '@utils/formatValue';
import { MapPropsSectionType } from '@customTypes/map';

const economicProps: MapPropsSectionType = {
  title: 'Econômica (E)',
  content: [
    {
      label: 'HDI_inc',
      title: 'Índice de Desenvolvimento Humano, dimensão de renda',
      description: 'Índice de Desenvolvimento Humano, dimensão de renda - GeoSES',
      format: (e: any) => formatValue(e, 'float_3'),
      type: 'none',
    },
    {
      label: 'GeoSESpv',
      title: 'Dimensão da pobreza',
      description: 'Dimensão da pobreza (%) - GeoSES',
      format: (e: any) => formatValue(e, 'percent'),
      type: 'bar',
    },
    {
      label: 'GeoSESdp',
      title: 'Dimensão de privação',
      description: 'Dimensão de privação (%) - GeoSES',
      format: (e: any) => formatValue(e, 'percent'),
      type: 'bar',
    },
    {
      label: 'GeoSESwl',
      title: 'Dimensão de riqueza (%)',
      description: 'Dimensão de riqueza (%) - GeoSES',
      format: (e: any) => formatValue(e, 'percent'),
      type: 'bar',
    },
    {
      label: 'GeoSESsg',
      title: 'Dimensão de segregação por raça e renda',
      description:
        'Dimensão de segregação por raça e renda (Índice de Concentração nos Extremos, variando de -1 a +1) - GeoSES',
      format: (e: any) => formatValue(e, 'float_2'),
      type: 'none',
    },
    {
      label: 'GeoSESin',
      title: 'Dimensão da renda',
      description: 'Dimensão da renda (em reais; 1 dólar americano = 1,76 reais em 2010) - GeoSES',
      format: (e: any) => formatValue(e, 'float_2'),
      type: 'none',
    },
    {
      label: 'Receitas_realizadas',
      title: 'Receitas',
      description: 'Receitas realizadas - R$ (×1000) (2017) - IBGE cidades',
      format: (e: any) => formatValue(e, 'float_2'),
      type: 'none',
    },
    {
      label: 'Despesas_empenhadas',
      title: 'Despesas',
      description: 'Despesas empenhadas - R$ (×1000) (2017) - IBGE cidades',
      format: (e: any) => formatValue(e, 'float_2'),
      type: 'none',
    },
    {
      label: 'PIB_per_capita',
      title: 'PIB per capita',
      description: 'PIB per capita - R$ (2018) - IBGE cidades',
      format: (e: any) => formatValue(e, 'float_2'),
      type: 'none',
    },
    {
      label: 'Salario_medio_mensal_dos_trabalhadores_formais(2019)',
      title: 'Salário médio mensal',
      description: 'Salário médio mensal dos trabalhadores formais (2019) - IBGE cidades',
      format: (e: any) => formatValue(e, 'float_2'),
      type: 'none',
    },
    {
      label: 'Pessoal_ocupado(2019)',
      title: 'Pessoas empregadas',
      description: 'Número de pessoas empregadas no município (2019) - IBGE cidades',
      format: (e: any) => formatValue(e, 'float_2'),
      type: 'none',
    },
    {
      label: 'Populacao_ocupada(2019)',
      title: 'Percentual da população empregada',
      description: 'Porcentagem da população empregada (2019) - IBGE cidades',
      format: (e: any) => formatValue(e, 'percent'),
      type: 'bar',
    },
    {
      label: 'Percentual_da_populacao_com_rendimento_nominal_mensal_per_capita_de_ate_1/2_salario_minimo(2010)',
      title: 'Percentual população renda mensal até 1/2 salário mínimo',
      description:
        'Percentual da população com rendimento nominal mensal per capita de até 1/2 salário mínimo (2010) - IBGE cidades',
      format: (e: any) => formatValue(e, 'percent'),
      type: 'bar',
    },
    {
      label: 'AGENCIAS(2019)',
      title: 'Número de agências bancárias',
      description: 'Número de agências bancárias - BCB',
      format: (e: any) => formatValue(e, 'none'),
      type: 'none',
    },
    {
      label: 'APLICACOES(2019)',
      title: 'Aplicações',
      description: 'Valor corresponde a conta Operações de Crédito - BCB',
      format: (e: any) => formatValue(e, 'float_2'),
      type: 'none',
    },

    {
      label: 'POUPANCA(2019)',
      title: 'Poupança',
      description: 'Valor corresponde a conta Depósitos de Poupança - BCB',
      format: (e: any) => formatValue(e, 'float_2'),
      type: 'none',
    },
    {
      label: 'IPTUCH(2019)',
      title: 'IPTU',
      description:
        'Destina-se ao registro dos valores do tributo que tem como fato gerador a propriedade, o domínio útil ou a posse de bem imóvel por natureza ou por acessão física, como definido na lei civil, localizado na zona urbana do município, fixada em lei municipal. - IPEA',
      format: (e: any) => formatValue(e, 'float_2'),
      type: 'none',
    },
  ],
};

export default economicProps;

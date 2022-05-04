import { formatValue } from "../utils/formatValue";

export type DistrictContentType = {
  label: string;
  title: string;
  description: string;
  format: any;
  type?: string;
};

export type DistrictSectionType = {
  title: string;
  content: Array<DistrictContentType>;
};

const districtProps: DistrictSectionType[] = [
  {
    title: "Demográfica (D)",
    content: [
      {
        label: "OBSERVED",
        title: "Número de mortes observadas por causas evitáveis",
        description:
          "Número de mortes observadas por causas evitáveis de 5 a 74 anos (2013 a 2017) - GeoSES",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "EXPECTED",
        title: "Número de mortes esperadas",
        description:
          "Número de mortes esperadas para a distribuição da população de acordo com sexo e grupos de labelade - GeoSES",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "RR_PREV",
        title: "Risco relativo de mortalidade por causas evitáveis",
        description:
          "Risco relativo de mortallabelade por causas evitáveis de 5 a 74 anos por padronização indireta por sexo e labelade - GeoSES",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "IDHM",
        title: "Índice de Desenvolvimento Humano (IDH)",
        description:
          "IDHM - Índice de desenvolvimento humano municipal (2010) - IBGE cidades",
        format: (e: any) => formatValue(e, "float_3"),
        type: "none",
      },
      {
        label: "HDI_educ",
        title: "Índice de Desenvolvimento Humano, dimensão educacional",
        description:
          "Índice de Desenvolvimento Humano, dimensão educacional - GeoSES",
        format: (e: any) => formatValue(e, "float_3"),
        type: "none",
      },
      {
        label: "HDI_long",
        title: "Índice de Desenvolvimento Humano, dimensão longevidade",
        description:
          "Índice de Desenvolvimento Humano, dimensão longevidade - GeoSES",
        format: (e: any) => formatValue(e, "float_3"),
        type: "none",
      },
      {
        label: "GeoSESed",
        title: "Dimensão de educação",
        description: "Dimensão de educação (%) - GeoSES",
        format: (e: any) => formatValue(e, "percent"),
        type: "bar",
      },
      {
        label: "Area_Territorial_km",
        title: "Área territorial",
        description: "Área Territorial Brasileira km² (2020) - IBGE cidades",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "Populacao_Estimada",
        title: "População",
        description: "População estimada - pessoas (2021) - IBGE cidades",
        format: (e: any) => formatValue(e, "population"),
        type: "none",
      },
      {
        label: "Densidade_demografica",
        title: "Densidade demográfica",
        description: "Densidade demográfica - hab/km² (2010) - IBGE cidades",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "Escolarizacao",
        title: "Escolarização de 6 a 14 anos",
        description: "Escolarização de 6 a 14 anos - % (2010) - IBGE cidades",
        format: (e: any) => formatValue(e, "percent"),
        type: "bar",
      },
      {
        label: "Mortalidade_infantil",
        title: "Mortalidade infantil",
        description:
          "Mortalidade infantil - óbitos por mil nascidos vivos (2019) - IBGE cidades",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "Populacao_no_ultimo_censo(2010)",
        title: "População",
        description: "População no último censo (2010) - IBGE cidades",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "Frota_2020",
        title: "Frota de veículos",
        description:
          "Frota de automóveis, caminhonetes, camionetas, motocicletas, motonetas e utilitários no ano 2020 - Mobilidados",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "DISTCAPU(1998)",
        title: "Distância à capital estadual para os municípios",
        description:
          "Distância à capital estadual para os municípios da divisão político administrativa vigente em 2000 - IPEA",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "POPM(2010)",
        title: "População Masculina",
        description: "População Masculina - IBGE",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "POPF(2010)",
        title: "População Feminina",
        description: "População Feminina - IBGE",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
    ],
  },
  {
    title: "Econômica (E)",
    content: [
      {
        label: "HDI_inc",
        title: "Índice de Desenvolvimento Humano, dimensão de renda",
        description:
          "Índice de Desenvolvimento Humano, dimensão de renda - GeoSES",
        format: (e: any) => formatValue(e, "float_3"),
        type: "none",
      },
      {
        label: "GeoSESpv",
        title: "Dimensão da pobreza",
        description: "Dimensão da pobreza (%) - GeoSES",
        format: (e: any) => formatValue(e, "percent"),
        type: "bar",
      },
      {
        label: "GeoSESdp",
        title: "Dimensão de privação",
        description: "Dimensão de privação (%) - GeoSES",
        format: (e: any) => formatValue(e, "percent"),
        type: "bar",
      },
      {
        label: "GeoSESwl",
        title: "Dimensão de riqueza (%)",
        description: "Dimensão de riqueza (%) - GeoSES",
        format: (e: any) => formatValue(e, "percent"),
        type: "bar",
      },
      {
        label: "GeoSESsg",
        title: "Dimensão de segregação por raça e renda",
        description:
          "Dimensão de segregação por raça e renda (Índice de Concentração nos Extremos, variando de -1 a +1) - GeoSES",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "GeoSESin",
        title: "Dimensão da renda",
        description:
          "Dimensão da renda (em reais; 1 dólar americano = 1,76 reais em 2010) - GeoSES",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "Receitas_realizadas",
        title: "Receitas",
        description: "Receitas realizadas - R$ (×1000) (2017) - IBGE cidades",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "Despesas_empenhadas",
        title: "Despesas",
        description: "Despesas empenhadas - R$ (×1000) (2017) - IBGE cidades",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "PIB_per_capita",
        title: "PIB per capita",
        description: "PIB per capita - R$ (2018) - IBGE cidades",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "Salario_medio_mensal_dos_trabalhadores_formais(2019)",
        title: "Salário médio mensal",
        description:
          "Salário médio mensal dos trabalhadores formais (2019) - IBGE cidades",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "Pessoal_ocupado(2019)",
        title: "Pessoas empregadas",
        description:
          "Número de pessoas empregadas no município (2019) - IBGE cidades",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "Populacao_ocupada(2019)",
        title: "Percentual da população empregada",
        description: "Porcentagem da população empregada (2019) - IBGE cidades",
        format: (e: any) => formatValue(e, "percent"),
        type: "bar",
      },
      {
        label:
          "Percentual_da_populacao_com_rendimento_nominal_mensal_per_capita_de_ate_1/2_salario_minimo(2010)",
        title: "Percentual população renda mensal até 1/2 salário mínimo",
        description:
          "Percentual da população com rendimento nominal mensal per capita de até 1/2 salário mínimo (2010) - IBGE cidades",
        format: (e: any) => formatValue(e, "percent"),
        type: "bar",
      },

      {
        label: "AGENCIAS(2019)",
        title: "Número de agências bancárias",
        description: "Número de agências bancárias - BCB",
        format: (e: any) => formatValue(e, "none"),
        type: "none",
      },

      {
        label: "APLICACOES(2019)",
        title: "Aplicações",
        description: "Valor corresponde a conta Operações de Crédito - BCB",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },

      {
        label: "POUPANCA(2019)",
        title: "Poupança",
        description: "Valor corresponde a conta Depósitos de Poupança - BCB",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },

      {
        label: "IPTUCH(2019)",
        title: "IPTU",
        description:
          "Destina-se ao registro dos valores do tributo que tem como fato gerador a propriedade, o domínio útil ou a posse de bem imóvel por natureza ou por acessão física, como definido na lei civil, localizado na zona urbana do município, fixada em lei municipal. - IPEA",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
    ],
  },
  {
    title: "Socioeconômico (SE)",
    content: [
      {
        label: "GeoSES",
        title: "Índice socioeconômico",
        description:
          "Índice socioeconômico proposto, variando de -1 a +1 (das piores às melhores condições) - GeoSES",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
    ],
  },
  {
    title: "Social (S)",
    content: [
      {
        label: "IDEB_anos_iniciais_do_ensino_fundamental(2015)",
        title: "IDEB anos iniciais do ensino fundamental",
        description:
          "Índice de Desenvolvimento da Educação Básica - Anos iniciais do ensino fundamental (2010) - GeoSES",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "IDEB_anos_finais_do_ensino_fundamental(2015)",
        title: "IDEB anos finais do ensino fundamental",
        description:
          "Índice de Desenvolvimento da Educação Básica - Anos iniciais do ensino médio (2010) - GeoSES",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "Matriculas_no_ensino_fundamental(2020)",
        title: "Matriculas no ensino fundamental",
        description: "Matrículas no ensino fundamental (2020) - GeoSES",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "Matriculas_no_ensino_medio(2020)",
        title: "Matrículas no ensino médio",
        description: "Matrículas no ensino médio (2020) - GeoSES",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "Docentes_no_ensino_fundamental(2020)",
        title: "Docentes no ensino fundamental",
        description: "Docentes no ensino fundamental (2020) - GeoSES",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "Docentes_no_ensino_medio(2020)",
        title: "Docentes no ensino médio",
        description: "Docentes no ensino médio (2020) - GeoSES",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "Numero_de_estabelecimentos_de_ensino_fundamental(2020)",
        title: "Escolas de ensino fundamental",
        description: "Número de escolas de ensino fundamental (2020) - GeoSES",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "Numero_de_estabelecimentos_de_ensino_medio(2020)",
        title: "Escolas de ensino médio",
        description: "Número de escolas de ensino médio (2020) - GeoSES",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "Internacoes_por_diarreia(2016)",
        title: "Internações por diarréia ",
        description: "Número de internações por diarréia (2016) - GeoSES",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "Estabelecimentos_de_saude_sus(2009)",
        title: "Estabelecimentos de saúde (SUS)",
        description: "Estabelecimentos de saúde do SUS (2009) - GeoSES",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "Esgotamento_sanitario_adequado(2020)",
        title: "Esgotamento sanitário adequado",
        description:
          "[População total residente nos domicílios particulares permanentes com esgotamento sanitário do tipo rede geral e fossa séptica / População total residente nos domicílios particulares permanentes] x 100 (2020) - GeoSES",
        format: (e: any) => formatValue(e, "percent"),
        type: "bar",
      },
      {
        label: "Arborizacao_de_vias_publicas(2010)",
        title: "Arborização de vias públicas",
        description:
          "[Domicílios urbanos em face de quadra com arborização/domicílios urbanos totais] x100 (2020) - GeoSES",
        format: (e: any) => formatValue(e, "percent"),
        type: "bar",
      },
      {
        label: "Urbanizacao_de_vias_publicas(2010)",
        title: "Urbanização de vias públicas",
        description:
          "[Domicílios urbanos em face de quadra com boca de lobo e pavimentação e meio-fio e calçada/domicílios urbanos totais] x 100 (2020) - GeoSES",
        format: (e: any) => formatValue(e, "percent"),
        type: "bar",
      },
      {
        label: "ACIDT(2019)",
        title: "Óbitos causados por acidentes de trânsito",
        description: "Óbitos causados por acidentes de trânsito - DATASUS",
        format: (e: any) => formatValue(e, "none"),
        type: "none",
      },
      {
        label: "HOMIC(2019)",
        title: "Óbitos por homicidio",
        description: "Óbitos por homicidio - DATASUS",
        format: (e: any) => formatValue(e, "none"),
        type: "none",
      },
      {
        label: "SUICID(2019)",
        title: "Óbitos por suicídio",
        description: "Óbitos por suicídio - DATASUS",
        format: (e: any) => formatValue(e, "none"),
        type: "none",
      },
    ],
  },

  // {
  //   title: "Reslabelential Housing Summary",
  //   content: [],
  // },
  // {
  //   title: "Financial Transactions",
  //   content: [],
  // },
  // {
  //   title: "Business Counts",
  //   content: [],
  // },
  // {
  //   title: "Turnover vs. Cost of Sales",
  //   content: [],
  // },
  // {
  //   title: "Business Rental Costs",
  //   content: [],
  // },
];

export default districtProps;

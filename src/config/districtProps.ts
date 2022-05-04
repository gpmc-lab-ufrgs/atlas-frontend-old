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
          "Número de mortes observadas por causas evitáveis de 5 a 74 anos (2013 a 2017)",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "EXPECTED",
        title: "Número de mortes esperadas",
        description:
          "Número de mortes esperadas para a distribuição da população de acordo com sexo e grupos de labelade",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "RR_PREV",
        title: "Risco relativo de mortalidade por causas evitáveis",
        description:
          "Risco relativo de mortallabelade por causas evitáveis de 5 a 74 anos por padronização indireta por sexo e labelade",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      // {
      //   label: "IDHM",
      //   title: "Índice de Desenvolvimento Humano (IDH)",
      //   description: "IDHM - Índice de desenvolvimento humano municipal (2010)",
      //   format: (e: any) => formatValue(e, "float_3"),
      //   type: "none",
      // },
      {
        label: "HDI",
        title: "Índice de Desenvolvimento Humano por município",
        description: "Índice de Desenvolvimento Humano calculado por município",
        format: (e: any) => formatValue(e, "float_3"),
        type: "none",
      },
      {
        label: "HDI_educ",
        title: "Índice de Desenvolvimento Humano, dimensão educacional",
        description: "Índice de Desenvolvimento Humano, dimensão educacional",
        format: (e: any) => formatValue(e, "float_3"),
        type: "none",
      },
      {
        label: "HDI_long",
        title: "Índice de Desenvolvimento Humano, dimensão longevidade",
        description: "Índice de Desenvolvimento Humano, dimensão longevidade",
        format: (e: any) => formatValue(e, "float_3"),
        type: "none",
      },
      {
        label: "GeoSESed",
        title: "Dimensão de educação",
        description: "Dimensão de educação (%)",
        format: (e: any) => formatValue(e, "percent"),
        type: "bar",
      },
      {
        label: "Area_Territorial_km",
        title: "Área territorial",
        description: "Área Territorial Brasileira km² (2020)",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "Populacao_Estimada",
        title: "População",
        description: "População estimada - pessoas (2021)",
        format: (e: any) => formatValue(e, "population"),
        type: "none",
      },
      {
        label: "Densidade_demografica",
        title: "Densidade demográfica",
        description: "Densidade demográfica - hab/km² (2010)",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "Escolarizacao",
        title: "Escolarização de 6 a 14 anos",
        description: "Escolarização de 6 a 14 anos - % (2010)",
        format: (e: any) => formatValue(e, "percent"),
        type: "bar",
      },
      {
        label: "Mortalidade_infantil",
        title: "Mortalidade infantil",
        description:
          "Mortalidade infantil - óbitos por mil nascidos vivos (2019)",
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
        description: "Índice de Desenvolvimento Humano, dimensão de renda",
        format: (e: any) => formatValue(e, "float_3"),
        type: "none",
      },
      {
        label: "GeoSESpv",
        title: "Dimensão da pobreza",
        description: "Dimensão da pobreza (%)",
        format: (e: any) => formatValue(e, "percent"),
        type: "bar",
      },
      {
        label: "GeoSESdp",
        title: "Dimensão de privação",
        description: "Dimensão de privação (%)",
        format: (e: any) => formatValue(e, "percent"),
        type: "bar",
      },
      {
        label: "GeoSESwl",
        title: "Dimensão de riqueza (%)",
        description: "Dimensão de riqueza (%)",
        format: (e: any) => formatValue(e, "percent"),
        type: "bar",
      },
      {
        label: "GeoSESsg",
        title: "Dimensão de segregação por raça e renda",
        description:
          "Dimensão de segregação por raça e renda (Índice de Concentração nos Extremos, variando de -1 a +1)",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "GeoSESin",
        title: "Dimensão da renda",
        description:
          "Dimensão da renda (em reais; 1 dólar americano = 1,76 reais em 2010)",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "Receitas_realizadas",
        title: "Receitas",
        description: "Receitas realizadas - R$ (×1000) (2017)",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "Despesas_empenhadas",
        title: "Despesas",
        description: "Despesas empenhadas - R$ (×1000) (2017)",
        format: (e: any) => formatValue(e, "float_2"),
        type: "none",
      },
      {
        label: "PIB_per_capita",
        title: "PIB per capita",
        description: "PIB per capita - R$ (2018)",
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
          "Índice socioeconômico proposto, variando de -1 a +1 (das piores às melhores condições)",
        format: (e: any) => formatValue(e, "float_2"),
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

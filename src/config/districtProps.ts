import { formatValue } from '../utils/formatValue';

export type DistrictContentType = {
	label: string;
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
		title: 'Demographic Summary',
		content: [
			{
				label: 'OBSERVED',
				description: 'Número de mortes observadas por causas evitáveis de 5 a 74 anos (2013 a 2017)',
				format: (e: any) => formatValue(e, 'none'),
				type: 'none',
			},
			{
				label: 'EXPECTED',
				description: 'Número de mortes esperadas para a distribuição da população de acordo com sexo e grupos de labelade',
				format: (e: any) => formatValue(e, 'none'),
				type: 'none',
			},
			{
				label: 'RR_PREV',
				description: 'Risco relativo de mortallabelade por causas evitáveis de 5 a 74 anos por padronização indireta por sexo e labelade',
				format: (e: any) => formatValue(e, 'none'),
				type: 'none',
			},
			{
				label: 'HDI',
				description: 'Índice de Desenvolvimento Humano calculado por município',
				format: (e: any) => formatValue(e, 'none'),
				type: 'none',
			},
			{
				label: 'HDI_educ',
				description: 'Índice de Desenvolvimento Humano, dimensão educacional',
				format: (e: any) => formatValue(e, 'none'),
				type: 'none',
			},
			{
				label: 'HDI_long',
				description: 'Índice de Desenvolvimento Humano, dimensão da longevlabelade',
				format: (e: any) => formatValue(e, 'none'),
				type: 'none',
			},
			{
				label: 'GeoSESed',
				description: 'Dimensão de educação (%)',
				format: (e: any) => formatValue(e, 'percent'),
				type: 'bar',
			},
			{
				label: 'Area_Territorial_km',
				description: 'Área Territorial Brasileira km² (2020)',
				format: (e: any) => formatValue(e, 'none'),
				type: 'none',
			},
			{
				label: 'Populacao_Estimada',
				description: 'População estimada - pessoas (2021)',
				format: (e: any) => formatValue(e, 'population'),
				type: 'none',
			},
			{
				label: 'Densidade_demografica',
				description: 'Densidade demográfica - hab/km² (2010)',
				format: (e: any) => formatValue(e, 'none'),
				type: 'none',
			},
			{
				label: 'Escolarizacao',
				description: 'Escolarização de 6 a 14 anos - % (2010)',
				format: (e: any) => formatValue(e, 'percent'),
				type: 'bar',
			},
			{
				label: 'IDHM',
				description: 'IDHM - Índice de desenvolvimento humano municipal (2010)',
				format: (e: any) => formatValue(e, 'none'),
				type: 'none',
			},
			{
				label: 'Mortalidade_infantil',
				description: 'Mortalidade infantil - óbitos por mil nascidos vivos (2019)',
				format: (e: any) => formatValue(e, 'none'),
				type: 'none',
			},
		],
	},
	{
		title: 'Economic Summary',
		content: [
			{
				label: '	',
				description: 'Índice de Desenvolvimento Humano, dimensão de renda',
				format: (e: any) => formatValue(e, 'none'),
				type: 'none',
			},
			{
				label: 'GeoSESpv',
				description: 'Dimensão da pobreza (%)',
				format: (e: any) => formatValue(e, 'percent'),
				type: 'bar',
			},
			{
				label: 'GeoSESdp',
				description: 'Dimensão de privação (%)',
				format: (e: any) => formatValue(e, 'percent'),
				type: 'bar',
			},
			{
				label: 'GeoSESwl',
				description: 'Dimensão de riqueza (%)',
				format: (e: any) => formatValue(e, 'percent'),
				type: 'bar',
			},
			{
				label: 'GeoSESsg',
				description: 'Dimensão de segregação por raça e renda (Índice de Concentração nos Extremos, variando de -1 a +1)',
				format: (e: any) => formatValue(e, 'none'),
				type: 'none',
			},
			{
				label: 'GeoSESin',
				description: 'Dimensão da renda (em reais; 1 dólar americano = 1,76 reais em 2010)',
				format: (e: any) => formatValue(e, 'none'),
				type: 'none',
			},
			{
				label: 'Receitas_realizadas',
				description: 'Receitas realizadas - R$ (×1000) (2017)', 
				format: (e: any) => formatValue(e, 'none'),
				type: 'none',
			},
			{
				label: 'Despesas_empenhadas',
				description: 'Despesas empenhadas - R$ (×1000) (2017)', 
				format: (e: any) => formatValue(e, 'none'),
				type: 'none',
			},
			{
				label: 'PIB_per_capita',
				description: 'PIB per capita - R$ (2018)', 
				format: (e: any) => formatValue(e, 'none'),
				type: 'none',
			},
		],
	},
	// {
	//   title: "Growth Summary",
	//   content: [],
	// },
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

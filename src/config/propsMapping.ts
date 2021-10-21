import { formatPopulationNumber } from "../utils/population";

export type propsMappingContentType = {
  id: string;
  label: string;
  format: any;
};

export type propsMappingSectionType = {
  title: string;
  content: Array<propsMappingContentType>;
};

const propsMapping: propsMappingSectionType[] = [
  {
    title: "Demographic Summary",
    content: [
      {
        id: "PERSONS_NUM",
        label: "Population",
        format: (e: any) => formatPopulationNumber(e),
      },
    ],
  },
  {
    title: "Economic Summary",
    content: [],
  },
  {
    title: "Growth Summary",
    content: [],
  },
  {
    title: "Residential Housing Summary",
    content: [],
  },
  {
    title: "Financial Transactions",
    content: [],
  },
  {
    title: "Business Counts",
    content: [],
  },
  {
    title: "Turnover vs. Cost of Sales",
    content: [],
  },
  {
    title: "Business Rental Costs",
    content: [],
  },
];

export default propsMapping;

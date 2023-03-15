export type CollapsibleType = {
  'Locations to Compare': boolean;
  'Demographic Summary': boolean;
  'Economic Summary': boolean;
  'Growth Summary': boolean;
  'Residential Housing Summary': boolean;
  'Financial Transactions': boolean;
  'Business Counts': boolean;
  'Turnover vs. Cost of Sales': boolean;
  'Business Rental Costs': boolean;
};

export type CollapsibleNames = keyof CollapsibleType;

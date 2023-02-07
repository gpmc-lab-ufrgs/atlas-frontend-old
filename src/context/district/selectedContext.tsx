import React, { createContext, useContext, useState } from 'react';

import { District } from '@customTypes/district';

import geojsonRS from '@data/states/RS_Municipios_2020.json';

export interface DistrictActions {
  allDistricts: Array<District>;
  selectedDistrict: District | null;
  setSelectedDistrict: React.Dispatch<React.SetStateAction<any>>;
}

const DEFAULT_VALUE_DISTRICT_ACTIONS: DistrictActions = {
  allDistricts: [],
  selectedDistrict: null,
  setSelectedDistrict: () => {},
};

export const selectedDistrictsContext = createContext<DistrictActions>(DEFAULT_VALUE_DISTRICT_ACTIONS);

export function SelectedDistrictProvider({ children }: any) {
  //@ts-ignore
  const [allDistricts] = useState<District[]>(geojsonRS['features']);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  return (
    <selectedDistrictsContext.Provider
      value={{
        allDistricts,
        selectedDistrict,
        setSelectedDistrict,
      }}
    >
      {children}
    </selectedDistrictsContext.Provider>
  );
}

export function useSelectedDistrict() {
  const context = useContext(selectedDistrictsContext);
  const district = context;
  return district;
}

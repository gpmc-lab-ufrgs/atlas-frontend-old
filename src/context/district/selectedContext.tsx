import React, { createContext, useContext, useState } from 'react';

import { District } from '@customTypes/district';

import geojsonRS from '@data/states/RS_Municipios_2020.json';

import { DEFAULT_VALUE } from '@hook/useFeature';

export interface DistrictActions {
  all: Array<District>;
  selected: District | null;
  setSelected: React.Dispatch<React.SetStateAction<any>>;
}

export const selectedDistrictsContext = createContext<DistrictActions>(DEFAULT_VALUE);

export function SelectedDistrictProvider({ children }: any) {
  //@ts-ignore
  const allDistricts: Array<District> = geojsonRS['features'];

  const [all] = useState(allDistricts);
  const [selected, setSelected] = useState(null);

  return (
    <selectedDistrictsContext.Provider
      value={{
        all,
        selected,
        setSelected,
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

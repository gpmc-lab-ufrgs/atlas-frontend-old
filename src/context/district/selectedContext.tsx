import React, { createContext, useContext, useState, useEffect } from 'react';
import { District } from '@customTypes/district';
import { DEFAULT_VALUE } from '@hook/useFeature';

export interface DistrictActions {
  all: Array<District>;
  selected: District | null;
  setSelected: React.Dispatch<React.SetStateAction<any>>;
}

export const selectedDistrictsContext = createContext<DistrictActions>(DEFAULT_VALUE);

export function SelectedDistrictProvider({ children }: any) {
  const [all, setAll] = useState<Array<District>>([]);
  const [selected, setSelected] = useState<District | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://3.95.16.204:8001/district/geojson');
        const data = await response.json();
        setAll(data.features);
      } catch (error) {
        console.error('Error fetching district data:', error);
      }
    };
    fetchData();
  }, []);

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

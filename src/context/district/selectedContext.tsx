import React, { createContext, useContext, useState } from 'react';

import { District } from '@customTypes/district';

import districtsSHAPE from '@data/states/mergedfile.json'; //arquivo com todos os shapes https://findthatpostcode.uk/tools/merge-geojson
//import geojsonBA from '@data/states/BA_Municipios_2020_018.json';
//import geojsonRS from '@data/states/RS_Municipios_2020_018.json';
//import geojsonAC from '@data/states/AC_Municipios_2020_018.json';
//import geojsonAL from '@data/states/AL_Municipios_2020_018.json';
//import geojsonAM from '@data/states/AM_Municipios_2020_018.json';
//import geojsonAP from '@data/states/AP_Municipios_2020_018.json';
//import geojsonCE from '@data/states/CE_Municipios_2020_018.json';
//import geojsonDF from '@data/states/DF_Municipios_2020_018.json';
//import geojsonES from '@data/states/ES_Municipios_2020_018.json';
//import geojsonGO from '@data/states/GO_Municipios_2020_018.json';
//import geojsonMA from '@data/states/MA_Municipios_2020_018.json';
//import geojsonMG from '@data/states/MG_Municipios_2020_018.json';
//import geojsonMS from '@data/states/MS_Municipios_2020_018.json';
//import geojsonMT from '@data/states/MT_Municipios_2020_018.json';
//import geojsonPA from '@data/states/PA_Municipios_2020_018.json';
//import geojsonPB from '@data/states/PB_Municipios_2020_018.json';
//import geojsonPE from '@data/states/PE_Municipios_2020_018.json';
//import geojsonPI from '@data/states/PI_Municipios_2020_018.json';
//import geojsonPR from '@data/states/PR_Municipios_2020_018.json';
//import geojsonRJ from '@data/states/RJ_Municipios_2020_018.json';
//import geojsonRN from '@data/states/RN_Municipios_2020_018.json';
//import geojsonRR from '@data/states/RR_Municipios_2020_018.json';
//import geojsonSC from '@data/states/SC_Municipios_2020_018.json';
//import geojsonSE from '@data/states/SE_Municipios_2020_018.json';
//import geojsonSP from '@data/states/SP_Municipios_2020_018.json';
//import geojsonTO from '@data/states/TO_Municipios_2020_018.json';
//import geojsonRO from '@data/states/RO_Municipios_2020_018.json';

import { DEFAULT_VALUE } from '@hook/useFeature';

export interface DistrictActions {
  all: Array<District>;
  selected: District | null;
  setSelected: React.Dispatch<React.SetStateAction<any>>;
}

export const selectedDistrictsContext = createContext<DistrictActions>(DEFAULT_VALUE);

export function SelectedDistrictProvider({ children }: any) {
  //@ts-ignore
const allDistricts: Array<District> = []
  .concat(districtsSHAPE['features'])
  //.concat(geojsonBA['features'])
  //.concat(geojsonRS['features'])
  //.concat(geojsonAC['features'])
  //.concat(geojsonAL['features'])
  //.concat(geojsonAM['features'])
  //.concat(geojsonAP['features'])
  //.concat(geojsonCE['features'])
  //.concat(geojsonDF['features'])
  //.concat(geojsonES['features'])
  //.concat(geojsonGO['features'])
  //.concat(geojsonMA['features'])
  //.concat(geojsonMG['features'])
  //.concat(geojsonMS['features'])
  //.concat(geojsonMT['features'])
  //.concat(geojsonPA['features'])
  //.concat(geojsonPB['features'])
  //.concat(geojsonPE['features'])
  //.concat(geojsonPI['features'])
  //.concat(geojsonPR['features'])
  //.concat(geojsonRJ['features'])
  //.concat(geojsonRN['features'])
  //.concat(geojsonRR['features'])
  //.concat(geojsonSC['features'])
  //.concat(geojsonSE['features'])
  //.concat(geojsonSP['features'])
  //.concat(geojsonTO['features']);

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

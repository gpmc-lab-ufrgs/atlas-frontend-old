import { useState, createContext,  useContext } from "react";

type MapLayerType = {
  stops: Array<(number | string)[]>,
}

type MapLayerContext = {  
  mapLayer: MapLayerType
}

const DEFAULT_VALUE = {
  mapLayer: {
    stops: [
      [0, "#ADDC91"],
      [55000, "#6CC24A"],
      [110000, "#509E2F"],
      [215000, "#4A7729"],
    ],
  }
}

const mapLayerContext = createContext<MapLayerContext>(DEFAULT_VALUE);

export function MapLayerProvider({ children }: any) {
  const [mapLayer] = useState(DEFAULT_VALUE.mapLayer) 

  return (
    <mapLayerContext.Provider
      value={{mapLayer}}
    >
      {children}
    </mapLayerContext.Provider>
  );
}

export function useMapLayer() {
  const context = useContext(mapLayerContext);
  const { mapLayer } = context;
  return { mapLayer };
}

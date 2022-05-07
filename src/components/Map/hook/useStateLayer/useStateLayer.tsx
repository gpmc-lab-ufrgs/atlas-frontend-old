import { useEffect, useState } from "react";

import mapboxgl from "mapbox-gl";

import geojsonURL from "@data/BR_UF_2020.json";

import { useSelectedState } from "@store/state/selectedContext";
import { useHighlightedState } from "@store/state/highlightedContext";

import {
  highlightState,
  clickState,
  isStateLayerVisible,
  cleanStateActions,
} from "./stateActions";

import { fitCenter } from "../../actions";
import { stateColors } from "./const";
import { lineOpacity, lineWidth, fillOpacity } from "../../const";
import { isDistrictLayerVisible } from "../useDistrictLayer/districtActions";

const useStateLayer = () => {
  const [stateReference, setStateReference] = useState<mapboxgl.Map>();

  const { setHighlighted: setHighlightedState, highlighted: highlightedState } =
    useHighlightedState();
  const { setSelected: setSelectedState, selected: selectedState } =
    useSelectedState();

  function initLayers(stateReference: mapboxgl.Map) {
    stateReference.on("load", () => {
      stateReference.addSource("state", {
        type: "geojson",
        //@ts-ignore
        data: geojsonURL,
        //@ts-ignore
        promoteId: "CD_UF",
      });

      stateReference.addLayer({
        id: "fill-state",
        type: "fill",
        source: "state",
        layout: {
          visibility: "visible",
        },
        paint: {
          "fill-color": {
            property: "POPULATION",
            stops: stateColors,
          },
          //@ts-ignore
          "fill-opacity": fillOpacity,
        },
      });

      stateReference.addLayer({
        id: "state-borders",
        type: "line",
        source: "state",
        layout: {
          visibility: "visible",
        },
        paint: {
          "line-color": "#ffffff",
          //@ts-ignore
          "line-width": lineWidth,
          //@ts-ignore
          "line-opacity": lineOpacity,
        },
      });
    });
  }

  function initActions(stateReference: mapboxgl.Map) {
    stateReference.on("click", "fill-state", (e: any) => {
      if (e.features.length > 0) {
        setSelectedState(e.features[0]);
      }
    });

    stateReference.on("mousemove", "fill-state", (e: any) => {
      if (e.features.length > 0) {
        setHighlightedState(e.features[0]);
      }
    });

    stateReference.on("mouseleave", "fill-state", () => {
      setHighlightedState(null);
    });
  }

  useEffect(() => {
    if (stateReference) {
      initLayers(stateReference);
      initActions(stateReference);
    }
  }, [stateReference]);

  useEffect(() => {
    if (stateReference) {
      highlightState(highlightedState, stateReference);
    }
  }, [highlightedState]);

  useEffect(() => {
    if (stateReference && selectedState !== null) {
      clickState(selectedState, stateReference);

      isDistrictLayerVisible(stateReference, true);
      isStateLayerVisible(stateReference, false);
    } else if (stateReference) {
      clickState(null, stateReference);

      fitCenter(stateReference);

      isDistrictLayerVisible(stateReference, false);
      isStateLayerVisible(stateReference, true);

      cleanStateActions();
    }
  }, [selectedState, stateReference]);

  return {
    initLayers,
    initActions,
    setStateReference,
    stateReference,
  };
};

export default useStateLayer;

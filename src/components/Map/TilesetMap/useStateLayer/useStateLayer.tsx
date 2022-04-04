import { useEffect, useState } from "react";

import mapboxgl from "mapbox-gl";

import { useSelectedState } from "@store/state/selectedContext";
import { useHighlightedState } from "@store/state/highlightedContext";

import { highlightState, clickState } from "./stateActions";
import {
  lineOpacity,
  lineWidth,
  fillOpacity,
  stateSourceLayer,
} from "../../const";

const useStateLayer = () => {
  const [stateReference, setStateReference] = useState<mapboxgl.Map>();

  const { setHighlighted: setHighlightedState, highlighted: highlightedState } =
    useHighlightedState();
  const { setSelected: setSelectedState, selected: selectedState } =
    useSelectedState();

  function initLayers(stateReference: mapboxgl.Map) {
    stateReference.on("load", () => {
      stateReference.dragRotate.disable();
      stateReference.touchZoomRotate.disableRotation();

      stateReference.addSource("state", {
        type: "vector",
        url: `mapbox://leosgomes.3yhfk2t5`,
      });

      stateReference.addLayer({
        id: "fill-state",
        type: "fill",
        source: "state",
        "source-layer": stateSourceLayer,
        maxzoom: 7,
        layout: {
          visibility: "visible",
        },
        paint: {
          "fill-color": "#6CC24A",
          //@ts-ignore
          "fill-opacity": fillOpacity,
        },
      });

      stateReference.addLayer({
        id: "state-borders",
        type: "line",
        source: "state",
        "source-layer": stateSourceLayer,
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
      highlightState(highlightState, stateReference);
    }
  }, [highlightState]);

  useEffect(() => {
    if (stateReference && selectedState) {
      clickState(selectedState, stateReference);
    }
  }, [selectedState]);

  return {
    setStateReference,
    stateReference,
  };
};

export default useStateLayer;

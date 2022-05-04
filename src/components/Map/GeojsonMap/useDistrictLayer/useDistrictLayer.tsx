import { useEffect, useState } from "react";

import mapboxgl from "mapbox-gl";

import { useHighlightedDistrict } from "@store/district/highlightedContext";
import { useSelectedDistrict } from "@store/district/selectedContext";
import { useSelectedState } from "@store/state/selectedContext";
import { useSidebar } from "@store/sidebarContext";

import useMap from "@hook/useMap";

import {
  highlightDistrict,
  clickDistrict,
  cleanDistrictActions,
} from "./districtActions";

import { fitBounds } from "../actions";
import { munColorsRS } from "../../mapColors";
import { lineOpacity, lineWidth, fillOpacity } from "../../const";

import geojsonGO from "@data/states/RS_Municipios_2020.json";

const useDistrictLayer = () => {
  const [districtReference, setDistrictReference] = useState<mapboxgl.Map>();

  const {
    setHighlighted: setHighlightedDistrict,
    highlighted: highlightedDistrict,
  } = useHighlightedDistrict();
  const { setSelected: setSelectedDistrict, selected: selectedDistrict } =
    useSelectedDistrict();

  const { selected: selectedState, setSelected: setSelectedState } =
    useSelectedState();

  const { setIsSidebarOpen } = useSidebar();
  const { resetMapValues } = useMap();

  function initLayers(districtReference: mapboxgl.Map) {
    districtReference.on("load", () => {
      districtReference.dragRotate.disable();
      districtReference.touchZoomRotate.disableRotation();

      districtReference.addSource("district", {
        type: "geojson",
        //@ts-ignore
        data: geojsonGO,
        //@ts-ignore
        promoteId: "CD_MUN",
      });

      districtReference.addLayer({
        id: "fill-district",
        type: "fill",
        source: "district",
        layout: {
          visibility: "none",
        },
        paint: {
          "fill-color": {
            property: "POPULATION",
            stops: munColorsRS,
          },
          //@ts-ignore
          "fill-opacity": fillOpacity,
        },
      });

      districtReference.addLayer({
        id: "district-borders",
        type: "line",
        source: "district",
        layout: {
          visibility: "none",
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

  function initActions(districtReference: mapboxgl.Map) {
    districtReference.on("click", "fill-district", (e: any) => {
      if (e.features.length > 0) {
        setSelectedDistrict(e.features[0]);
      }
    });

    districtReference.on("mousemove", "fill-district", (e: any) => {
      if (e.features.length > 0) {
        setHighlightedDistrict(e.features[0]);
      }
    });

    districtReference.on("mouseleave", "fill-district", () => {
      setHighlightedDistrict(null);
    });

    districtReference.on("click", (e) => {
      const bbox = [
        [e.point.x - 5, e.point.y - 5],
        [e.point.x + 5, e.point.y + 5],
      ];

      //@ts-ignore
      const clickedDistrict = districtReference.queryRenderedFeatures(bbox, {
        layers: ["fill-district"],
      });

      if (clickedDistrict.length === 0) {
        resetMapValues();
      }
    });
  }

  useEffect(() => {
    if (districtReference) {
      initLayers(districtReference);
      initActions(districtReference);
    }
  }, [districtReference]);

  useEffect(() => {
    if (districtReference) {
      highlightDistrict(highlightedDistrict, districtReference);
    }
  }, [highlightedDistrict]);

  useEffect(() => {
    if (districtReference && selectedDistrict !== null) {
      clickDistrict(selectedDistrict, districtReference);

      fitBounds(selectedDistrict, districtReference);

      setIsSidebarOpen(true);

      if (selectedState === null) {
        setSelectedState({
          properties: { SIGLA_UF: selectedDistrict.properties.SIGLA_UF },
        });
      }
    } else if (districtReference) {
      clickDistrict(null, districtReference);

      cleanDistrictActions();
    }
  }, [selectedDistrict]);

  return { districtReference, setDistrictReference };
};

export default useDistrictLayer;

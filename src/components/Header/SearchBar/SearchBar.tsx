import React, { useState, useEffect } from "react";

import { useDebounce } from "use-debounce";

import { Search, Close } from "@mui/icons-material";

import { useFeatures, Feature } from "@store/contexts/featuresContext";

import useSearch from "./hook/useSearch";

import SearchBarPopper from "./SearchBarPopper";
import { PopperActionsType } from "./SearchBarPopper/SearchBarPopper";

import { getFilteredFeatures, getSortedFeatures } from "./utils";

import * as Styles from "./styles";

const SearchBar: React.FC = () => {
  const { features, selectedFeature } = useFeatures();

  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);

  const [featureSearched, setFeatureSearched] = useState<Feature[]>(
    features.map((feature) => feature)
  );

  const {
    getComboboxProps,
    getToggleButtonProps,
    inputProps,
    inputValue,
    cleanSearchBar,
    setInputValue,
    highlightedIndex,
    getMenuProps,
    getItemProps,
    isOpen,
  } = useSearch(featureSearched);

  const [debouncedValue] = useDebounce(inputValue, 500);

  useEffect(() => {
    setInputValue(selectedFeature?.properties.NM_MUN ?? "");
  }, [selectedFeature]);

  useEffect(() => {
    const query = debouncedValue
      .toLowerCase()
      .replace(/\s+/g, " ")
      .replace(/(^\s+|\s+$)/g, "");

    const hasQuery = query === "";

    if (hasQuery) {
      setFeatureSearched(getSortedFeatures(features));
    } else {
      setFeatureSearched(
        getSortedFeatures(getFilteredFeatures(features, query))
      );
    }
  }, [features]);

  const hasInputValue = inputValue === "";

  const popperActions: PopperActionsType = {
    highlightedIndex,
    isOpen,
    getItemProps,
    getMenuProps,
  };

  return (
    <Styles.SearchBarContainer ref={setReferenceElement}>
      <Styles.SearchBarField {...getComboboxProps()}>
        <input {...inputProps} />

        <Styles.IconWrapper>
          {hasInputValue ? (
            <Search {...getToggleButtonProps()} />
          ) : (
            <Close onClick={() => cleanSearchBar()} />
          )}
        </Styles.IconWrapper>
      </Styles.SearchBarField>

      <SearchBarPopper
        referenceElement={referenceElement}
        featureSearched={featureSearched}
        popperActions={popperActions}
      />
    </Styles.SearchBarContainer>
  );
};

export default SearchBar;

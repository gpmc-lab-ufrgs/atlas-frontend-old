import React, { useState, useEffect } from "react";

import { useDebounce } from "use-debounce";

import { Search, Close } from "@mui/icons-material";

import { useFeatures } from "@store/featuresContext";
import { Feature } from "@types/Feature";

import useSearch from "./hook/useSearch";

import SearchBarPopper from "./SearchBarPopper";
import { PopperActionsType } from "./SearchBarPopper/SearchBarPopper";

import { getFilteredDistricts, getSortedDistricts } from "./utils";

import * as Styles from "./styles";

const SearchBar: React.FC = () => {
  const { district } = useFeatures();

  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);

  const [districtSearched, setDistrictSearched] = useState<Feature[]>(
    district.all.map((district: Feature) => district)
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
  } = useSearch(districtSearched);

  const [debouncedValue] = useDebounce(inputValue, 500);

  useEffect(() => {
    setInputValue(district.selected?.properties.NM_MUN ?? "");
  }, [district, setInputValue]);

  useEffect(() => {
    const query = debouncedValue
      .toLowerCase()
      .replace(/\s+/g, " ")
      .replace(/(^\s+|\s+$)/g, "");

    const hasQuery = query !== "";

    if (hasQuery) {
      setDistrictSearched(
        getSortedDistricts(getFilteredDistricts(district.all, query))
      );
    } else {
      setDistrictSearched(getSortedDistricts(district.all));
    }
  }, [debouncedValue, district]);

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
        districtSearched={districtSearched}
        popperActions={popperActions}
      />
    </Styles.SearchBarContainer>
  );
};

export default SearchBar;

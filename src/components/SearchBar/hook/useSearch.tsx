import { useRef } from "react";

import { useCombobox } from "downshift";

import { useFeatures } from "@store/index";
import { Feature } from "@store/contexts/featuresContext";

const useSearch = (featureSearched: Feature[]) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { setSelectedFeature, selectedFeature, setHighlightedFeature } =
    useFeatures();

  const initialInputValue = selectedFeature?.properties.NM_MUN ?? "";

  const itemToString = (item: any) => (item ? item.name : "");

  const onSelectedItemChange = (item: any) =>
    setSelectedFeature(item.selectedItem);

  const {
    getComboboxProps,
    getInputProps,
    getItemProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    inputValue,
    isOpen,
    openMenu,
    reset,
    selectItem,
    setInputValue,
  } = useCombobox({
    defaultHighlightedIndex: 0,
    initialInputValue,
    items: featureSearched,
    itemToString,
    onSelectedItemChange,

    onInputValueChange: ({ inputValue, type }) => {
      if (
        inputValue === "" &&
        type === useCombobox.stateChangeTypes.InputChange
      ) {
        setSelectedFeature(null);
      } else if (isOpen && inputValue !== "") {
        const definiteMatch = featureSearched.find(
          (item) => item.properties.NM_MUN === inputValue
        );
        if (definiteMatch) {
          selectItem(definiteMatch);
        }
      }
    },

    onHighlightedIndexChange: ({ highlightedIndex, type }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.FunctionSelectItem:
          break;
        default:
          //@ts-ignore
          setHighlightedFeature(featureSearched[highlightedIndex]);
      }
    },

    stateReducer: (state, actionAndChanges) => {
      const { type, changes } = actionAndChanges;
      switch (type) {
        case useCombobox.stateChangeTypes.InputBlur:
          return {
            ...changes,
            //@ts-ignore
            inputValue: initialInputValue,
            selectedItem: state.selectedItem,
          };
        default:
          return changes;
      }
    },
  });

  const cleanSearchBar = () => {
    setHighlightedFeature(null);
    setSelectedFeature(null);
    reset();
  };

  function getSortedFeatures(features: Feature[]) {
    return features.sort((a: any, b: any) =>
      a?.properties.NM_MUN.localeCompare(b?.properties.NM_MUN)
    );
  }

  function getFilteredFeatures(features: Feature[], query: string) {
    return features.filter(
      (item: any) =>
        item?.properties.NM_MUN.toLowerCase().indexOf(query.toLowerCase()) !==
        -1
    );
  }

  const inputProps = {
    ...getInputProps({
      onFocus: () => {
        if (!isOpen) {
          openMenu();
        }
      },
      placeholder: "Search by suburb or region",
      spellCheck: "false",
      ref: inputRef,
    }),
  };

  return {
    getFilteredFeatures,
    getSortedFeatures,
    getComboboxProps,
    getInputProps,
    getItemProps,
    getMenuProps,
    getToggleButtonProps,
    inputProps,
    highlightedIndex,
    inputValue,
    isOpen,
    openMenu,
    reset,
    cleanSearchBar,
    selectItem,
    setInputValue,
  };
};

export default useSearch;

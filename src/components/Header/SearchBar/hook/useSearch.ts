import { useRef } from 'react';
import { useCombobox } from 'downshift';

import { useHighlightedDistrict } from '@context/district/highlightedContext';
import { useSelectedDistrict } from '@context/district/selectedContext';

import useMap from '@hook/useMap';
import { District } from '@customTypes/district';

const useSearch = (featureSearched: District[]) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { selected, setSelected } = useSelectedDistrict();
  const { setHighlighted } = useHighlightedDistrict();
  const { resetMapValues } = useMap();

  const initialInputValue = selected?.properties.NM_MUN ?? '';

  const itemToString = (item: any) => (item ? item.name : '');

  const onSelectedItemChange = (item: any) => setSelected(item.selectedItem);

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

    onInputValueChange: ({ inputValue: input, type }) => {
      if (input === '' && type === useCombobox.stateChangeTypes.InputChange) {
        resetMapValues();
      } else if (isOpen && input !== '') {
        const definiteMatch = featureSearched.find((item) => item.properties.NM_MUN === input);

        if (definiteMatch) {
          selectItem(definiteMatch);
        }
      }
    },

    onHighlightedIndexChange: ({ highlightedIndex: highlightID, type }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.FunctionSelectItem:
          break;
        default:
          //@ts-ignore
          setHighlighted(featureSearched[highlightID]);
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
    resetMapValues();
    reset();
  };

  const isEnglish = window.location.href.includes('/en');

  const inputProps = {
    ...getInputProps({
      onFocus: () => {
        if (!isOpen) {
          openMenu();
        }
      },
      placeholder: isEnglish ? 'Search for cities' : 'Pesquise por cidades',
      spellCheck: 'false',
      ref: inputRef,
    }),
  };

  return {
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

useSearch.defaultProps = {
  cfeatureSearched: [],
};

export default useSearch;

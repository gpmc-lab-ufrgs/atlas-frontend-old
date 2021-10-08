import { useState, useEffect, useMemo, useRef } from 'react'
import { useCombobox } from "downshift"
import { usePopper } from "react-popper"
import { useDebounce } from 'use-debounce';
import { FaSearch, FaTimes } from 'react-icons/fa';

import "./styles.css"
import { useFeatures } from "../../../../store"
import { sameWidthModifier } from "../../../../utils/popper-modifiers"

export const SearchBar = () => {
  const inputRef = useRef(null)

  const { features, setSelectedFeature, selectedFeature, setHighlightedFeature } = useFeatures();
  const [ localData, setLocalData ] = useState(features.map((feature) => feature))
  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
      //@ts-ignore
      modifiers: useMemo(
      () => [sameWidthModifier], []
    ),
    placement: "bottom-start"
  })

  const itemToString = (item : any) => (item ? item.name : '')
  const initialInputValue = selectedFeature?.properties.NAME_DIST ?? ''

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
    items: localData,
    itemToString,
    onInputValueChange: ({ inputValue, type }) => {
      // Clear the selection when the search field is cleared via backspace
        if (inputValue === '' && type === useCombobox.stateChangeTypes.InputChange) {
        // Clear the redux state tracking the selected feature and let this
        // component rerender based on that rather than calling
        // selectItem(null) here
        setSelectedFeature(null)
      // If inputValue changes while the search menu is closed, it's because 
      // another component changed selectedFeature, and that should be
      // reflected in the selectedItem of the search field.
      } else if (isOpen && inputValue) {
        const definiteMatch = localData.find(item => item.properties.NAME_DIST === inputValue)
        if (definiteMatch) {
          selectItem(definiteMatch)
        }
      }
    },

    onSelectedItemChange: (e) => setSelectedFeature(e.selectedItem),

    onHighlightedIndexChange: ({ highlightedIndex, type }) => {
      switch (type) {
        // Ignore the hidden highlight change which occurs when selecting an
        // item and the menu closes.
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.FunctionSelectItem:
          break
        default:
          //@ts-ignore
          setHighlightedFeature(localData[highlightedIndex])
      }
    },

    stateReducer: (state, actionAndChanges) => {
      const {type, changes} = actionAndChanges
      switch (type) {
        // Don't select whatever happened to be highlighted if the user
        // switches to another window.
        case useCombobox.stateChangeTypes.InputBlur:
          return {
            ...changes,
            //@ts-ignore
            inputValue: initialInputValue,
            selectedItem: state.selectedItem,
          }
        default:
          return changes
      }
    },
  })

  // When selectedFeature changes due to another component, make sure the
  // search field reflects that.
  useEffect(() => {
    setInputValue(selectedFeature?.properties.NAME_DIST ?? '')
  }, [selectedFeature, setInputValue])

  const [debouncedValue] = useDebounce(inputValue, 500);

  useEffect(() => {
    const query = debouncedValue.toLowerCase().replace(/\s+/g, ' ').replace(/(^\s+|\s+$)/g, '')
    if (query === '') {
      setLocalData(features.sort((a: any, b: any) => a?.properties.NAME_DIST.localeCompare(b?.properties.NAME_DIST)))
    } else {
      setLocalData(
        features
          .filter((item: any) =>
            item?.properties.NAME_DIST.toLowerCase().indexOf(query.toLowerCase()) !== -1)
          .sort((a: any, b: any) => a?.properties.NAME_DIST.localeCompare(b?.properties.NAME_DIST)),
      )
    }
  }, [features, debouncedValue])

  return (
    //@ts-ignore
    <div className="searchContainer" ref={setReferenceElement}>
      <div {...getComboboxProps()} className="searchField">
        <input {...getInputProps({
          onFocus: () => {
            // Report out the focus event if the parent component cares
            // if (onFocus) {
            //   onFocus()
            // }
            // Open the menu if it's not already so
            if (!isOpen) {
              openMenu()
            }
          },
          placeholder: "Pesquise por distrito",
          spellCheck: "false",
          ref: inputRef,
          })}
        />
        { inputValue === '' ?
          <button
            tabIndex={-1}
            {...getToggleButtonProps()}
            aria-label="toggle menu"
          >
            <FaSearch />
          </button>
          :
          <button
            tabIndex={-1}
            onClick={() => {
              setHighlightedFeature(null)
              setSelectedFeature(null)
              reset()
            }}
            aria-label="clear selection"
          >
            <FaTimes />
          </button>
        }
        <div
          //@ts-ignore
          ref={setPopperElement}
          style={{...styles.popper, zIndex: 1}}
          {...attributes.popper}>
          <ul {...getMenuProps({className: "searchMenu"})} hidden={!isOpen}>
            {isOpen &&
              localData.map((item, index) => (
                <li className={(highlightedIndex === index
                      ? "highlighted"
                      : "")
                  }
                  key={`${item}${index}`}
                  {...getItemProps({ item, index })}
                >
                  <div className="primary">{item.properties.NAME_DIST}</div>
                  <div className="secondary">{item.properties.SIGLA_DIST}</div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
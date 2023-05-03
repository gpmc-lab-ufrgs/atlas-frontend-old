import React, { useState, useMemo } from 'react';
import { usePopper } from 'react-popper';

import { UseComboboxGetItemPropsOptions, GetPropsCommonOptions, UseComboboxGetMenuPropsOptions } from 'downshift';

import { District } from '@customTypes/district';

import { sameWidthModifier } from './popper-modifiers';

import * as Styles from './styles';

export interface PopperActionsType {
  highlightedIndex: number;
  isOpen: boolean;
  getItemProps: (options: UseComboboxGetItemPropsOptions<District>) => any;
  getMenuProps: (
    options?: UseComboboxGetMenuPropsOptions | undefined,
    otherOptions?: GetPropsCommonOptions | undefined,
  ) => any;
}

interface Props {
  referenceElement: HTMLDivElement | null;
  districtSearched: District[];
  popperActions: PopperActionsType;
}

const SearchBarPopper: React.FC<Props> = ({ referenceElement, districtSearched, popperActions }) => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: useMemo(() => [sameWidthModifier], []),
    placement: 'bottom-start',
  });

  return (
    <Styles.PopperContainer ref={setPopperElement} {...attributes.popper} style={{ ...styles.popper }}>
      <Styles.PopperItens {...popperActions.getMenuProps()} hidden={!popperActions.isOpen}>
        {popperActions.isOpen &&
          districtSearched.slice(0, 10).map((item, index) => (
            <Styles.PopperItem
              hasHighlight={popperActions.highlightedIndex === index}
              key={index}
              {...popperActions.getItemProps({ item, index })}
            >
              <Styles.PopperTitle>{item.properties.NM_MUN}</Styles.PopperTitle>

              <Styles.PopperSubtitle>{item.properties.SIGLA_UF}</Styles.PopperSubtitle>
            </Styles.PopperItem>
          ))}
      </Styles.PopperItens>
    </Styles.PopperContainer>
  );
};

export default SearchBarPopper;

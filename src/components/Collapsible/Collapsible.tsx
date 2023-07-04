import React, { useState } from 'react';

import Component from 'react-collapsible';

import { CollapsibleType, CollapsibleNames } from './type';

import './styles.css';
import * as Styles from './styles';

const CollapsibleDefaultValue: Record<CollapsibleNames, boolean> = {
  'Locations to Compare': true,
  'Demographic Summary': true,
  'Economic Summary': false,
  'Growth Summary': false,
  'Residential Housing Summary': false,
  'Financial Transactions': false,
  'Business Counts': false,
  'Turnover vs. Cost of Sales': false,
  'Business Rental Costs': false,
};

interface Props {
  isTitle?: boolean;
  children: React.ReactNode;
  title: string;
}

const Collapsible = ({ children, title, isTitle = false }: Props) => {
  const [collapsible, setCollapsible] = useState<CollapsibleType>(CollapsibleDefaultValue);

  const isOpen = (key: string) => {
    return key === 'Comparação' ? true : false;
  };


  const updateIsOpen = (key: any, value: any) => {
    const newValue = { ...collapsible, [key]: value };
    setCollapsible(newValue);
  };

  const onOpen = (key: any) => updateIsOpen(key, true);
  const onClose = (key: any) => updateIsOpen(key, false);

  return (
    <Styles.CollapsibleContainer isTitle={isTitle} title={title}>
      <Component
        trigger={title}
        open={isOpen(title)}
        onOpening={() => onOpen(title)}
        onClosing={() => onClose(title)}
        lazyRender={true}
        className={`${title}`}
      >
        {children}
      </Component>
    </Styles.CollapsibleContainer>
  );
};

export default Collapsible;

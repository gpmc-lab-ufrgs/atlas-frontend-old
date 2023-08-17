import React, { useState } from 'react';

import Component from 'react-collapsible';

import { CollapsibleType, CollapsibleNames } from './type';

import './styles.css';
import * as Styles from './styles';

import demograficaImage from './demografico.png';
import economiaImage from './economia.png';
import educacaoImage from './educacao.png';
import tiImage from './ti.png';
import mobilidadeImage from './mobilidade.png';
import meioambienteImage from './meioambiente.png';
import saudeImage from './saude.png';
import segurancaImage from './seguranca.png';
import urbanismoImage from './urbanismo.png';
import empreendedorismoImage from './empreendedorismo.png';


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
    return key === 'Demográfica' || key === 'Demographic' || key === 'Comparação' || key === 'Comparison';
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
        trigger={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {(title === 'Demográfica' || title === 'Demographic') && <img src={demograficaImage} alt="Image" style={{ maxWidth: '35%', height: 'auto' }} />}
            {(title === 'Economia' || title === 'Economy') && <img src={economiaImage} alt="Image" style={{ maxWidth: '35%', height: 'auto' }} />}
            {(title === 'Empreendedorismo' || title === 'Entrepreneurship') && <img src={empreendedorismoImage} alt="Image" style={{ maxWidth: '35%', height: 'auto' }} />}
            {(title === 'Urbanismo' || title === 'Urbanism') && <img src={urbanismoImage} alt="Image" style={{ maxWidth: '35%', height: 'auto' }} />}
            {(title === 'Tecnologia e Inovação' || title === 'Technology and inovation') && <img src={tiImage} alt="Image" style={{ maxWidth: '35%', height: 'auto' }} />}
            {(title === 'Educação' || title === 'Education') && <img src={educacaoImage} alt="Image" style={{ maxWidth: '35%', height: 'auto' }} />}
            {(title === 'Saúde' || title === 'Health') && <img src={saudeImage} alt="Image" style={{ maxWidth: '35%', height: 'auto' }} />}
            {(title === 'Mobilidade' || title === 'Mobility') && <img src={mobilidadeImage} alt="Image" style={{ maxWidth: '35%', height: 'auto' }} />}
            {(title === 'Segurança' || title === 'Safety') && <img src={segurancaImage} alt="Image" style={{ maxWidth: '35%', height: 'auto' }} />}
            {(title === 'Meio Ambiente' || title === 'Environment') && <img src={meioambienteImage} alt="Image" style={{ maxWidth: '35%', height: 'auto' }} />}
            {title}
          </div>
        }
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

import React, { useState } from 'react';
import { ModalContainer } from '@components/Modal';
import Collapsible from '@components/Collapsible';
import { useComparison } from '@context/comparisonContext';
import './recommendation.css';
import data from '@data/cnae.json';
import data_en from '@data/cnae_en.json';
import * as Styles from './styles';
import MyJSFile from './recommendation.js';


const Recommendation = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [language, setLanguage] = useState('pt'); // Estado para controlar o idioma

  const [errorMessage, setErrorMessage] = useState('');
  const [uploadMessageVisible, setUploadMessageVisible] = useState(false);

  const [state, setState] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [sliderValue, setSliderValue] = useState(5);
  const [sliderValue2, setSliderValue2] = useState(5);

  const [selectedDescription, setSelectedDescription] = useState('');

  const { comparison } = useComparison();
  const [comparisonRegionIds, setComparisonRegionIds] = useState(comparison.map((feature) => feature.properties.CD_MUN));
  const [comparisonRegionNames, setComparisonRegionNames] = useState(comparison.map((feature) => feature.properties.CD_MUN));
  //comparisonRegionIds.push('3100203');
  //comparisonRegionIds.push('3303401');

  //const comparisonRegionNames = comparison.map((feature) => feature.properties.CD_MUN);
  //comparisonRegionNames.push('Abaeté');
  //comparisonRegionNames.push('Nova Friburgo');

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleSlider2Change = (event) => {
    setSliderValue2(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setSelectedDescription('');
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const description = event.target.value;
    setSelectedDescription(description);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  }

  const totalScreens = 4;

  const handleNext = () => {
    setCurrentScreen(currentScreen + 1);
  };

  const handlePrevious = () => {
    setCurrentScreen(currentScreen - 1);
  };

  const nextScreen = (next) => {
    setCurrentScreen(next);
  };

  const previousScreen = (previous) => {
    setCurrentScreen(previous);
  };

  const handleTranslation = () => {
    // Alternar entre os idiomas inglês e português
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage('');
    const formData = new FormData();
    formData.append('state', state);
    formData.append('selectedCategory', selectedCategory);
    formData.append('selectedDescription', selectedDescription);
    formData.append('sliderValue', sliderValue);
    formData.append('sliderValue2', sliderValue2);
    setUploadMessageVisible(true); // set flag to show message

    fetch('http://3.92.188.34:8001/recommendation_system/load_recommendation/recommendation_system/', { //http://3.92.188.34:8001/recommendation_system/load_recommendation/recommendation_system/
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed.');
        }
        return response.json();
      })
      .then(data => {
      console.log(data);

      // Access the selected_districts data from the response
      const selectedDistricts = data.districts;

      const newRegionIds = selectedDistricts.map(district => district.CD_MUN);
      const newRegionNames = selectedDistricts.map(district => district.name);
      setComparisonRegionIds([...comparisonRegionIds, ...newRegionIds]);
      setComparisonRegionNames([...comparisonRegionNames, ...newRegionNames]);

      setState('');
      setBusinessType('');

      //alert(`comparisonRegionIds: ${comparisonRegionIds}\ncomparisonRegionNames: ${comparisonRegionNames}`);

      handleNext();

    })
    .catch(error => setErrorMessage(error.message));
};

  const isEnglish = window.location.href.includes('recommendation/');

  const renderScreen = () => {
        return (
        <form onSubmit={handleSubmit}>

        <div id="screen-0" style={{ display: currentScreen === 0 ? 'block' : 'none' }}>
          <div>
              <br /><br />
              {isEnglish ? (
                <label htmlFor="state"><b>Select the state</b></label>
              ) : (
                <label htmlFor="state"><b>Selecione o estado</b></label>
              )}
              <br />
              <select id="state" value={state} onChange={handleStateChange}>
                {isEnglish ? (
                  <>
                    <option value="">Select the region</option>
                    <option value="BR">All Brazil</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                  </>
                ) : (
                <>
                    <option value="">Selecione a região</option>
                    <option value="BR">Todo o Brasil</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                  </>

                )}
              </select>

          </div>
      </div>

      <div id="screen-1" style={{ display: currentScreen === 1 ? 'block' : 'none' }}>
        <div>
            <br /><br />
            {isEnglish ? (
              <label htmlFor="businessType"><b>What is your business type?</b></label>
            ) : (
              <label htmlFor="businessType"><b>Qual é o seu tipo de negócio?</b></label>
            )}
            <br /><br />
            {isEnglish ? (
              <label htmlFor="category"><b>Sector:</b></label>
            ) : (
              <label htmlFor="category"><b>Setor:</b></label>
            )}
            <select id="category" value={selectedCategory} onChange={handleCategoryChange} className="custom-select">
              <option value="">{isEnglish ? 'Select the sector' : 'Selecione o setor'}</option>
              {isEnglish
                ? Object.keys(data_en).map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))
                : Object.keys(data).map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
            </select>

            <br /><br />
            {isEnglish ? (
              <label htmlFor="description"><b>Description:</b></label>
            ) : (
              <label htmlFor="description"><b>Descrição:</b></label>
            )}
            <br />
            <select id="description" value={selectedDescription} onChange={handleDescriptionChange} className="custom-select">
              <option value="">{language === 'pt' ? 'Selecione a descrição' : 'Select the description'}</option>
              {isEnglish
                ? (data_en[selectedCategory] || []).map((item) => (
                    <option key={item.CNAE} value={item.DESCRIPTION}>
                      {item.CNAE} - {item.DESCRIPTION}
                    </option>
                  ))
                : (data[selectedCategory] || []).map((item) => (
                    <option key={item.CNAE} value={item.DESCRIÇÃO}>
                      {item.CNAE} - {item.DESCRIÇÃO}
                    </option>
                  ))}
            </select>
          </div>
      </div>

      <div id="screen-2" style={{ display: currentScreen === 2 ? 'block' : 'none' }} >

      <div>
            <br /><br />
            {isEnglish ? (
              <label htmlFor="businessType"><b>What is the income range of the customers you would like to reach?</b></label>
            ) : (
              <label htmlFor="businessType"><b>Qual é a faixa de renda dos seus clientes que você gostaria de atingir?</b></label>
            )}
            <br />
            <div className="slider-container">
              <input
                type="range"
                min="1"
                max="5"
                value={sliderValue}
                step="1"
                list="tickmarks"
                className="slider"
                onChange={handleSliderChange}
              />
              <datalist id="tickmarks">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>

              </datalist>
              <div className="slider-values">
                <span>1</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;2</span>
                <span>&nbsp;&nbsp;3</span>
                <span>&nbsp;&nbsp;4</span>
                <span>5+</span>

              </div>
              {isEnglish ? (
              <b>minimum wages (Currently the minimum wage in Brazil is R$1,320)</b>
            ) : (
              <b>salários mínimos (Atualmente o salário mínimo no Brasil é de R$ 1.320)</b>
            )}
            </div>
          </div>

      </div>

      <div id="screen-3" style={{ display: currentScreen === 3 ? 'block' : 'none' }}>

      <div>
            <br /><br />
            {isEnglish ? (
              <label htmlFor="businessType"><b>What is the most you are willing to pay to lease your commercial premises?</b></label>
            ) : (
              <label htmlFor="businessType"><b>Qual é o máximo que você está disposto a pagar para alugar suas instalações comerciais?</b></label>
            )}
            <br />
            <div className="slider-container">
              <input
                type="range"
                min="0"
                max="9"
                value={sliderValue2}
                step="1"
                list="tickmarks"
                className="slider"
                onChange={handleSlider2Change}
              />
              <datalist id="tickmarks">
                <option value="0">R$0</option>
                <option value="5">R$5k</option>
                <option value="10">R$10K</option>
                <option value="20">R$20K</option>
                <option value="30">R$30K</option>
                <option value="40">R$40K</option>
                <option value="50">R$50K</option>
                <option value="100">R$100K</option>
                <option value="200">R$200K</option>
                <option value="500">R$500K+</option>
              </datalist>
              <div className="slider-values">
                <span>R$00</span>
                <span>&nbsp;R$5K</span>
                <span>&nbsp;&nbsp;R$10K</span>
                <span>&nbsp;R$20K</span>
                <span>R$30K</span>
                <span>&nbsp;&nbsp;R$40K</span>
                <span>R$50K</span>
                <span>R$100K</span>
                <span>R$200K</span>
                <span>R$500K+</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button type="submit" onClick={handleSubmit} className="custom-button">
              <b>{isEnglish ? 'Generate Result' : 'Gerar Resultado'}</b>
            </button>
          </div>

      </div>

      <div id="screen-4" style={{ display: currentScreen === 4 ? 'block' : 'none' }}>

      <div>
            <br /><br />
            {isEnglish ? (
              <label htmlFor="businessType"><b>Based on the information you provided, the following locations could be a good match:</b></label>
            ) : (
              <label htmlFor="businessType"><b>Baseado nas informações que você forneceu, os seguintes locais podem ser uma boa correspondência:</b></label>
            )}
            <br />

            <ul>
              {comparisonRegionNames.slice(-4).map((regionName, index) => {
                const regionNameInt = parseInt(regionName);
                if (isNaN(regionNameInt)) {
                  return <li key={index}>{regionName}</li>;
                }
                return null;
              })}
            </ul>


            <Styles.ComparisonButton to={isEnglish ? '/comparison_en/' + comparisonRegionIds.join('+') : '/comparison/' + comparisonRegionIds.join('+')}>
              <p>{isEnglish ? 'Show comparison' : 'Mostrar comparação'}</p>
              <Styles.ChevronIcon />
            </Styles.ComparisonButton>

          </div>

      </div>

        </form>
        );
  };

  const renderProgressBar = () => {
    // Array com os nomes das telas em ambos os idiomas
    const screens = [
      { en: 'Region of Interest', pt: 'Região de interesse' },
      { en: 'Your Business', pt: 'Seu negócio' },
      { en: 'Your Customers', pt: 'Seus clientes' },
      { en: 'Premises', pt: 'Instalações' },
      { en: 'Results', pt: 'Resultados' },
    ];

    const circles = screens.map((screen, index) => {
    const isActive = index <= currentScreen;
    const circleStyle = {
      backgroundColor: isActive ? '#696969' : '#ccc',
    };

    return (
      <div className="progress-bar__line">
        <div key={index} className="progress-bar__item">
          <div className="progress-bar__circle" style={circleStyle} />
          <h3 className="custom-h4 progress-bar__name">
            {isEnglish ? screen.en : screen.pt}
          </h3>
        </div>
      </div>
    );
  });

    return <div className="progress-bar">{circles}</div>;
  };

  return (
    <ModalContainer title={isEnglish ? 'Recommendation System' : 'Sistema de Recomendação'}>
      <style>
        {`
        /* Estilos do progress bar */

        .progress-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 50px;
          border-radius: 10px;
          padding: 0 20px;
        }

        .progress-bar__item {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .progress-bar__circle {
          width: 30px;
          height: 30px;
          background-color: #ccc;
          border-radius: 50%;
          position: relative;
          margin-top: -9%;
        }

        .progress-bar__name {
          margin-top: 5px;
          font-size: 12px;
          color: #333;
          text-align: center;
        }

        .progress-bar__line {
          flex-grow: 3;
          height: 4px;
          background-color: #ccc;
          position: relative;
          z-index: 0; /* Adicione z-index para garantir que a linha apareça atrás dos círculos e nomes */
        }
        `}
      </style>
      {renderProgressBar()}
      {renderScreen()}
      <br /><br /><br /><br />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {currentScreen > 0 && (
          <button class="custom-button" onClick={handlePrevious} style={{ marginRight: 'auto' }}>
            <b>{isEnglish ? 'Previous' : 'Anterior'}</b>
          </button>
        )}

        {currentScreen < totalScreens - 1 && (
          <button class="custom-button" onClick={handleNext} style={{ marginLeft: 'auto' }}>
            <b>{isEnglish ? 'Next' : 'Próximo'}</b>
          </button>
        )}

      </div>
        {/* Botão de tradução */}
        <br /><br />

    </ModalContainer>
  );
};

export default Recommendation;

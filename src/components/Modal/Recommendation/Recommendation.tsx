import React, { useState } from 'react';
import { ModalContainer } from '@components/Modal';
import './recommendation.css';


const Recommendation = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [language, setLanguage] = useState('pt'); // Estado para controlar o idioma
  const [sliderValue, setSliderValue] = useState(5);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const totalScreens = 4;

  const handleNext = () => {
    setCurrentScreen(currentScreen + 1);
  };

  const handlePrevious = () => {
    setCurrentScreen(currentScreen - 1);
  };

  const handleTranslation = () => {
    // Alternar entre os idiomas inglês e português
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 0:
        return (
          <div>
            <br /><br />
            {language === 'pt' ? (
              <label htmlFor="state">Selecione o estado</label>
            ) : (
              <label htmlFor="state">Select the state</label>
            )}
            <br />
            <select id="state">
              {language === 'pt' ? (
                <>
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
              ) : (
                <>
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
              )}
            </select>
          </div>
        );

      case 1:
        return (
          <div>
            <br /><br />
            {language === 'pt' ? (
              <label htmlFor="businessType">Qual é o seu tipo de negócio?</label>
            ) : (
              <label htmlFor="businessType">What is your business type?</label>
            )}
            <br />
            <select id="businessType">
              {/* Opções para os tipos de negócio */}
            </select>
          </div>
        );
      case 2:
        return (
          <div>
            <br /><br />
            {language === 'pt' ? (
              <label htmlFor="businessType">Qual é a faixa de renda dos seus clientes que você gostaria de atingir?</label>
            ) : (
              <label htmlFor="businessType">What is the income range of the customers you would like to reach?</label>
            )}
            <br />
            <div className="slider-container">
              <input
                type="range"
                min="0"
                max="9"
                value={sliderValue}
                step="1"
                list="tickmarks"
                className="slider"
                onChange={handleSliderChange}
              />
              <datalist id="tickmarks">
                <option value="0">R$0</option>
                <option value="5">R$5K</option>
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
                <span>R$5K</span>
                <span>R$10K</span>
                <span>R$20K</span>
                <span>R$30K</span>
                <span>R$40K</span>
                <span>R$50K</span>
                <span>R$100K</span>
                <span>R$200K</span>
                <span>R$500K+</span>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <br /><br />
            {language === 'pt' ? (
              <label htmlFor="businessType">Qual é o máximo que você está disposto a pagar para alugar suas instalações comerciais?</label>
            ) : (
              <label htmlFor="businessType">What is the most you are willing to pay to lease your commercial premises?</label>
            )}
            <br />
            <div className="slider-container">
              <input
                type="range"
                min="0"
                max="9"
                value={sliderValue}
                step="1"
                list="tickmarks"
                className="slider"
                onChange={handleSliderChange}
              />
              <datalist id="tickmarks">
                <option value="0">R$0</option>
                <option value="5">R$5K</option>
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
                <span>R$5K</span>
                <span>R$10K</span>
                <span>R$20K</span>
                <span>R$30K</span>
                <span>R$40K</span>
                <span>R$50K</span>
                <span>R$100K</span>
                <span>R$200K</span>
                <span>R$500K+</span>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <br /><br />
            {language === 'pt' ? (
              <label htmlFor="businessType">Baseado nas informações que você forneceu, os seguintes locais podem ser uma boa correspondência.</label>
            ) : (
              <label htmlFor="businessType">Based on the information you provided, the following locations could be a good match:</label>
            )}
            <br />
          </div>
        );
      default:
        return null;
    }
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
            <h3 className="progress-bar__name">{screen[language]}</h3>
          </div>
        </div>
      );
    });

    return <div className="progress-bar">{circles}</div>;
  };

  return (
    <ModalContainer title={language === 'pt' ? 'Sistema de Recomendação' : 'Recommendation System'}>
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
          <button onClick={handlePrevious} style={{ marginRight: 'auto' }}>
            {language === 'pt' ? 'Anterior' : 'Previous'}
          </button>
        )}

        {currentScreen < totalScreens - 1 && (
          <button onClick={handleNext} style={{ marginLeft: 'auto' }}>
            {language === 'pt' ? 'Próximo' : 'Next'}
          </button>
        )}

        {currentScreen === totalScreens - 1 && (
          <button onClick={handleNext} style={{ marginLeft: 'auto' }}>
            {language === 'pt' ? 'Gerar Resultado' : 'Generate Result'}
          </button>
        )}
      </div>
        {/* Botão de tradução */}
        <br /><br />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          Translate to <button onClick={handleTranslation}>
            {language === 'pt' ? 'English 🇬🇧' : 'Português 🇧🇷'}
          </button>
        </div>

    </ModalContainer>
  );
};

export default Recommendation;

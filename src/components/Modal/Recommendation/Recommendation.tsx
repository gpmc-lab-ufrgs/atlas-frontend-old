import React, { useState } from 'react';
import { ModalContainer } from '@components/Modal';

const Recommendation = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [language, setLanguage] = useState('pt'); // Estado para controlar o idioma

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
                <option value="BR">Todo o Brasil</option>
              ) : (
                <option value="BR">All Brazil</option>
              )}
              {/* Opções para os estados */}
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
            {/* Conteúdo para a tela 2 */}
          </div>
        );
      case 3:
        return (
          <div>
            {/* Conteúdo para a tela 3 */}
          </div>
        );
      case 4:
        return (
          <div>
            {/* Conteúdo para a tela 4 */}
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
      { en: 'Facilities', pt: 'Instalações' },
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

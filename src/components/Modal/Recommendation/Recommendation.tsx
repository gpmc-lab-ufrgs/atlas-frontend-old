import React, { useState } from 'react';
import { ModalContainer } from '@components/Modal';

const Recommendation = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const totalScreens = 4;

  const handleNext = () => {
    setCurrentScreen(currentScreen + 1);
  };

  const handlePrevious = () => {
    setCurrentScreen(currentScreen - 1);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 0:
        return (
          <div>
            {/* Content for Screen 1 */}
          </div>
        );
      case 1:
        return (
          <div>
            {/* Content for Screen 2 */}
          </div>
        );
      case 2:
        return (
          <div>
            {/* Content for Screen 3 */}
          </div>
        );
      case 3:
        return (
          <div>
            {/* Content for Screen 4 */}
          </div>
        );
      default:
        return null;
    }
  };

const renderProgressBar = () => {
  const screens = [
    'Seu negócio',
    'Seus clientes',
    'Instalações',
    'Resultados',
  ];

  const circles = screens.map((screen, index) => {
    const isActive = index <= currentScreen;
    const circleStyle = {
      backgroundColor: isActive ? '#696969' : '#ccc',
    };

    return (
    <div class="progress-bar__line">
      <div key={index} className="progress-bar__item">
        <div className="progress-bar__circle" style={circleStyle} />
        <h3 className="progress-bar__name">{screen}</h3>
      </div>
    </div>
    );
  });

  return <div className="progress-bar">{circles}</div>;
};

  return (
    <ModalContainer title="Sistema de Recomendação">
    <style>
  {`
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
    z-index: 0; /* Add z-index to ensure the line appears behind the circles and names */
  }
  `}
</style>
      {renderProgressBar()}
      {renderScreen()}
      <br /><br /><br /><br />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  {currentScreen > 0 && (
    <button onClick={handlePrevious} style={{ marginRight: 'auto' }}>
      Previous
    </button>
  )}

  {currentScreen < totalScreens - 1 && (
    <button onClick={handleNext} style={{ marginLeft: 'auto' }}>
      Next
    </button>
  )}
</div>

    </ModalContainer>
  );
};

export default Recommendation;

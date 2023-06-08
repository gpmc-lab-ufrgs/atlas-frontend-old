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
              <label htmlFor="state"><b>Selecione o estado</b></label>
            ) : (
              <label htmlFor="state"><b>Select the state</b></label>
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
              <label htmlFor="businessType"><b>Qual é o seu tipo de negócio?</b></label>
            ) : (
              <label htmlFor="businessType"><b>What is your business type?</b></label>
            )}
            <br />
            <select class="custom-select">
              <option value="AGRICULTURA">AGRICULTURA</option>
              <option value="PRODUÇÃO FLORESTAL">PRODUÇÃO FLORESTAL</option>
              <option value="PESCA E AQÜICULTURA">PESCA E AQÜICULTURA</option>
              <option value="EXTRAÇÃO DE CARVÃO MINERAL">EXTRAÇÃO DE CARVÃO MINERAL</option>
              <option value="EXTRAÇÃO DE PETRÓLEO E GÁS NATURAL">EXTRAÇÃO DE PETRÓLEO E GÁS NATURAL</option>
              <option value="EXTRAÇÃO DE MINERAIS METÁLICOS">EXTRAÇÃO DE MINERAIS METÁLICOS</option>
              <option value="EXTRAÇÃO DE MINERAIS NÃO-METÁLICOS">EXTRAÇÃO DE MINERAIS NÃO-METÁLICOS</option>
              <option value="ATIVIDADES DE APOIO À EXTRAÇÃO DE MINERAIS">ATIVIDADES DE APOIO À EXTRAÇÃO DE MINERAIS</option>
              <option value="FABRICAÇÃO DE PRODUTOS ALIMENTÍCIOS">FABRICAÇÃO DE PRODUTOS ALIMENTÍCIOS</option>
              <option value="FABRICAÇÃO DE BEBIDAS">FABRICAÇÃO DE BEBIDAS</option>
              <option value="FABRICAÇÃO DE PRODUTOS DO FUMO">FABRICAÇÃO DE PRODUTOS DO FUMO</option>
              <option value="FABRICAÇÃO DE PRODUTOS TÊXTEIS">FABRICAÇÃO DE PRODUTOS TÊXTEIS</option>
              <option value="CONFECÇÃO DE ARTIGOS DO VESTUÁRIO E ACESSÓRIOS">CONFECÇÃO DE ARTIGOS DO VESTUÁRIO E ACESSÓRIOS</option>
              <option value="PREPARAÇÃO DE COUROS E FABRICAÇÃO DE ARTEFATOS DE COURO">PREPARAÇÃO DE COUROS E FABRICAÇÃO DE ARTEFATOS DE COURO</option>
              <option value="FABRICAÇÃO DE PRODUTOS DE MADEIRA">FABRICAÇÃO DE PRODUTOS DE MADEIRA</option>
              <option value="FABRICAÇÃO DE CELULOSE">FABRICAÇÃO DE CELULOSE</option>
              <option value="IMPRESSÃO E REPRODUÇÃO DE GRAVAÇÕES">IMPRESSÃO E REPRODUÇÃO DE GRAVAÇÕES</option>
              <option value="FABRICAÇÃO DE COQUE">FABRICAÇÃO DE COQUE</option>
              <option value="FABRICAÇÃO DE PRODUTOS QUÍMICOS">FABRICAÇÃO DE PRODUTOS QUÍMICOS</option>
              <option value="FABRICAÇÃO DE PRODUTOS FARMOQUÍMICOS E FARMACÊUTICOS">FABRICAÇÃO DE PRODUTOS FARMOQUÍMICOS E FARMACÊUTICOS</option>
              <option value="FABRICAÇÃO DE PRODUTOS DE BORRACHA E DE MATERIAL PLÁSTICO">FABRICAÇÃO DE PRODUTOS DE BORRACHA E DE MATERIAL PLÁSTICO</option>
              <option value="FABRICAÇÃO DE PRODUTOS DE MINERAIS NÃO-METÁLICOS">FABRICAÇÃO DE PRODUTOS DE MINERAIS NÃO-METÁLICOS</option>
              <option value="METALURGIA">METALURGIA</option>
              <option value="FABRICAÇÃO DE PRODUTOS DE METAL">FABRICAÇÃO DE PRODUTOS DE METAL</option>
              <option value="FABRICAÇÃO DE EQUIPAMENTOS DE INFORMÁTICA">FABRICAÇÃO DE EQUIPAMENTOS DE INFORMÁTICA</option>
              <option value="FABRICAÇÃO DE MÁQUINAS">FABRICAÇÃO DE MÁQUINAS</option>
              <option value="FABRICAÇÃO DE MÁQUINAS E EQUIPAMENTOS">FABRICAÇÃO DE MÁQUINAS E EQUIPAMENTOS</option>
              <option value="FABRICAÇÃO DE VEÍCULOS AUTOMOTORES">FABRICAÇÃO DE VEÍCULOS AUTOMOTORES</option>
              <option value="FABRICAÇÃO DE OUTROS EQUIPAMENTOS DE TRANSPORTE">FABRICAÇÃO DE OUTROS EQUIPAMENTOS DE TRANSPORTE</option>
              <option value="FABRICAÇÃO DE MÓVEIS">FABRICAÇÃO DE MÓVEIS</option>
              <option value="FABRICAÇÃO DE PRODUTOS DIVERSOS">FABRICAÇÃO DE PRODUTOS DIVERSOS</option>
              <option value="MANUTENÇÃO">MANUTENÇÃO</option>
              <option value="ELETRICIDADE">ELETRICIDADE</option>
              <option value="CAPTAÇÃO">CAPTAÇÃO</option>
              <option value="ESGOTO E ATIVIDADES RELACIONADAS">ESGOTO E ATIVIDADES RELACIONADAS</option>
              <option value="COLETA">COLETA</option>
              <option value="DESCONTAMINAÇÃO E OUTROS SERVIÇOS DE GESTÃO DE RESÍDUOS">DESCONTAMINAÇÃO E OUTROS SERVIÇOS DE GESTÃO DE RESÍDUOS</option>
              <option value="CONSTRUÇÃO DE EDIFÍCIOS">CONSTRUÇÃO DE EDIFÍCIOS</option>
              <option value="OBRAS DE INFRA-ESTRUTURA">OBRAS DE INFRA-ESTRUTURA</option>
              <option value="SERVIÇOS ESPECIALIZADOS PARA CONSTRUÇÃO">SERVIÇOS ESPECIALIZADOS PARA CONSTRUÇÃO</option>
              <option value="COMÉRCIO E REPARAÇÃO DE VEÍCULOS AUTOMOTORES E MOTOCICLETAS">COMÉRCIO E REPARAÇÃO DE VEÍCULOS AUTOMOTORES E MOTOCICLETAS</option>
              <option value="COMÉRCIO POR ATACADO">COMÉRCIO POR ATACADO</option>
              <option value="COMÉRCIO VAREJISTA">COMÉRCIO VAREJISTA</option>
              <option value="TRANSPORTE TERRESTRE">TRANSPORTE TERRESTRE</option>
              <option value="TRANSPORTE AQUAVIÁRIO">TRANSPORTE AQUAVIÁRIO</option>
              <option value="TRANSPORTE AÉREO">TRANSPORTE AÉREO</option>
              <option value="ARMAZENAMENTO E ATIVIDADES AUXILIARES DOS TRANSPORTES">ARMAZENAMENTO E ATIVIDADES AUXILIARES DOS TRANSPORTES</option>
              <option value="CORREIO E OUTRAS ATIVIDADES DE ENTREGA">CORREIO E OUTRAS ATIVIDADES DE ENTREGA</option>
              <option value="ALOJAMENTO">ALOJAMENTO</option>
              <option value="ALIMENTAÇÃO">ALIMENTAÇÃO</option>
              <option value="EDIÇÃO E EDIÇÃO INTEGRADA À IMPRESSÃO">EDIÇÃO E EDIÇÃO INTEGRADA À IMPRESSÃO</option>
              <option value="ATIVIDADES CINEMATOGRÁFICAS">ATIVIDADES CINEMATOGRÁFICAS</option>
              <option value="ATIVIDADES DE RÁDIO E DE TELEVISÃO">ATIVIDADES DE RÁDIO E DE TELEVISÃO</option>
              <option value="TELECOMUNICAÇÕES">TELECOMUNICAÇÕES</option>
              <option value="ATIVIDADES DOS SERVIÇOS DE TECNOLOGIA DA INFORMAÇÃO">ATIVIDADES DOS SERVIÇOS DE TECNOLOGIA DA INFORMAÇÃO</option>
              <option value="ATIVIDADES DE PRESTAÇÃO DE SERVIÇOS DE INFORMAÇÃO">ATIVIDADES DE PRESTAÇÃO DE SERVIÇOS DE INFORMAÇÃO</option>
              <option value="ATIVIDADES DE SERVIÇOS FINANCEIROS">ATIVIDADES DE SERVIÇOS FINANCEIROS</option>
              <option value="SEGUROS">SEGUROS</option>
              <option value="ATIVIDADES AUXILIARES DOS SERVIÇOS FINANCEIROS">ATIVIDADES AUXILIARES DOS SERVIÇOS FINANCEIROS</option>
              <option value="ATIVIDADES IMOBILIÁRIAS">ATIVIDADES IMOBILIÁRIAS</option>
              <option value="ATIVIDADES JURÍDICAS">ATIVIDADES JURÍDICAS</option>
              <option value="SERVIÇOS DE ARQUITETURA E ENGENHARIA; TESTES E ANÁLISES TÉCNICAS">SERVIÇOS DE ARQUITETURA E ENGENHARIA; TESTES E ANÁLISES TÉCNICAS</option>
              <option value="PESQUISA E DESENVOLVIMENTO CIENTÍFICO">PESQUISA E DESENVOLVIMENTO CIENTÍFICO</option>
              <option value="PUBLICIDADE E PESQUISA DE MERCADO">PUBLICIDADE E PESQUISA DE MERCADO</option>
              <option value="OUTRAS ATIVIDADES PROFISSIONAIS">OUTRAS ATIVIDADES PROFISSIONAIS</option>
              <option value="ATIVIDADES VETERINÁRIAS">ATIVIDADES VETERINÁRIAS</option>
              <option value="ALUGUÉIS NÃO-IMOBILIÁRIOS E GESTÃO DE ATIVOS INTANGÍVEIS NÃO-FINANCEIROS">ALUGUÉIS NÃO-IMOBILIÁRIOS E GESTÃO DE ATIVOS INTANGÍVEIS NÃO-FINANCEIROS</option>
              <option value="SELEÇÃO">SELEÇÃO</option>
              <option value="AGÊNCIAS DE VIAGENS">AGÊNCIAS DE VIAGENS</option>
              <option value="ATIVIDADES DE VIGILÂNCIA">ATIVIDADES DE VIGILÂNCIA</option>
              <option value="SERVIÇOS PARA EDIFÍCIOS E ATIVIDADES PAISAGÍSTICAS">SERVIÇOS PARA EDIFÍCIOS E ATIVIDADES PAISAGÍSTICAS</option>
              <option value="SERVIÇOS DE ESCRITÓRIO">SERVIÇOS DE ESCRITÓRIO</option>
              <option value="ADMINISTRAÇÃO PÚBLICA">ADMINISTRAÇÃO PÚBLICA</option>
              <option value="EDUCAÇÃO">EDUCAÇÃO</option>
              <option value="ATIVIDADES DE ATENÇÃO À SAÚDE HUMANA">ATIVIDADES DE ATENÇÃO À SAÚDE HUMANA</option>
              <option value="ATIVIDADES DE ATENÇÃO À SAÚDE HUMANA INTEGRADAS COM ASSISTÊNCIA SOCIAL">ATIVIDADES DE ATENÇÃO À SAÚDE HUMANA INTEGRADAS COM ASSISTÊNCIA SOCIAL</option>
              <option value="SERVIÇOS DE ASSISTÊNCIA SOCIAL SEM ALOJAMENTO">SERVIÇOS DE ASSISTÊNCIA SOCIAL SEM ALOJAMENTO</option>
              <option value="ATIVIDADES ARTÍSTICAS">ATIVIDADES ARTÍSTICAS</option>
              <option value="ATIVIDADES LIGADAS AO PATRIMÔNIO CULTURAL E AMBIENTAL">ATIVIDADES LIGADAS AO PATRIMÔNIO CULTURAL E AMBIENTAL</option>
              <option value="ATIVIDADES DE EXPLORAÇÃO DE JOGOS DE AZAR E APOSTAS">ATIVIDADES DE EXPLORAÇÃO DE JOGOS DE AZAR E APOSTAS</option>
              <option value="ATIVIDADES ESPORTIVAS E DE RECREAÇÃO E LAZER">ATIVIDADES ESPORTIVAS E DE RECREAÇÃO E LAZER</option>
              <option value="ATIVIDADES DE ORGANIZAÇÕES ASSOCIATIVAS">ATIVIDADES DE ORGANIZAÇÕES ASSOCIATIVAS</option>
              <option value="REPARAÇÃO E MANUTENÇÃO DE EQUIPAMENTOS DE INFORMÁTICA E COMUNICAÇÃO E DE OBJETOS PESSOAIS E DOMÉSTICOS">REPARAÇÃO E MANUTENÇÃO DE EQUIPAMENTOS DE INFORMÁTICA E COMUNICAÇÃO E DE OBJETOS PESSOAIS E DOMÉSTICOS</option>
              <option value="OUTRAS ATIVIDADES DE SERVIÇOS PESSOAIS">OUTRAS ATIVIDADES DE SERVIÇOS PESSOAIS</option>
              <option value="SERVIÇOS DOMÉSTICOS">SERVIÇOS DOMÉSTICOS</option>
              <option value="ORGANISMOS INTERNACIONAIS E OUTRAS INSTITUIÇÕES EXTRATERRITORIAIS">ORGANISMOS INTERNACIONAIS E OUTRAS INSTITUIÇÕES EXTRATERRITORIAIS</option>
            </select>

          </div>
        );
      case 2:
        return (
          <div>
            <br /><br />
            {language === 'pt' ? (
              <label htmlFor="businessType"><b>Qual é a faixa de renda dos seus clientes que você gostaria de atingir?</b></label>
            ) : (
              <label htmlFor="businessType"><b>What is the income range of the customers you would like to reach?</b></label>
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
        );
      case 3:
        return (
          <div>
            <br /><br />
            {language === 'pt' ? (
              <label htmlFor="businessType"><b>Qual é o máximo que você está disposto a pagar para alugar suas instalações comerciais?</b></label>
            ) : (
              <label htmlFor="businessType"><b>What is the most you are willing to pay to lease your commercial premises?</b></label>
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
        );
      case 4:
        return (
          <div>
            <br /><br />
            {language === 'pt' ? (
              <label htmlFor="businessType"><b>Baseado nas informações que você forneceu, os seguintes locais podem ser uma boa correspondência:</b></label>
            ) : (
              <label htmlFor="businessType"><b>Based on the information you provided, the following locations could be a good match:</b></label>
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
            <h3 class="custom-h4" className="progress-bar__name">{screen[language]}</h3>
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
          <button class="custom-button" onClick={handlePrevious} style={{ marginRight: 'auto' }}>
            <b>{language === 'pt' ? 'Anterior' : 'Previous'}</b>
          </button>
        )}

        {currentScreen < totalScreens - 1 && (
          <button class="custom-button" onClick={handleNext} style={{ marginLeft: 'auto' }}>
            <b>{language === 'pt' ? 'Próximo' : 'Next'}</b>
          </button>
        )}

        {currentScreen === totalScreens - 1 && (
          <button class="custom-button" onClick={handleNext} style={{ marginLeft: 'auto' }}>
            <b>{language === 'pt' ? 'Gerar Resultado' : 'Generate Result'}</b>
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

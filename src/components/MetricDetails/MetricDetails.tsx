/* eslint-disable prettier/prettier */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState, useEffect } from 'react';
import Bar from './Bar';
import Graphic from './Graphic'; // Assuming Graphic component is in a separate file
import { formatPopulationNumber, formatValue } from '@utils/formatValue';
import { Estado } from 'src/interfaces/Estado.type';
import { Cidades } from 'src/interfaces/Cidades.type';

interface MetricDetailsProps {
  propsEstado?: Estado;
  propsCidade?: Cidades;
}

const MetricDetails = (props: MetricDetailsProps) => {
  //const [geosesData, setGeosesData] = useState(null);
  const dadoEstado = props.propsEstado;
  const dadoCidade = props.propsCidade;
  const isState = window.location.href.includes('/comparison_states') || window.location.href.includes('/state');

  const { pathname } = location;
  const isEnglish = pathname.includes('/en');

  const renderSingleMetric = () => {
    const cdTitle = isState? dadoEstado?.cdEstado : dadoCidade?.cdCidade;
    const nmFormato = isState? dadoEstado?.nmFormato : dadoCidade?.nmFormato;
    const nmUnidade = isState? dadoEstado?.nmUnidade : dadoCidade?.nmUnidade;
    const geosesDataValue = isState? dadoEstado?.vlPorCd : dadoCidade?.vlPorCd;
    if (nmFormato === 'Float .2' || nmFormato === 'Float') {
      const parsedValue2 = parseFloat(geosesDataValue!);

      if (nmUnidade === 'Número') {
        const displayValue2 = isNaN(parsedValue2)
          ? '-----'
          : parsedValue2
              .toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 3 })
              .replace(',', '.');

        return (
          <div key={cdTitle}>
            <data value={geosesDataValue}>{displayValue2}</data>
          </div>
        );
      }
      if (nmUnidade === 'R$') {
        const displayValue2 = isNaN(parsedValue2)
          ? '-----'
          : parsedValue2
              .toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
              .replace(/(\d{3})\.000/, '$1');

        return (
          <div key={cdTitle}>
            R$<data value={geosesDataValue}>{displayValue2}</data>
          </div>
        );
      }
      if (nmUnidade === 'Salários Mínimos') {
        const displayValue2 = isNaN(parsedValue2)
          ? '-----'
          : parsedValue2.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 1 });
        
        return (
          <div key={cdTitle}>
            <data value={geosesDataValue}>{displayValue2} </data>salários mínimos
          </div>
        );
      }
      if (nmUnidade === 'Km²') {
        const formattedValue2 = isNaN(parsedValue2)
          ? '-----'
          : parsedValue2
              .toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
              .replace(',', '.')
              .replace(/(\d{3})\.0/, '$1');

        return (
          <div key={cdTitle}>
            <data value={geosesDataValue}>{formattedValue2} </data>km²
          </div>
        );
      }
      if (nmUnidade === 'Habitante/ Km²' || nmUnidade === 'Hab/km²') {
        const formattedValue2 = isNaN(parsedValue2)
          ? '-----'
          : parsedValue2
              .toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 2 })
              .replace(',', '.');

        return (
          <div key={cdTitle}>
            <data value={geosesDataValue}>{formattedValue2} </data>hab/km²
          </div>
        );
      }
      if (nmUnidade === 'Mbps') {
        const formattedValue2 = isNaN(parsedValue2)
          ? '-----'
          : parsedValue2
              .toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 2 })
              .replace(',', '.');

        return (
          <div key={cdTitle}>
            <data value={geosesDataValue}>{formattedValue2} </data>Mbps
          </div>
        );
      } else if (nmUnidade === '%'){  
        return (
          <div key={cdTitle}>
            {isNaN(parsedValue2)? (
              <div>-----</div> // Replace with the desired action for NaN value
            ) : (
              <data value={geosesDataValue}>{`${parsedValue2}%`}</data>
            )}
          </div>
        );
      } else {
        return (
          <div key={cdTitle}>
            {isNaN(parsedValue2)? (
              <div>-----</div> // Replace with the desired action for NaN value
            ) : (
              <data value={geosesDataValue}>{`${parsedValue2.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 2 }).replace(',', '.')}`}</data>
            )}
          </div>
        );
      }
    } else if (nmFormato === 'Float .2 (-1 to +1)'){
      const parsedValue2 = parseFloat(geosesDataValue!);
      return (
        <div key={cdTitle}>
          <data value={parsedValue2}>
            {parseFloat(geosesDataValue!).toFixed(3)}
          </data>
        </div>
      );
    } else if (nmFormato === 'Int') {
      const geosesDataValue1 = geosesDataValue === undefined ? '' : geosesDataValue;

      const parsedValue = parseFloat(geosesDataValue1);
      const formattedValue = isNaN(parsedValue)
        ? '-----'
        : parsedValue.toLocaleString('pt-BR', { useGrouping: true }).replace(',', '.'); // Format to locale string
      
      return (
        <div key={cdTitle}>
          <data value={geosesDataValue1}>{formattedValue}</data>
        </div>
      );
    } else if (nmFormato === 'String'){
      return (
        <div key={cdTitle}>
          <data value={geosesDataValue}>{geosesDataValue}</data>
        </div>
      );
    } else if (nmFormato === 'Progress Bar') {
      const geosesDataValue1 = geosesDataValue === undefined ? '0' : geosesDataValue;

      // Calculate the percentage value of the progress bar
      const percentage = parseFloat(((parseFloat(geosesDataValue1) / 100) * 100).toFixed(2));

      // Define a style for the progress bar
      const progressBarStyle = {
        width: '100px',
        height: '20px',
        borderRadius: '3px',
        backgroundColor: '#ddd',
        margin: '10px 0',
      };

      // Define a style for the filled part of the progress bar
      const progressBarFilledStyle = {
        width: `${percentage}%`,
        height: '100%',
        borderRadius: '3px',
        backgroundColor: '#87A96B',
        // textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        lineHeight: '20px',
      };

      return (
        <div key={cdTitle}>
          <div style={progressBarStyle}>
            <div style={progressBarFilledStyle}>
              {geosesDataValue1}%
            </div>
          </div>
        </div>
      );
    } else if (nmFormato === 'Graphic') {
      const regionData = {
        properties: {
          CD_MUN: cdTitle, // Replace with actual value
        },
      };
      return (
        <div>
          <Graphic region={regionData} />
        </div>
      );
    }
  };

  return <div>{renderSingleMetric()}</div>;
};

export default MetricDetails;

/**
 * switch (dadoEstado.nmFormato) {
      case 'bar':
        return isState ? (
          <Bar rawValue={dadoEstado.nmEstado!} metric={dadoEstado.vlPorCd!} id={dadoEstado.cdEstado} />
        ) : (
          <></>
          //<Bar rawValue={rawValue} metric={metric} id={region.properties.CD_MUN} />
        );
      case 'Float .2':
        if (dadoEstado.nmUnidade === 'Número') {
          let geosesDataValue2;
          if (isState) {
            geosesDataValue2 = geosesData?.[region?.properties.CD_UF]?.[metric.label]?.value;
          } else {
            geosesDataValue2 = geosesData?.[region?.properties.CD_MUN]?.[metric.label]?.value;
          }
          const parsedValue2 = parseFloat(geosesDataValue2);
          const displayValue2 = isNaN(parsedValue2)
            ? '-----'
            : parsedValue2
                .toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 3 })
                .replace(',', '.');
          if (isState) {
            return (
              <div key={region?.properties.CD_UF}>
                <data value={geosesDataValue2}>{displayValue2}</data>
              </div>
            );
          } else {
            return (
              <div key={region?.properties.CD_MUN}>
                <data value={geosesDataValue2}>{displayValue2}</data>
              </div>
            );
          }
        }
        if (unit === 'R$') {
          let geosesDataValue2;
          if (isState) {
            geosesDataValue2 = geosesData?.[region?.properties.CD_UF]?.[metric.label]?.value;
          } else {
            geosesDataValue2 = geosesData?.[region?.properties.CD_MUN]?.[metric.label]?.value;
          }
          const parsedValue2 = parseFloat(geosesDataValue2);
          const displayValue2 = isNaN(parsedValue2)
            ? '-----'
            : parsedValue2
                .toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                .replace(/(\d{3})\.000/, '$1');
          if (isState) {
            return (
              <div key={region?.properties.CD_UF}>
                R$<data value={geosesDataValue2}>{displayValue2}</data>
              </div>
            );
          } else {
            return (
              <div key={region?.properties.CD_MUN}>
                R$<data value={geosesDataValue2}>{displayValue2}</data>
              </div>
            );
          }
        }
        if (unit === 'Salários Mínimos') {
          let geosesDataValue2;
          if (isState) {
            geosesDataValue2 = geosesData?.[region?.properties.CD_UF]?.[metric.label]?.value;
          } else {
            geosesDataValue2 = geosesData?.[region?.properties.CD_MUN]?.[metric.label]?.value;
          }
          const parsedValue2 = parseFloat(geosesDataValue2);
          const displayValue2 = isNaN(parsedValue2)
            ? '-----'
            : parsedValue2.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 1 });
          if (isState) {
            return (
              <div key={region?.properties.CD_UF}>
                <data value={geosesDataValue2}>{displayValue2} </data>salários mínimos
              </div>
            );
          } else {
            return (
              <div key={region?.properties.CD_MUN}>
                <data value={geosesDataValue2}>{displayValue2} </data>salários mínimos
              </div>
            );
          }
        }
        if (unit === 'Km²') {
          let geosesDataValue2;
          if (isState) {
            geosesDataValue2 = geosesData?.[region?.properties.CD_UF]?.[metric.label]?.value;
          } else {
            geosesDataValue2 = geosesData?.[region?.properties.CD_MUN]?.[metric.label]?.value;
          }
          const parsedValue2 = parseFloat(geosesDataValue2);
          const formattedValue2 = isNaN(parsedValue2)
            ? '-----'
            : parsedValue2
                .toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
                .replace(',', '.')
                .replace(/(\d{3})\.0/, '$1');
          if (isState) {
            return (
              <div key={region?.properties.CD_UF}>
                <data value={geosesDataValue2}>{formattedValue2} </data>km²
              </div>
            );
          } else {
            return (
              <div key={region?.properties.CD_MUN}>
                <data value={geosesDataValue2}>{formattedValue2} </data>km²
              </div>
            );
          }
        }
        if (unit === 'Hab/km²') {
          let geosesDataValue2;
          if (isState) {
            geosesDataValue2 = geosesData?.[region?.properties.CD_UF]?.[metric.label]?.value;
          } else {
            geosesDataValue2 = geosesData?.[region?.properties.CD_MUN]?.[metric.label]?.value;
          }
          const parsedValue2 = parseFloat(geosesDataValue2);
          const formattedValue2 = isNaN(parsedValue2)
            ? '-----'
            : parsedValue2
                .toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 2 })
                .replace(',', '.');
          if (isState) {
            return (
              <div key={region?.properties.CD_UF}>
                <data value={geosesDataValue2}>{formattedValue2} </data>hab/km²
              </div>
            );
          } else {
            return (
              <div key={region?.properties.CD_MUN}>
                <data value={geosesDataValue2}>{formattedValue2} </data>hab/km²
              </div>
            );
          }
        }
        if (unit === 'Mbps') {
          let geosesDataValue2;
          if (isState) {
            geosesDataValue2 = geosesData?.[region?.properties.CD_UF]?.[metric.label]?.value;
          } else {
            geosesDataValue2 = geosesData?.[region?.properties.CD_MUN]?.[metric.label]?.value;
          }
          const parsedValue2 = parseFloat(geosesDataValue2);
          const formattedValue2 = isNaN(parsedValue2)
            ? '-----'
            : parsedValue2
                .toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 2 })
                .replace(',', '.');
          if (isState) {
            return (
              <div key={region?.properties.CD_UF}>
                <data value={geosesDataValue2}>{formattedValue2} </data>Mbps
              </div>
            );
          } else {
            return (
              <div key={region?.properties.CD_MUN}>
                <data value={geosesDataValue2}>{formattedValue2} </data>Mbps
              </div>
            );
          }
        }
      case 'Float .2 (-1 to +1)':
        if (isState) {
          return (
            <div key={region.properties.CD_UF}>
              <data value={rawValue}>
                {parseFloat(geosesData[region?.properties.CD_UF][metric.label].value).toFixed(3)}
              </data>
            </div>
          );
        } else {
          return (
            <div key={region.properties.CD_MUN}>
              <data value={rawValue}>
                {parseFloat(geosesData[region?.properties.CD_MUN][metric.label].value).toFixed(3)}
              </data>
            </div>
          );
        }
      case 'Float':
        if (isState) {
          return (
            <div key={region.properties.CD_UF}>
              <data value={rawValue}>
                {parseFloat(geosesData[region?.properties.CD_UF][metric.label].value).toFixed(3)}
              </data>
            </div>
          );
        } else {
          return (
            <div key={region.properties.CD_MUN}>
              <data value={rawValue}>
                {parseFloat(geosesData[region?.properties.CD_MUN][metric.label].value).toFixed(3)}
              </data>
            </div>
          );
        }

      case 'Int':
      case 'int':
        let geosesDataValue;
        if (isState) {
          geosesDataValue = geosesData?.[region?.properties.CD_UF]?.[metric.label]?.value;
        } else {
          geosesDataValue = geosesData?.[region?.properties.CD_MUN]?.[metric.label]?.value;
        }
        const parsedValue = parseFloat(geosesDataValue);
        const formattedValue = isNaN(parsedValue)
          ? '-----'
          : parsedValue.toLocaleString('pt-BR', { useGrouping: true }).replace(',', '.'); // Format to locale string
        if (isState) {
          return (
            <div key={region?.properties.CD_UF}>
              <data value={geosesDataValue}>{formattedValue}</data>
            </div>
          );
        } else {
          return (
            <div key={region?.properties.CD_MUN}>
              <data value={geosesDataValue}>{formattedValue}</data>
            </div>
          );
        }

      case 'String':
        if (isState) {
          return (
            <div key={region.properties.CD_UF}>
              <data value={rawValue}>{geosesData[region?.properties.CD_UF][metric.label].value}</data>
            </div>
          );
        } else {
          return (
            <div key={region.properties.CD_MUN}>
              <data value={rawValue}>{geosesData[region?.properties.CD_MUN][metric.label].value}</data>
            </div>
          );
        }

      case 'Progress Bar':
        // Get the value for the progress bar
        let value;
        if (isState) {
          value = geosesData?.[region?.properties.CD_UF]?.[metric.label]?.value;
        } else {
          value = geosesData?.[region?.properties.CD_MUN]?.[metric.label]?.value;
        }

        // Calculate the percentage value of the progress bar
        const percentage = parseFloat(((value / 100) * 100).toFixed(2));

        // Define a style for the progress bar
        const progressBarStyle = {
          width: '100px',
          height: '20px',
          borderRadius: '3px',
          backgroundColor: '#ddd',
          margin: '10px 0',
        };

        // Define a style for the filled part of the progress bar

        const progressBarFilledStyle = {
          width: `${percentage}%`,
          height: '100%',
          borderRadius: '3px',
          backgroundColor: '#87A96B',
          textAlign: 'center',
          color: 'black',
          fontWeight: 'bold',
          lineHeight: '20px',
        };

        if (isState) {
          return (
            <div key={region.properties.CD_UF}>
              <div style={progressBarStyle}>
                <div style={progressBarFilledStyle}>{value}%</div>
              </div>
            </div>
          );
        } else {
          return (
            <div key={region.properties.CD_MUN}>
              <div style={progressBarStyle}>
                <div style={progressBarFilledStyle}>{value}%</div>
              </div>
            </div>
          );
        }

      case 'Graphic':
        // Get the value for the graphic in the API
        const regionData = {
          properties: {
            CD_MUN: region.properties.CD_MUN, // Replace with actual value
          },
        };

        return (
          <div>
            <Graphic region={regionData} />
          </div>
        );

        return (
          <div key={region.properties.CD_MUN}>
            {isNaN(geosesData[region?.properties.CD_MUN][metric.label].value) ? (
              <div>-----</div> // Replace with the desired action for NaN value
            ) : (
              <data value={rawValue}>{geosesData[region?.properties.CD_MUN][metric.label].value}</data>
            )}
          </div>
        );
    }
 * 
 * 
 */

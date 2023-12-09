/* eslint-disable prettier/prettier */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState, useEffect } from 'react';
import Bar from './Bar';
import Graphic from './Graphic'; // Assuming Graphic component is in a separate file
import { formatPopulationNumber, formatValue } from '@utils/formatValue';
import { Estado } from 'src/interfaces/Estado.type';

interface MetricDetailsProps {
  props: Estado;
}

const MetricDetails = (props: MetricDetailsProps) => {
  //const [geosesData, setGeosesData] = useState(null);
  const dadoEstado = props.props;
  const isState = window.location.href.includes('/comparison_states') || window.location.href.includes('/state');

  const { pathname } = location;
  const isEnglish = pathname.includes('/en');

  // useEffect(() => {
  //   let abortController = new AbortController();
  //   let cachedData;
  //   if (isState) {
  //     cachedData = localStorage.getItem(`geosesData_${region?.properties.CD_UF}_${metric.label}`);
  //   } else {
  //     cachedData = localStorage.getItem(`geosesData_${region?.properties.CD_MUN}_${metric.label}`);
  //   }

  //   if (cachedData) {
  //     setGeosesData(JSON.parse(cachedData));
  //   } else {
  //     if (!isState && region && region.properties && region.properties.SIGLA_UF) {
  //       // Abort any ongoing fetch requests
  //       abortController.abort();
  //       abortController = new AbortController();
  //       const signal = abortController.signal;

  //       fetch(`http://3.92.188.34:8001/data/data_city_dicio/json/?cd_mun=${region.properties.CD_MUN}`, { signal })
  //         .then((response) => response.json())
  //         .then((data) => {
  //           setGeosesData(data);
  //           localStorage.setItem(`geosesData_${region?.properties.CD_MUN}_${metric.label}`, JSON.stringify(data));
  //         })
  //         .catch((error) => console.log(error));
  //     }
  //     else if (isState && region && region.properties && region.properties.SIGLA_UF) {
  //       // Abort any ongoing fetch requests
  //       abortController.abort();
  //       abortController = new AbortController();
  //       const signal = abortController.signal;

  //       fetch(`http://3.92.188.34:8001/data/data_state_dicio/json/?cd_uf=${region.properties.CD_UF}`, { signal })
  //         .then((response) => response.json())
  //         .then((data) => {
  //           setGeosesData(data);
  //           localStorage.setItem(`geosesData_${region?.properties.CD_UF}_${metric.label}`, JSON.stringify(data));
  //         })
  //         .catch((error) => console.log(error));
  //     }
  //   }
  //   // Clean up the AbortController when the effect is cleaned up
  //   return () => abortController.abort();
  // }, [region, metric]);

  const renderSingleMetric = () => {
    // if (!geosesData) {
    //   return <div>Loading data...</div>;
    // }

    // let rawValue;
    // if (isState) {
    //   rawValue = [dadoEstado.nmEstado][metric.label];
    // } else {
    //   rawValue = geosesData[region?.properties.CD_MUN][metric.label];
    // }

    // const value = typeof metric.format === 'function' ? metric.format(rawValue) : rawValue;

    // let unit;
    // if (isState) {
    //   unit = geosesData?.[region?.properties.CD_UF]?.[metric.label]?.unit;
    // } else {
    //   unit = geosesData?.[region?.properties.CD_MUN]?.[metric.label]?.unit;
    // }

    if (dadoEstado.nmFormato === 'Float .2') {
      let geosesDataValue2 = '';
      if (isState) {
        geosesDataValue2 = dadoEstado.vlPorCd === undefined ? '' : dadoEstado.vlPorCd;
      }
      const parsedValue2 = parseFloat(geosesDataValue2);
      // else {
      //   geosesDataValue2 = geosesData?.[region?.properties.CD_MUN]?.[metric.label]?.value;
      // }

      if (dadoEstado.nmUnidade === 'Número') {
        const displayValue2 = isNaN(parsedValue2)
          ? '-----'
          : parsedValue2
              .toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 3 })
              .replace(',', '.');
        if (isState) {
          return (
            <div key={dadoEstado.cdEstado}>
              <data value={geosesDataValue2}>{displayValue2}</data>
            </div>
          );
        }
        // else {
        //   return (
        //     <div key={region?.properties.CD_MUN}>
        //       <data value={geosesDataValue2}>{displayValue2}</data>
        //     </div>
        //   );
        // }
      }
      if (dadoEstado.nmUnidade === 'R$') {
        const displayValue2 = isNaN(parsedValue2)
          ? '-----'
          : parsedValue2
              .toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
              .replace(/(\d{3})\.000/, '$1');
        if (isState) {
          return (
            <div key={dadoEstado.cdEstado}>
              R$<data value={geosesDataValue2}>{displayValue2}</data>
            </div>
          );
        }
        // else {
        //   return (
        //     <div key={region?.properties.CD_MUN}>
        //       R$<data value={geosesDataValue2}>{displayValue2}</data>
        //     </div>
        //   );
        // }
      }
      if (dadoEstado.nmUnidade === 'Salários Mínimos') {
        const displayValue2 = isNaN(parsedValue2)
          ? '-----'
          : parsedValue2.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 1 });
        if (isState) {
          return (
            <div key={dadoEstado.cdEstado}>
              <data value={geosesDataValue2}>{displayValue2} </data>salários mínimos
            </div>
          );
        }
        // else {
        //   return (
        //     <div key={region?.properties.CD_MUN}>
        //       <data value={geosesDataValue2}>{displayValue2} </data>salários mínimos
        //     </div>
        //   );
        // }
      }
      if (dadoEstado.nmUnidade === 'Km²') {
        const formattedValue2 = isNaN(parsedValue2)
          ? '-----'
          : parsedValue2
              .toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
              .replace(',', '.')
              .replace(/(\d{3})\.0/, '$1');
        if (isState) {
          return (
            <div key={dadoEstado.cdEstado}>
              <data value={geosesDataValue2}>{formattedValue2} </data>km²
            </div>
          );
        }
        //  else {
        //   return (
        //     <div key={region?.properties.CD_MUN}>
        //       <data value={geosesDataValue2}>{formattedValue2} </data>km²
        //     </div>
        //   );
        // }
      }
      if (dadoEstado.nmUnidade === 'Habitante/ Km²') {
        const formattedValue2 = isNaN(parsedValue2)
          ? '-----'
          : parsedValue2
              .toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 2 })
              .replace(',', '.');
        if (isState) {
          return (
            <div key={dadoEstado.cdEstado}>
              <data value={geosesDataValue2}>{formattedValue2} </data>hab/km²
            </div>
          );
        }
        //  else {
        //   return (
        //     <div key={region?.properties.CD_MUN}>
        //       <data value={geosesDataValue2}>{formattedValue2} </data>hab/km²
        //     </div>
        //   );
        // }
      }
      if (dadoEstado.nmUnidade === 'Mbps') {
        const formattedValue2 = isNaN(parsedValue2)
          ? '-----'
          : parsedValue2
              .toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 2 })
              .replace(',', '.');
        if (isState) {
          return (
            <div key={dadoEstado.cdEstado}>
              <data value={geosesDataValue2}>{formattedValue2} </data>Mbps
            </div>
          );
        }
        //  else {
        //   return (
        //     <div key={region?.properties.CD_MUN}>
        //       <data value={geosesDataValue2}>{formattedValue2} </data>Mbps
        //     </div>
        //   );
        // }
      } else if (dadoEstado.nmUnidade === '%'){  
        return (
          <div key={dadoEstado.cdEstado}>
            {isNaN(parsedValue2)? (
              <div>-----</div> // Replace with the desired action for NaN value
            ) : (
              <data value={geosesDataValue2}>{`${parsedValue2}%`}</data>
            )}
          </div>
        );
      } else {
        return (
          <div key={dadoEstado.cdEstado}>
            {isNaN(parsedValue2)? (
              <div>-----</div> // Replace with the desired action for NaN value
            ) : (
              <data value={geosesDataValue2}>{`${parsedValue2.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 2 }).replace(',', '.')}`}</data>
            )}
          </div>
        );
      }
    } else if (dadoEstado.nmFormato === 'Int') {
      let geosesDataValue = '';
      if (isState) {
        geosesDataValue = dadoEstado.vlPorCd === undefined ? '' : dadoEstado.vlPorCd;
      }
      // else {
      //   geosesDataValue2 = geosesData?.[region?.properties.CD_MUN]?.[metric.label]?.value;
      // }
      const parsedValue = parseFloat(geosesDataValue);
      const formattedValue = isNaN(parsedValue)
        ? '-----'
        : parsedValue.toLocaleString('pt-BR', { useGrouping: true }).replace(',', '.'); // Format to locale string
      if (isState) {
        return (
          <div key={dadoEstado.cdEstado}>
            <data value={geosesDataValue}>{formattedValue}</data>
          </div>
        );
      }
      //  else {
      //   return (
      //     <div key={region?.properties.CD_MUN}>
      //       <data value={geosesDataValue}>{formattedValue}</data>
      //     </div>
      //   );
      // }
    } else if (dadoEstado.nmFormato === 'Progress Bar') {
      let geosesDataValue2 = '';
      if (isState) {
        geosesDataValue2 = dadoEstado.vlPorCd === undefined ? '0' : dadoEstado.vlPorCd;
      }

      // Calculate the percentage value of the progress bar
      const percentage = parseFloat(((parseFloat(geosesDataValue2) / 100) * 100).toFixed(2));

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

      if (isState) {
        return (
          <div key={dadoEstado.cdEstado}>
            <div style={progressBarStyle}>
              <div style={progressBarFilledStyle}>
                {geosesDataValue2}%
              </div>
            </div>
          </div>
        );
      }
      // else {
      //   return (
      //     <div key={region.properties.CD_MUN}>
      //       <div style={progressBarStyle}>
      //         <div style={progressBarFilledStyle}>{value}%</div>
      //       </div>
      //     </div>
      //   );
      // }
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

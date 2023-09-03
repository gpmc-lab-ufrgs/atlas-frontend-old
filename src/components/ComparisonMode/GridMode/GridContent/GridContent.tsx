import React, { useEffect, useState } from 'react';
import { Tooltip } from '@mui/material';
import Collapsible from '@components/Collapsible';
import MetricDetails from '@components/MetricDetails';
import { MapPropsContentType, MapPropsSectionType } from '@customTypes/map';
import { District } from '@customTypes/district';
import { State } from '@customTypes/state';
import * as Styles from './styles';

let comparison;
const isState = window.location.href.includes('/comparison_states');

if (isState) {
  interface Props {
    comparison: Array<State>;
  }
} else {
  interface Props {
    comparison: Array<District>;
  }
}

interface DictionaryData {
  title: string;
  content: Array<MapPropsContentType>;
}

const GridContent: React.FC<Props> = ({ comparison }) => {
  const [dictionaryData, setDictionaryData] = useState<Array<DictionaryData>>([]);

  useEffect(() => {
    async function fetchData() {
      let apiUrl = 'http://3.92.188.34:8001/dictionary/dictionary/json/';

      if (window.location.pathname.includes('/comparison_state')) {
        apiUrl = 'http://3.92.188.34:8001/dictionary/dictionary_state/json/';
      }

      const response = await fetch(apiUrl);
      const data = await response.json();
      setDictionaryData(data);
    }

    fetchData();
  }, []);

  const isEnglish = window.location.href.includes('/comparison_en') || window.location.href.includes('/comparison_states_en');

  // Define the order of sections
  const sectionOrder = isEnglish
              ? [
                  'Demographic',
                  'Economy',
                  'Entrepreneurship',
                  'Education',
                  'Health',
                  'Safety',
                  'Urbanism',
                  'Technology and inovation',
                  'Environment',
                  'Mobility'
                ]
              : [
                  'Demográfica',
                  'Economia',
                  'Empreendedorismo',
                  'Educação',
                  'Saúde',
                  'Segurança',
                  'Urbanismo',
                  'Tecnologia e Inovação',
                  'Meio Ambiente',
                  'Mobilidade'
                ];

  // Sort the sections based on the predefined order
  const sortedSections = dictionaryData.sort((a, b) => {
    return sectionOrder.indexOf(a.title) - sectionOrder.indexOf(b.title);
  });

  const isStatee = window.location.href.includes('/comparison_states');

  return (
    <>
      {sortedSections.map((section: DictionaryData) => (
        <Collapsible isTitle={true} title={isEnglish ? section.title_english : section.title} key={isEnglish ? section.title_english : section.title}>
          <Styles.GridContainer>
            {section.content.map((content: MapPropsContentType, id) => (
              <>
                {!content.nestedData && content.title !== "População Estimada em 2017" &&
              content.title !== "População Estimada em 2018" &&
              content.title !== "População Estimada em 2019" &&
              content.title !== "População Estimada em 2020" &&
              content.title !== "Estimated Population in 2017" &&
              content.title !== "Estimated Population in 2018" &&
              content.title !== "Estimated Population in 2019" &&
              content.title !== "Estimated Population in 2020" &&
              content.title !== "População" &&
              content.title !== "Population" ? (
                  <Styles.Grid key={id}>
                    <Tooltip title={isEnglish ? content.description_en : content.description}>
                      <Styles.Title>
                        <h2>{isEnglish ? content.title_en : content.title}</h2>
                      </Styles.Title>
                    </Tooltip>
                    <Styles.GridItem>
                      {comparison.map((region, idx) => (
                        <Styles.ComparisonLabel key={idx}>
                        {isStatee ? (
                          <Tooltip title={region?.properties.NM_UF}>
                            <label>{region?.properties.NM_UF}</label>
                          </Tooltip>
                          ) : (
                          <Tooltip title={region?.properties.NM_MUN}>
                            <label>{region?.properties.NM_MUN} </label>
                          </Tooltip>
                           )}
                          <MetricDetails region={region} metric={content} />
                        </Styles.ComparisonLabel>
                      ))}
                    </Styles.GridItem>
                  </Styles.Grid>
                ) : null}
              </>
            ))}
          </Styles.GridContainer>
        </Collapsible>
      ))}
    </>
  );
};

export default GridContent;

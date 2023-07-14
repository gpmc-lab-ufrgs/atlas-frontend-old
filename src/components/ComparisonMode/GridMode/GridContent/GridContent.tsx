import React, { useEffect, useState } from 'react';
import { Tooltip } from '@mui/material';
import Collapsible from '@components/Collapsible';
import MetricDetails from '@components/MetricDetails';
import { MapPropsContentType, MapPropsSectionType } from '@customTypes/map';
import { District } from '@customTypes/district';
import * as Styles from './styles';

interface Props {
  comparison: Array<District>;
}

interface DictionaryData {
  title: string;
  content: Array<MapPropsContentType>;
}

const GridContent: React.FC<Props> = ({ comparison }) => {
  const [dictionaryData, setDictionaryData] = useState<Array<DictionaryData>>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://3.92.188.34:8001/dictionary/dictionary/json/');
      const data = await response.json();
      setDictionaryData(data);
    }
    fetchData();
  }, []);

  const isEnglish = window.location.href.includes('/comparisonn');

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

  return (
    <>
      {sortedSections.map((section: DictionaryData) => (
        <Collapsible isTitle={true} title={isEnglish ? section.title_english : section.title} key={isEnglish ? section.title_english : section.title}>
          <Styles.GridContainer>
            {section.content.map((content: MapPropsContentType, id) => (
              <>
                {!content.nestedData ? (
                  <Styles.Grid key={id}>
                    <Tooltip title={isEnglish ? content.description_en : content.description}>
                      <Styles.Title>
                        <h2>{isEnglish ? content.title_en : content.title}</h2>
                      </Styles.Title>
                    </Tooltip>
                    <Styles.GridItem>
                      {comparison.map((district, idx) => (
                        <Styles.ComparisonLabel key={idx}>
                          <Tooltip title={district?.properties.NM_MUN}>
                            <label>{district?.properties.NM_MUN}</label>
                          </Tooltip>
                          <MetricDetails district={district} metric={content} />
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

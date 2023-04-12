import React, { useEffect, useState } from 'react';

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
      const response = await fetch('http://127.0.0.1:8000/dictionary/dictionary/json/');
      const data = await response.json();
      setDictionaryData(data);
    }
    fetchData();
  }, []);

  return (
    <>
      {dictionaryData.map((section: DictionaryData) => (
        <Collapsible isTitle={true} title={section.title} key={section.title}>
          <Styles.GridContainer>
            {section.content.map((content: MapPropsContentType, id) => (
              <>
                {!content.nestedData ? (
                  <Styles.Grid key={id}>
                    <Styles.Title>
                      <h2>{content.title}</h2>
                    </Styles.Title>
                    <Styles.GridItem>
                      {comparison.map((district, idx) => (
                        <Styles.ComparisonLabel key={idx}>
                          <label title={district?.properties.NM_MUN}>{district?.properties.NM_MUN}</label> {/* title */}
                          <MetricDetails district={district} metric={content} /> {/* metric */}
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

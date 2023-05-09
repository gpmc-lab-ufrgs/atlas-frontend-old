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

  return (
    <>
      {dictionaryData.map((section: DictionaryData) => (
        <Collapsible isTitle={true} title={section.title} key={section.title}>
          <Styles.GridContainer>
            {section.content.map((content: MapPropsContentType, id) => (
              <>
                {!content.nestedData ? (
                  <Styles.Grid key={id}>
                    <Tooltip title={content.description}>
                      <Styles.Title>
                        <h2>{content.title}</h2>
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

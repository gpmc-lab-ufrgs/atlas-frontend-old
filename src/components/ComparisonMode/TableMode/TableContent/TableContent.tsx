import React, { useEffect, useState } from 'react';
import { Tooltip } from '@mui/material';

import Collapsible from '@components/Collapsible';
import MetricDetails from '@components/MetricDetails';
import { District } from '@customTypes/district';

import * as Styles from './styles';

interface Props {
  comparison: Array<District>;
}

interface DictionaryData {
  title: string;
  content: Array<{
    title: string;
    description?: string;
    nestedData?: Array<{
      title: string;
      description?: string;
    }>;
  }>;
}

const TableContent: React.FC<Props> = ({ comparison }) => {
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
          {section.content.map((content, id) => (
            <>
              {!content.nestedData ? (
                <Styles.Table lineTableNumber={id} key={id}>
                  <Tooltip
                    title={
                      <div>
                        <div>{content.description}</div>
                      </div>
                    }
                  >
                    <Styles.ColumnTitle>{content.title}</Styles.ColumnTitle>
                  </Tooltip>
                  {comparison.map((region, idx) => (
                    <Styles.Column gridColumnNumber={idx + 2} key={idx}>
                      <MetricDetails district={region} metric={content} />
                    </Styles.Column>
                  ))}
                </Styles.Table>
              ) : (
                <Collapsible isTitle={false} title={content.title}>
                  {content.nestedData?.map((data, index) => (
                    <div key={index}>
                      <Styles.Table lineTableNumber={index} key={index}>
                        <Tooltip
                          title={
                            <div>
                              <div>{data.title}</div>
                              <div>{data.description}</div>
                            </div>
                          }
                        >
                          <Styles.ColumnTitle>{data.title}</Styles.ColumnTitle>
                        </Tooltip>
                        {comparison.map((region, idx) => (
                          <Styles.Column gridColumnNumber={idx + 2} key={idx}>
                            <MetricDetails district={region} metric={data} />
                          </Styles.Column>
                        ))}
                      </Styles.Table>
                    </div>
                  ))}
                </Collapsible>
              )}
            </>
          ))}
        </Collapsible>
      ))}
    </>
  );
};

export default TableContent;

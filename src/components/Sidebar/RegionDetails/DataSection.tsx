import React from 'react';

import Collapsible from '@components/Collapsible';
import MetricDetails from '@components/MetricDetails';

import { useSelectedDistrict } from '@context/district/selectedContext';
import { useComparison } from '@context/comparisonContext';

import { MapPropsContentType, MapPropsSectionType } from '@customTypes/map';

import { Tooltip } from '@mui/material';

import { CollapsibleContent } from './CollapsibleContent';

import * as Styles from './styles';

const DataSection: React.FC<MapPropsSectionType> = ({ title, content }) => {
  const { selected } = useSelectedDistrict();
  const { comparison } = useComparison();

  const isSelectedOnComparison = comparison.some(
    (region) => region.properties.MUNICIPALITY_CODE === selected?.properties.MUNICIPALITY_CODE,
  );

  const hasSelectedDistrict = Boolean(selected);

  return (
    <Collapsible isTitle={true} title={title}>
      {content.map((props: MapPropsContentType, id) => (
        <Styles.PropsWrapper key={id}>
          {!props.nestedData ? (
            <CollapsibleContent props={props} />
          ) : (
            <>
              <Collapsible isTitle={false} title={props.title}>
                {comparison && (
                  <>
                    {props.nestedData?.map((data, index) => (
                      <div key={index}>
                        <CollapsibleContent props={props} />
                      </div>
                    ))}
                  </>
                )}

                {!isSelectedOnComparison && !comparison.length && hasSelectedDistrict && (
                  <>
                    {props.nestedData.map((data, index) => (
                      <div key={index}>
                        <Tooltip title={data.description} arrow>
                          <Styles.PropsTitle>{data.title}</Styles.PropsTitle>
                        </Tooltip>
                        <Styles.ValueContent>
                          <p>{selected?.properties.MUNICIPALITY_NAME}</p>
                          <MetricDetails district={selected} metric={data} />
                        </Styles.ValueContent>
                      </div>
                    ))}
                  </>
                )}
              </Collapsible>
            </>
          )}
        </Styles.PropsWrapper>
      ))}
    </Collapsible>
  );
};

export default DataSection;

import React from 'react';

import Collapsible from '@components/Collapsible';

import { useComparison } from '@context/comparisonContext';
import { useSelectedState } from '@context/state/selectedContext';

import { MapPropsContentType, MapPropsSectionType } from '@customTypes/map';

import { Tooltip } from '@mui/material';

import MetricStateDetails from '@components/MetricDetails/MetricStateDetails';
import { CollapsibleContent } from './CollapsibleContent';
import * as Styles from './styles';

const DataSection: React.FC<MapPropsSectionType> = ({ title, content }) => {
  const { selected } = useSelectedState();
  const { comparison } = useComparison();

  const isSelectedOnComparison = comparison.some((region) => region.properties.CD_MUN === selected?.properties.CD_UF);

  const hasSelectedState = Boolean(selected);

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

                {!isSelectedOnComparison && !comparison.length && hasSelectedState && (
                  <>
                    {props.nestedData.map((data, index) => (
                      <div key={index}>
                        <Tooltip title={data.description} arrow>
                          <Styles.PropsTitle>{data.title}</Styles.PropsTitle>
                        </Tooltip>
                        <Styles.ValueContent>
                          <p>{selected?.properties.NM_UF}</p>
                          <MetricStateDetails state={selected} metric={props} />
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

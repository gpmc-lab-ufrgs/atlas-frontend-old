import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { sidebarContext, SidebarContext } from '@store/sidebarContext';
import { comparisonContext, ComparisonContext } from '@store/comparisonContext';
import { selectedDistrictsContext, DistrictActions as DistrictSelectedActions } from '@store/district/selectedContext';
import {
  highlightedDistrictsContext,
  DistrictActions as DistrictHighlightedActions,
} from '@store/district/highlightedContext';
import { selectedStatesContext, StateActions as StateSelectedActions } from '@store/state/selectedContext';
import { highlightedStatesContext, StateActions as StateHighlightedActions } from '@store/state/highlightedContext';

import {
  comparison,
  sidebarOpen,
  districtHighlighted,
  districtSelected,
  stateHighlighted,
  stateSelected,
} from '../mocks';

export interface Props {
  districtSelectedMock?: DistrictSelectedActions;
  districtHighlightedMock?: DistrictHighlightedActions;
  stateSelectedMock?: StateSelectedActions;
  stateHighlightedMock?: StateHighlightedActions;
  sidebarMock?: SidebarContext;
  comparisonMock?: ComparisonContext;
  children?: React.ReactNode;
}

export const Providers: React.FC<Props> = ({
  children,
  districtSelectedMock = districtSelected,
  districtHighlightedMock = districtHighlighted,
  stateSelectedMock = stateSelected,
  stateHighlightedMock = stateHighlighted,
  comparisonMock = comparison,
  sidebarMock = sidebarOpen,
}) => {
  return (
    <BrowserRouter>
      <selectedDistrictsContext.Provider value={districtSelectedMock}>
        <highlightedDistrictsContext.Provider value={districtHighlightedMock}>
          <selectedStatesContext.Provider value={stateSelectedMock}>
            <highlightedStatesContext.Provider value={stateHighlightedMock}>
              <comparisonContext.Provider value={comparisonMock}>
                <sidebarContext.Provider value={sidebarMock}>{children}</sidebarContext.Provider>
              </comparisonContext.Provider>
            </highlightedStatesContext.Provider>
          </selectedStatesContext.Provider>
        </highlightedDistrictsContext.Provider>
      </selectedDistrictsContext.Provider>
    </BrowserRouter>
  );
};

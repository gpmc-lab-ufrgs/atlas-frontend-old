import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { Providers, Props as Options } from '@tests/helpers/providers';

type ComponentOptions = Omit<RenderOptions, 'wrapper'> & Options;

type HookOptions = Omit<RenderOptions, 'wrapper'> & Options;

type Hook<P, R> = (props: P) => R;

import {
  districtSelected,
  districtHighlighted,
  stateSelected,
  stateHighlighted,
  comparison,
  sidebarOpen,
} from './mocks';

const customRender = (ui: JSX.Element, options?: ComponentOptions) => {
  const {
    districtSelectedMock,
    districtHighlightedMock,
    stateSelectedMock,
    stateHighlightedMock,
    comparisonMock,
    sidebarMock,
  } = options || {};

  return render(ui, {
    wrapper: ({ children }) => (
      <Providers
        districtSelectedMock={districtSelectedMock || districtSelected}
        districtHighlightedMock={districtHighlightedMock || districtHighlighted}
        stateSelectedMock={stateSelectedMock || stateSelected}
        stateHighlightedMock={stateHighlightedMock || stateHighlighted}
        comparisonMock={comparisonMock || comparison}
        sidebarMock={sidebarMock || sidebarOpen}
      >
        {children}
      </Providers>
    ),
  });
};

const customRenderHook = <HookProps, HookReturn>(hook: Hook<HookProps, HookReturn>, options?: HookOptions) => {
  const {
    districtSelectedMock,
    districtHighlightedMock,
    stateSelectedMock,
    stateHighlightedMock,
    comparisonMock,
    sidebarMock,
  } = options || {};

  return renderHook<HookProps, HookReturn>(hook, {
    wrapper: ({ children }) => (
      <Providers
        districtSelectedMock={districtSelectedMock || districtSelected}
        districtHighlightedMock={districtHighlightedMock || districtHighlighted}
        stateSelectedMock={stateSelectedMock || stateSelected}
        stateHighlightedMock={stateHighlightedMock || stateHighlighted}
        comparisonMock={comparisonMock || comparison}
        sidebarMock={sidebarMock || sidebarOpen}
      >
        {children}
      </Providers>
    ),
  });
};

export { customRender as render, customRenderHook as renderHook };

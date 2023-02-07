import { useState } from 'react';

import { District } from '@customTypes/district';
import { State } from '@customTypes/state';

export const DEFAULT_VALUE = {
  all: [],
  selected: null,
  setSelected: () => {},
  highlighted: null,
  setHighlighted: () => {},
  resetValues: () => {},
};

interface Props {
  allFeatures: Array<District | State>;
}

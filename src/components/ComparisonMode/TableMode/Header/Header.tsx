import React from 'react';

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

const Header: React.FC<Props> = ({ comparison }) => {
  return (
    <Styles.TableHeader>
      {comparison.map((region, id) => (
        <Styles.TableItens key={id} gridColumnNumber={id + 2}>

          {isState ? region.properties.NM_UF : region.properties.NM_MUN}
        </Styles.TableItens>
      ))}
    </Styles.TableHeader>
  );
};

export default Header;

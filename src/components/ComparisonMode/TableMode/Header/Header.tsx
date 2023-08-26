import React from 'react';

import { District } from '@customTypes/district';
import { State } from '@customTypes/state';

import * as Styles from './styles';

const Header: React.FC<Props> = ({ comparison }) => {
  const isState = window.location.href.includes('/comparison_states');

  return (
    <Styles.TableHeader>
      {comparison.map((region, id) => {
        const regionName = isState ? region.properties.NM_UF : region.properties.NM_MUN;

        return (
          <Styles.TableItens key={id} gridColumnNumber={id + 2}>
            {regionName}
          </Styles.TableItens>
        );
      })}
    </Styles.TableHeader>
  );
};

export default Header;

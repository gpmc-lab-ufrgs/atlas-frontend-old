import React from "react";

import { Feature } from "@store/contexts/featuresContext";

import * as Styles from "./styles";

interface Props {
  comparison: Array<Feature>;
}

const Header: React.FC<Props> = ({ comparison }) => {
  return (
    <Styles.TableHeader>
      {comparison.map((region, id) => (
        <Styles.TableItens key={id} gridColumnNumber={id + 2}>
          {region.properties.NM_MUN}
        </Styles.TableItens>
      ))}
    </Styles.TableHeader>
  );
};

export default Header;

import mapboxgl, { GeoJSONSource } from 'mapbox-gl';

import { State } from '@customTypes/state';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { formatPopulationNumber } from '@utils/formatValue';

import { fitStateBounds, handleCleanStateLayer } from '../hook/useStateLayer/stateActions';
import * as Styles from './styles';
import { getDistrictBySigla } from 'src/services/district';
import { District } from '@customTypes/district';
import { RSColors } from '../hook/useDistrictLayer/const';
import { fitDistrictBounds } from '../hook/useDistrictLayer/districtActions';
interface Props {
  regionName: string;
  reference: mapboxgl.Map;
  feature: State;
}

export default function ClickablePopup({ regionName, reference, feature }: Props) {
  const handleStateSelection = async (sigla: string | undefined, ref: mapboxgl.Map) => {
    await getDistrictBySigla(String(sigla)).then((response) => {
      (ref.getSource('district') as GeoJSONSource).setData(response);
    });
  };

  return (
    <Styles.Popup>
      <Styles.ClickableSection
        onClick={() => {
          handleCleanStateLayer(reference);
          fitStateBounds(feature, reference);
          handleStateSelection(feature.properties?.SIGLA_UF, reference);
        }}
      >
        <Styles.PopupText>{regionName}</Styles.PopupText>
        <Styles.IconWrapper className="iconAction">
          <ChevronRightIcon fontSize="small" />
        </Styles.IconWrapper>
      </Styles.ClickableSection>

      <Styles.PopupContent>
        <Styles.PopupText>População: {formatPopulationNumber(feature.properties?.POPULATION)}</Styles.PopupText>
      </Styles.PopupContent>
    </Styles.Popup>
  );
}

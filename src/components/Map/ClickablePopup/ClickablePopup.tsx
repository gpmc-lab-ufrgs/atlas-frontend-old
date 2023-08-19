import mapboxgl from 'mapbox-gl';
import { State } from '@customTypes/state';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { formatPopulationNumber } from '@utils/formatValue';
import { fitStateBounds, handleCleanStateLayer, onAddStateToComparison } from '../hook/useStateLayer/stateActions';
import * as Styles from './styles';

interface Props {
  regionName: string;
  reference: mapboxgl.Map;
  feature: State;
  onAddToComparison: () => void;
}

export default function ClickablePopup({ regionName, reference, feature, onAddToComparison }: Props) {

  return (
    <Styles.Popup>
      <Styles.ClickableSection
        onClick={() => {
          handleCleanStateLayer(reference);
          fitStateBounds(feature, reference);
        }}
      >
        <Styles.PopupText>{regionName}</Styles.PopupText>
        <Styles.IconWrapper className="iconAction">
          <ChevronRightIcon fontSize="small" />
        </Styles.IconWrapper>
      </Styles.ClickableSection>

      <Styles.PopupContent>
        <Styles.PopupText>Population: {formatPopulationNumber(feature.properties?.POPULATION)}</Styles.PopupText>
        {/* <Styles.ButtonWrapper>
          <Styles.Button onClick={() => {
          onAddStateToComparison(feature, reference);
        }}>Add state to comparison</Styles.Button>
        </Styles.ButtonWrapper> */}
      </Styles.PopupContent>
    </Styles.Popup>
  );
}

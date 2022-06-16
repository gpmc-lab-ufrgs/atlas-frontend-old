import React, { useEffect, useState } from 'react';

import { useSidebar } from '@store/sidebarContext';
import { useSelectedState } from '@store/state/selectedContext';
import { useSelectedDistrict } from '@store/district/selectedContext';

import Drawer from '@components/Drawer';

import SearchBar from './SearchBar';
import ComparisonControl from './ComparisonControl';
import ProjectInformations from './ProjectInformations';

import * as Styles from './styles';

interface Props {
  isComparisonModeOn: boolean;
  comparisonType: string;
  setComparisonType(value: string): void;
}

const Header: React.FC<Props> = ({ isComparisonModeOn, comparisonType, setComparisonType }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedLayer, setSelectedLayer] = useState('country');

  const { selected: selectedState } = useSelectedState();
  const { selected } = useSelectedDistrict();

  useEffect(() => {
    if (selected) {
      setSelectedLayer('district');
    } else if (selectedState && !selected) {
      setSelectedLayer('state');
    } else {
      setSelectedLayer('country');
    }

    console.log(selectedLayer, selected, selectedState);
  }, [selected, selectedState]);

  const returnPath = () => {
    if (selectedLayer === 'district') {
      return (
        <>
          &nbsp;-&nbsp;
          <div className="state"> {selectedState?.properties.NM_UF} </div>
          &nbsp; - <div className="district">{selected?.properties.NM_MUN}</div>
        </>
      );
    } else if (selectedLayer === 'state') {
      return (
        <>
          &nbsp;-&nbsp;
          <div className="state"> {selectedState?.properties.NM_UF} </div>
        </>
      );
    }
  };

  const { isSidebarOpen } = useSidebar();

  if (isComparisonModeOn) {
    return (
      <Styles.HeaderContainer comparisonMode isSidebarOpen={isSidebarOpen}>
        <Styles.HeaderCenterSide>
          <ComparisonControl comparisonType={comparisonType} setComparison={setComparisonType} />
        </Styles.HeaderCenterSide>

        <Styles.HeaderRightSide>
          <Styles.MenuButton comparisonMode onClick={() => setOpenMenu(true)} />

          <Drawer open={openMenu} setOpen={setOpenMenu} anchor="right">
            <ProjectInformations setOpen={setOpenMenu} />
          </Drawer>
        </Styles.HeaderRightSide>
      </Styles.HeaderContainer>
    );
  }

  return (
    <Styles.HeaderContainer isSidebarOpen={isSidebarOpen}>
      <Styles.HeaderLeftSide>
        <SearchBar />
        <Styles.ReturnRoute>
          <div className="country"> Brasil </div>
          {returnPath()}
        </Styles.ReturnRoute>
      </Styles.HeaderLeftSide>

      <Styles.HeaderRightSide>
        <Styles.MenuButton onClick={() => setOpenMenu(true)} />

        <Drawer open={openMenu} setOpen={setOpenMenu} anchor="right">
          <ProjectInformations setOpen={setOpenMenu} />
        </Drawer>
      </Styles.HeaderRightSide>
    </Styles.HeaderContainer>
  );
};

export default Header;

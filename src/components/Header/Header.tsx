import React, { useState } from 'react';

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

  const { selected: selectedState } = useSelectedState();
  const { selected } = useSelectedDistrict();

  console.log(selectedState, selected);

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
        {selectedState && (
          <Styles.ReturnRoute>
            Brasil - {selectedState.properties.NM_UF} {selected && <div>&nbsp;- {selected.properties.NM_MUN}</div>}
          </Styles.ReturnRoute>
        )}
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

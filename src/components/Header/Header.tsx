import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useSidebar } from '@context/sidebarContext';
import Drawer from '@components/Drawer';
import SearchBar from './SearchBar';
import ComparisonControl from './ComparisonControl';
import ProjectInformations from './ProjectInformations';
import * as Styles from './styles';
import LayerRoute from './LayerRoute';

import ptImage from './icon_pt.png';
import enImage from './icon_en.png';

import atlasImage from './atlas_website.png'

interface Props {
  isComparisonModeOn: boolean;
  comparisonType: string;
  setComparisonType(value: string): void;
}

const Header: React.FC<Props> = ({ isComparisonModeOn, comparisonType, setComparisonType }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { isSidebarOpen } = useSidebar();

  const location = useLocation();
  const navigate = useNavigate();

  const { pathname } = location;
  const isEnglish = pathname.includes('/en');

  const isState = pathname.includes('/state');
  const isDistrict = pathname.includes('/district');

  if (comparisonType !== 'table' && comparisonType !== 'grid') {
    return <div />;
  }

  if (isComparisonModeOn) {
    return (
      <Styles.HeaderContainer comparisonMode isSidebarOpen={isSidebarOpen}>
        <Styles.HeaderCenterSide>
          <ComparisonControl comparisonType={comparisonType} setComparison={setComparisonType} />
        </Styles.HeaderCenterSide>

        <Styles.HeaderRightSide>
          {/*<div aria-label="menu-button">
            <Styles.MenuButton comparisonMode onClick={() => setOpenMenu(true)} />
          </div> */}

          <Drawer open={openMenu} setOpen={setOpenMenu} anchor="right">
            <ProjectInformations setOpen={setOpenMenu} />
          </Drawer>
        </Styles.HeaderRightSide>
      </Styles.HeaderContainer>
    );
  }

  const handleLanguageChange = () => {
    if (isEnglish) {
      if(isState){
        navigate('/state');
      }else if(isDistrict){
        navigate('/district');
      }else{
        navigate('/');
      }
    } else {
      if(isState){
        navigate('/en/state');
      }else if(isDistrict){
        navigate('/en/district');
      }else{
        navigate('/en');
      }
    }
  };

  return (
    <Styles.HeaderContainer isSidebarOpen={isSidebarOpen}>
      <Styles.HeaderLeftSide>
        <SearchBar />
        <LayerRoute />
      </Styles.HeaderLeftSide>

      <Styles.HeaderRightSide>
        <div>
          {isEnglish ? (
            <>
              <button onClick={handleLanguageChange}>
                <img src={ptImage} alt="Image" style={{ maxWidth: '25px' }} />
              </button>
              <a href="https://www.ufrgs.br/atlas-oportunidades/" target="_blank" rel="noopener noreferrer">
                <button>Access Atlas website</button>
              </a>
            </>
          ) : (
            <>
              <button onClick={handleLanguageChange}>
                <img src={enImage} alt="Image" style={{ maxWidth: '25px' }} />
              </button>
              <a href="https://www.ufrgs.br/atlas-oportunidades/" target="_blank" rel="noopener noreferrer">
                <button>Acessar Atlas website</button>
              </a>
            </>
          )}
        </div>

        <Drawer open={openMenu} setOpen={setOpenMenu} anchor="right">
          <ProjectInformations setOpen={setOpenMenu} />
        </Drawer>
      </Styles.HeaderRightSide>
    </Styles.HeaderContainer>
  );
};

export default Header;

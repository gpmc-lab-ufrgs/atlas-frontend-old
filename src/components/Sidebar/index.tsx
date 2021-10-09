
import { Legend, SearchBar, RegionDetails, SidebarButton } from './components'
import { useFeatures, useSidebar } from "../../store"
import "./styles.css"

export const Sidebar = () => {
  const { selectedFeature } = useFeatures();
  const { sidebarIsOpen } = useSidebar();

  return (
    <div className="sidebar">
      {!sidebarIsOpen && <SearchBar /> }
      {selectedFeature !== null &&
        <>
          <SidebarButton />
          {!sidebarIsOpen && <RegionDetails />}
        </>
      }
      <Legend />
    </div>
  )
};


import { Legend, SearchBar, RegionDetails, MinimizerSidebarButton, ComparisonDetails } from './components'
import { useFeatures, useSidebar } from "../../store"
import "./styles.css"

export const Sidebar = ({comparison}: any) => {
  const { selectedFeature } = useFeatures();
  const { sidebarIsOpen } = useSidebar();

  return (
    <div className="sidebar">
      { comparison ?
          <>
            <MinimizerSidebarButton />
            {!sidebarIsOpen && <ComparisonDetails />}
          </>
        :
          <>
            {(selectedFeature === null || !sidebarIsOpen) && <SearchBar /> }
            {selectedFeature !== null &&
              <>
                <MinimizerSidebarButton />
                {!sidebarIsOpen && <RegionDetails />}
              </>
            }
            <Legend />
          </>
      }
    </div>
  )
};

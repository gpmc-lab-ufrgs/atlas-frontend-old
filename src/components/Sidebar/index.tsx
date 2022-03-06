import {
  Legend,
  RegionDetails,
  MinimizerSidebarButton,
  ComparisonDetails,
} from "./components";

import SearchBar from "@components/SearchBar";
import { useFeatures, useSidebar } from "../../store";
import "./styles.css";

export const Sidebar = ({ comparison }: any) => {
  const { selectedFeature } = useFeatures();
  const { sidebarIsOpen } = useSidebar();

  return (
    <div className="sidebar">
      {comparison ? (
        <>
          <MinimizerSidebarButton />
          {sidebarIsOpen && <ComparisonDetails />}
        </>
      ) : (
        <>
          {selectedFeature !== null && (
            <>
              <SearchBar />
              <MinimizerSidebarButton />
              {sidebarIsOpen && <RegionDetails />}
            </>
          )}
          {/*<Legend />*/}
        </>
      )}
    </div>
  );
};

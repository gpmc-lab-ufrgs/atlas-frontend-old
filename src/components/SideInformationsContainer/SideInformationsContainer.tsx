import { ExplanationCard } from "../ExplanationCard";
import { useSidebar } from "@store/sidebarContext";
import { useTheme } from "@mui/material/styles";
import * as Styles from "./styles";

export default function SideInformationsContainer(){

    const { isSidebarOpen } = useSidebar();
    const theme = useTheme();

    return(
        <Styles.SideInformationsContainer 
        theme={theme}
        isSidebarOpen={isSidebarOpen}
        >
            {/* <ExplanationCard/> */}
            
        </Styles.SideInformationsContainer>
    )
}
import { CardContent } from "./CardContent";
import { useSidebar } from "@store/sidebarContext";
import { useTheme } from "@mui/material/styles";
import * as Styles from "./styles";

export default function SummaryCard(){

    const { isSidebarOpen } = useSidebar();
    const theme = useTheme();

    return(
        <Styles.SideInformationsContainer 
        theme={theme}
        isSidebarOpen={isSidebarOpen}
        >
            <CardContent/>
        </Styles.SideInformationsContainer>
    )
}
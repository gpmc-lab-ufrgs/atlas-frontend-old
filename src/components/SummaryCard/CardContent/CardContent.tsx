import { useState } from "react";
import { useHistory } from "react-router-dom";

import CloseIcon from '@mui/icons-material/Close';
import { Box, Button } from "@mui/material";

import * as Styles from "./styles";

export default function CardContent() {
    const [hasSummaryCard, setHasSummaryCard] = useState(false);
    const history = useHistory();

    const handleCloseCard = () => { setHasSummaryCard(true) };
    const handleRedirect = () => { history.push("/aboutTheAtlas") }
    
    if(hasSummaryCard){
        return <></>
    }

    return (
        <Styles.Container>
            <Box py="20px" px="25px">
                <Box display="flex" justifyContent="flex-end">
                    <CloseIcon onClick={handleCloseCard} cursor="pointer" />
                </Box>

                <Styles.Title>Atlas Of Opportunity</Styles.Title>
                <Styles.Text>
                    Recent research has revealed a connection
                    between people's mobility and the economy — areas with diverse community movement patterns
                    are more likely to experience higher economic growth. This version of the Atlas aims to make
                    such insights accessible to small business owners and government planners.
                </Styles.Text>

                <Button variant="outlined" color="primary" onClick={handleRedirect}>Saiba mais...</Button>
            </Box>
        </Styles.Container>
    )
}
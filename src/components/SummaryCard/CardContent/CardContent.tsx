import { useState } from "react";
import * as Styles from "./styles";

export default function CardContent(){
    const [cardStatus, setCardStatus] = useState(false);

    return(
        <Styles.CardContentContainer isCardClosed={ cardStatus } >
            <Styles.CardContentCloseIcon onClick={ ()=>{setCardStatus(true); }} />
            <Styles.CardContentTitle>Atlas Of Opportunity</Styles.CardContentTitle>
            <Styles.CardContentText>
                        Recent research has revealed a connection 
                        between people's mobility and the economy — areas with diverse community movement patterns 
                        are more likely to experience higher economic growth. This version of the Atlas aims to make 
                        such insights accessible to small business owners and government planners. <br/><br/>
                        <Styles.ExplanationCardReadMore>Read more...</Styles.ExplanationCardReadMore>
            </Styles.CardContentText>

        </Styles.CardContentContainer>
    )
}
import { useState } from "react";
import * as Styles from "./styles";

export default function ExplanationCard(){
    const [cardStatus, setCardStatus] = useState(false);

    return(
        <Styles.ExplanationContainer isCardClosed={ cardStatus } >
            <Styles.ExplanationCardCloseIcon onClick={ ()=>{ setCardStatus(true); }  }  width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/Styles.ExplanationCardCloseIcon" 
            >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.439341 9.43589C-0.146446 10.0217 -0.146447 10.9714 0.439339 11.5572C1.02513 12.143 1.97487 
                12.143 2.56066 11.5572L5.99813 8.11976L9.43568 11.5573C10.0215 12.1431 10.9712 12.1431 11.557 11.5573C12.1428 10.9715 12.1428 10.0218 11.557 
                9.43598L8.11937 5.99836L11.557 2.56075C12.1428 1.97496 12.1428 1.02521 11.557 0.439425C10.9712 -0.146362 10.0215 -0.146363 9.43568 
                0.439423L5.99821 3.87688L2.56066 0.439339C1.97487 -0.146447 
                1.02512 -0.146446 0.439339 0.439341C-0.146447 1.02513 -0.146446 1.97488 0.439341 2.56066L3.87696 5.99828L0.439341 9.43589Z" fill="#999999">
                </path></Styles.ExplanationCardCloseIcon>
            <Styles.ExplanationCardTitle>Atlas Of Opportunity</Styles.ExplanationCardTitle>
            <Styles.ExplanationText>
                        Recent research has revealed a connection 
                        between people's mobility and the economy — areas with diverse community movement patterns 
                        are more likely to experience higher economic growth. This version of the Atlas aims to make 
                        such insights accessible to small business owners and government planners. <br/><br/>
                        <Styles.ExplanationCardReadMore>Read more...</Styles.ExplanationCardReadMore>
            </Styles.ExplanationText>

        </Styles.ExplanationContainer>
    )
}
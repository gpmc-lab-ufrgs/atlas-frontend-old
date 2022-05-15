import { Card } from "@mui/material";
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
interface CloseCard {
    isCardClosed: boolean;
}

export const CardContentContainer = styled(Card)<CloseCard>`
  
    position: fixed;
    z-index: ${({ isCardClosed }) => (isCardClosed ? "1" : "2")};;
        
    padding: 30px 35px;
    font-size: 14px;
    max-width: 235px;
    
    
    display: flex;
    flex-direction: column;
    
`;

export const CardContentTitle = styled.h1`
    margin-top: 0px;
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
`

export const CardContentText =  styled.p`
    
    line-height: 150%;
    color: #1f3349;
    margin-bottom: 0px;
`

export const ExplanationCardReadMore = styled.a`
    align-self: flex-start;
    color: rgb(0, 153, 229);
`
export const CardContentCloseIcon = styled(CloseIcon)`
    position: absolute;
    right: 0px;
    top:0px;
    width: 12px;
    height: 12px;
    padding: 6px;
    margin: 12px 12px 0px 0px;
    cursor: pointer;
`
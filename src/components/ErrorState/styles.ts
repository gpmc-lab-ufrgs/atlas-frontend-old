import styled from 'styled-components';

import RefreshIcon from '@mui/icons-material/Refresh';

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -21.5px;
    margin-left: -137px;
`

export const ContentContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 258px;
    height: 43px;
    background: #D32F2F;
    border-radius: 8px;
    z-index: 999;
`;

export const Refresh = styled(RefreshIcon)`
    color: #FFFFFF;
    margin-left: 3px;
`;

export const TextDiv = styled.div`
    display: block;
`;

export const Text = styled.div`
    display: block;
    margin-left: 4px;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
`;
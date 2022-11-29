import { Box } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
    background: rgba(0, 0, 0, 0.5);

    z-index: 3;

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoadingModal = styled(Box)`
    width: 12rem; 
    height: 10rem;

    background-color: #ffffff;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

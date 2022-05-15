import styled from "styled-components";

interface Minimizer {
    isSidebarOpen: boolean;
    theme: {};
  }

export const SideInformationsContainer = styled.div<Minimizer>`
    top: 150px;
    position: absolute;
    font-family: "Roboto",sans-serif;

    left: ${({ isSidebarOpen }) => (isSidebarOpen ? "360" : "20")}px;

    transition: ${({ theme }) =>
    theme.transitions.create(["left"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    })};
`
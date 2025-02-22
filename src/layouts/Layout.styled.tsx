import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  height: 100%;
`;

export const MenuBarSection = styled.section`
  height: 10%;
`;

export const MainSection = styled.main`
  height: 100%;
  overflow: auto;
  scroll-behavior: smooth;
  scrollbar-width: thin;
`;

export const FooterSection = styled.section`
  height: 10%;
`;
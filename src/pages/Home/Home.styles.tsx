import styled from "styled-components";

export const HomeSection = styled.section`
    height: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
`;

export const BackgroundImage = styled.div`
    background-image: url("https://picsum.photos/1920/1080/");
    background-position: center;
    filter: blur(5px);
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
`;

export const SectionContent = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;    
`;
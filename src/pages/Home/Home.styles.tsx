import styled from "styled-components";

export const Sections = styled.div`
    height:100%;

    @keyframes DropInEffect{
        0%{
            transform: translateY(-100%);
        }

        100%{
            transform: translateY(0%);
        }
    }

    @keyframes FlyUpOutEffect{
        0%{
            transform: translateY(0%);
        }

        100%{
            transform: translateY(-100%);
        }
    }    

    @keyframes ZoomInOutText{
        0%{
            opacity: 0;
            scale: 0;
        }

        25%{
            opacity: 1;
            scale: 1;
        }

        75%{
            opacity: 1;
            scale: 1;
        }        
        
        
        100%{
            opacity: 0;
            scale: 0;
        }        

    }
    
    @keyframes SectionReveal{
        0%{
            color: white;
        }
        50%{
            color: black;
        }
    }
    

    @keyframes BackgroundReveal{
        25%{
        }
        50%{
        }
  
        100%{
        }              
    }    
`;

export const Section = styled.section`
    height: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    opacity: 1;
`;

export const BackgroundImage = styled.div<{$imageUrl: string}>`
    background-image: url(${props=>props.$imageUrl});
    background-position: center;    
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    scale: 1;
    opacity: 1;
    animation: BackgroundReveal ease-in-out;
    animation-timeline: view();
    animation-range-start: cover;
    animation-range-end: cover;
`;

export const SectionContent = styled.div<{$animationName:string}>`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);    
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    transform: translateY(-100%);
    animation: 
        DropInEffect 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 1s forwards
`;

export const SectionHeaderText = styled.h2<{$color: string}>`
    font-size: clamp(10vw, 20vw, 20vw);
    font-weight: bold;
    color: ${props=>props.$color};
    animation: ZoomInOutText ease-in-out forwards;
    scale: 0;
    opacity: 0;
    background-color: black;
    animation-timeline: view();
    animation-range-start:contain;    
    animation-range-end:100;    
`;


export const SectionContentText = styled.div<{$color: string}>`
    font-size: 1.5rem;
    color: ${props=>props.$color};
    animation: ZoomInOutText ease-in-out forwards;
    scale: 0;
    background-color: black;
    color: white;
    opacity: 0;
    animation-timeline: view();
    animation-range-start:contain;    
    animation-range-end:100;    
`;
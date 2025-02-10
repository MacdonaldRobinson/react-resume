import styled from "styled-components";

export const NavItem = styled.li`
    border: 1px solid red;
    padding: 5px;
    font-weight: bold;    
    cursor: pointer;
    transition: all 1s;

    a {
        color: gray;
        text-decoration: none;
        text-align: center;
        transition: all 0.5s;

        &:hover{
            color: white;    
        }

        &.active{
            color: white;
        }
    }    
`;

export const NavContainer = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;    
    list-style-type: none;
    background-color: black;
    height: 10vh    
`;
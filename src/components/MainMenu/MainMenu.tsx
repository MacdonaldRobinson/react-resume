import { NavLink } from "react-router-dom";
import { NavContainer, NavItem } from "./MainMenu.style";

const MainMenu = () =>{
    return <NavContainer>
            <NavItem>
                <NavLink to={"/"}>Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to={"/about"}>About</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to={"/contact"}>Contact</NavLink>    
            </NavItem>        
    </NavContainer>
}

export default MainMenu;
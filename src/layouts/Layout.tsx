import { Outlet } from "react-router-dom"
import MainMenu from "../components/MainMenu/MainMenu"
import {LayoutWrapper, MainSection, MenuBarSection } from "./Layout.styled";

const Layout = ()=>{
    return <LayoutWrapper>
        <MenuBarSection>
            <MainMenu />
        </MenuBarSection>
        <MainSection>
            <Outlet />
        </MainSection>
    </LayoutWrapper>
}

export default Layout;
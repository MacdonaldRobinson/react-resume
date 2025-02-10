import { Outlet } from "react-router-dom"
import MainMenu from "../components/MainMenu/MainMenu"
import { FooterSection, LayoutWrapper, MainSection, MenuBarSection } from "./Layout.styled";
import Footer from "../components/Footer/Footer";

const Layout = ()=>{
    return <LayoutWrapper>
        <MenuBarSection>
            <MainMenu />
        </MenuBarSection>
        <MainSection>
            <Outlet />
        </MainSection>
        {/* <FooterSection>
            <Footer/>
        </FooterSection> */}
    </LayoutWrapper>
}

export default Layout;
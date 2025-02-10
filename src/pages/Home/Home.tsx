import { BackgroundImage, HomeSection, SectionContent } from "./Home.styles";

const Home = ()=>{
    return (
    <HomeSection>  
        <BackgroundImage />
        <SectionContent>
            <h1>Welcome to my Show Case</h1>
            <p>This page will show you the different projects i have worked on</p>
        </SectionContent>
    </HomeSection>
    );
}

export default Home;
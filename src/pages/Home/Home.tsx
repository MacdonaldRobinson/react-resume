import { BackgroundImage, Section, SectionContent, SectionContentText, SectionHeaderText, Sections } from "./Home.styles";
const Home = ()=>{

    return (
        <Sections>
            <Section>  
                <BackgroundImage $imageUrl="https://picsum.photos/1920/1080/?1"/>
                <SectionContent $animationName="DropAnimation">
                    <SectionHeaderText $color="white">Welcome to my Show Case</SectionHeaderText>
                    <SectionContentText $color="gray">This page will show you the different projects i have worked on</SectionContentText>
                </SectionContent>
            </Section>        
            <Section>  
                <BackgroundImage $imageUrl="https://picsum.photos/1920/1080/?2"/>
                <SectionContent $animationName="DropAnimation">
                    <SectionHeaderText $color="white">Welcome to my Show Case</SectionHeaderText>
                    <SectionContentText $color="gray">This page will show you the different projects i have worked on</SectionContentText>
                </SectionContent>
            </Section>         
            <Section>  
                <BackgroundImage $imageUrl="https://picsum.photos/1920/1080/?3"/>
                <SectionContent $animationName="DropAnimation">
                    <SectionHeaderText $color="white">Welcome to my Show Case</SectionHeaderText>
                    <SectionContentText $color="gray">This page will show you the different projects i have worked on</SectionContentText>
                </SectionContent>
            </Section>                     
        </Sections>
    );
}

export default Home;
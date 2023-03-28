import VideoComponent from "../../components/VideoComponent";
import { Container, ShortsContainer, } from "./styles";
import { MenuContext } from "../../contexts/menuUser";
import { useContext } from "react";
import ShortsPage from "../../components/Shorts/Shorts";



function Home () {
    const {openMenu } = useContext(MenuContext); 

    return(
        <div id="Home">
        <Container openMenu={openMenu}>
            <VideoComponent/>
            <VideoComponent/>
            <VideoComponent/>
            <VideoComponent/>
            <VideoComponent/>
        </Container>
        <hr  style={{background:'gray',height:'5px', margin:'20px 0px'}}/>
        <h3 >Shorts</h3>
        <ShortsContainer openMenu={openMenu}>
            <ShortsPage/>
            <ShortsPage/>
            <ShortsPage/>
            <ShortsPage/>
            <ShortsPage/>
            <ShortsPage/>
            <ShortsPage/>
            <ShortsPage/>
            <ShortsPage />
            <ShortsPage />
            <ShortsPage />
            <ShortsPage />          
        </ShortsContainer>
        <hr style={{background:'gray',height:'5px', margin:'20px 0px'}}/>
        <Container openMenu={openMenu}>    
            <VideoComponent/>
            <VideoComponent/>
            <VideoComponent/>
            <VideoComponent/>
            <VideoComponent/>
            <VideoComponent/>
            <VideoComponent/>
            <VideoComponent/>
            <VideoComponent/>
            <VideoComponent/>           
        </Container>
        </div>
        
    )

}

export default Home;
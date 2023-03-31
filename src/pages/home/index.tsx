import VideoComponent from "../../components/VideoComponent";
import { Container, ShortsContainer, } from "./styles";
import { menuContext } from "../../contexts/menuUser";
import { useContext } from "react";
import ShortsPage from "../../components/Shorts/Shorts";


const videos = [{
    image:"https://i.ytimg.com/vi/GHLjUTumEbA/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCKGpBDWqqWOvEAB-SLbWmcuG53ew",
    title:'Cocielo batendo em ninjas',
    channel:'Julio Cocielo',
    views:'109 mi',
    time:'2 anos'
},{
    image:"https://i.ytimg.com/vi/wvg0M57cakc/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDZotPentpkNpavkWyYY-bGpQwfRw",
    title:'rap do lampiao',
    channel:'playerTauz',
    views:'10 mi',
    time:'2 meses'
},{
    image:"https://i.ytimg.com/vi/GHLjUTumEbA/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCKGpBDWqqWOvEAB-SLbWmcuG53ew",
    title:'Cocielo batendo em ninjas',
    channel:'Julio Cocielo',
    views:'109 mi',
    time:'2 anos'
},{
    image:"https://i.ytimg.com/vi/wvg0M57cakc/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDZotPentpkNpavkWyYY-bGpQwfRw",
    title:'rap do lampiao',
    channel:'playerTauz',
    views:'10 mi',
    time:'2 meses'
},{
    image:"https://i.ytimg.com/vi/GHLjUTumEbA/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCKGpBDWqqWOvEAB-SLbWmcuG53ew",
    title:'Cocielo batendo em ninjas',
    channel:'Julio Cocielo',
    views:'109 mi',
    time:'2 anos'
},{
    image:"https://i.ytimg.com/vi/wvg0M57cakc/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDZotPentpkNpavkWyYY-bGpQwfRw",
    title:'rap do lampiao',
    channel:'playerTauz',
    views:'10 mi',
    time:'2 meses'
}]

function Home () {
    const {openMenu } = useContext(menuContext); 


    return(
        <div id="Home">
        <Container openMenu={openMenu} >
            {videos.map((video)=>(
                <VideoComponent video={video}/>
            ))}
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
            <ShortsPage />        
            <ShortsPage />
            <ShortsPage />
            <ShortsPage />
            <ShortsPage />
            <ShortsPage />
        </ShortsContainer>
        <hr style={{background:'gray',height:'5px', margin:'20px 0px'}}/>
        <Container openMenu={openMenu}>
            {videos.map((video)=>(
                <VideoComponent video={video}/>
            ))}
        </Container>
        </div>
        
    )

}

export default Home;
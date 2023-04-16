import {useEffect,useState } from "react";
import { Chanel, ChanelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer, VideoComponent } from "./styles";
import api from "../../api";
import { useLocation } from "react-router-dom";

function Search() {
    const [videos, setVideos] = useState<any[]>([])
    const {search } = useLocation()
    const searchQuery = new URLSearchParams(search) 

    const searchValue = searchQuery.get('search')


    async function load() {
     try {
        const response = await api.post('/videos/search', { search: searchValue })
        setVideos(response.data.videos);
        console.log(response.data.videos)    
     } catch (error) {
        console.log(error);
     }   
    }

    

    useEffect(()=>{load()},[])

    console.log(search)
    return (
        <Container>
            { videos?.map((video)=>(
                <VideoComponent key={video.video_id}>
                    <ImageBanner />
                    <TitleContainer>
                        <TextContainer>
                            <Title>{video.title}</Title>
                            <TextCard> xxx de visualizações - há x anos</TextCard>       
                        </TextContainer>
                        <Chanel>
                            <ChanelImage> <span style={{color:'white'}}>?</span> </ChanelImage>
                            <TextCard>Chanel Name </TextCard>
                        </Chanel>
                        <TextContainer>
                            <TextCard>{video.description}</TextCard>
                        </TextContainer>
                    </TitleContainer>
                </VideoComponent>
            ))}           
        </Container>
    )
}

export default Search;

import { ChanelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";

function VideoComponent (){
    return(
        <Container>
            <ImageBanner src="https://i.ytimg.com/vi/GHLjUTumEbA/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCKGpBDWqqWOvEAB-SLbWmcuG53ew"/>
            <TitleContainer>
                <ChanelImage>
                    JU
                </ChanelImage>
                <TextContainer>
                    <Title>Julião caçando ninjas</Title>
                    <TextCard>Julio Cocielo</TextCard>
                    <TextCard>200mi de visualizações - há 3 anos</TextCard>   
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;
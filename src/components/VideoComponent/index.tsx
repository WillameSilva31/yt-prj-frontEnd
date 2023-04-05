import { ChanelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";

function VideoComponent ({ video }: any){
    return(
        <Container>
            <ImageBanner src={video.image}/>
            <TitleContainer>
                <ChanelImage>{video.sigla}</ChanelImage>
                <TextContainer>
                    <Title>{video.title}</Title>
                    <TextCard>{video.Chanel}</TextCard>
                    <TextCard>{video.views} de visualizações - há {video.time}</TextCard>   
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;
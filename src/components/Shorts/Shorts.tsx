import { ImageBanner, ShortsContainer, TextCard, Title, TitleContainer } from "./styles"


function ShortsPage (){
    return(
            <ShortsContainer>
                <ImageBanner src="https://i.ytimg.com/vi/tu6alZXS5pQ/hq720.jpg?sqp=-oaymwEkCJUDENAFSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLB1etJXBFkT5tt4qu69XfyTP-QaQw"/>
                <TitleContainer>
                    <Title>BRIGADEIRO INCRIBEL</Title>
                    <TextCard>20 mi de visualizações</TextCard>
                </TitleContainer>               
            </ShortsContainer>
    )
}

export default ShortsPage;
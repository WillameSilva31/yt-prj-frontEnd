import Shorts from "../../pages/shorts";
import { ImageBanner, ShortsContainer, TextCard, Title, TitleContainer } from "./styles"


function ShortsPage ({shorts}:any){
    return(
            <ShortsContainer>
                <ImageBanner  src={shorts.image}/>
                <TitleContainer>
                    <Title>{shorts.title}</Title>
                    <TextCard>{shorts.views} de visualizações</TextCard>
                </TitleContainer>               
            </ShortsContainer>
    )
}

export default ShortsPage;
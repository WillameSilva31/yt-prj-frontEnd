import { ButtonContainer, ButtonIcon, CategoriesItens, Container,CategoriesContainer, CarouselContainer} from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { menuContext } from "../../contexts/menuUser";
import ArrowIconL from '../../assets/seta.png'
import ArrowIconR from '../../assets/setaD.png'

    const Categorias = [
        {name:"Tudo", link:"/"},
        {name:"Jogos", link:"/games"},
        {name:"Ao vivo", link:"/lives"},
        {name:"Resident-evil", link:"/history"},
        {name:"Resident-evil", link:"/history"},
        {name:"Resident-evil", link:"/history"},
        {name:"Resident-evil", link:"/history"},
        {name:"Resident-evil", link:"/history"},{name:"Resident-evil", link:"/history"},{name:"Resident-evil", link:"/history"},{name:"Resident-evil", link:"/history"},{name:"Resident-evil", link:"/history"},{name:"Resident-evil", link:"/history"},{name:"Resident-evil", link:"/history"},{name:"Resident-evil", link:"/history"},{name:"Resident-evil", link:"/history"},
        {name:"Resident-evil", link:"/history"}, {name:"Resident-evil", link:"/history"}, {name:"Resident-evil", link:"/history"}, {name:"Resident-evil", link:"/history"}, {name:"Resident-evil", link:"/history"}, {name:"Resident-evil", link:"/history"}, {name:"Resident-evil", link:"/history"}, {name:"Resident-evil", link:"/history"}, {name:"Resident-evil", link:"/history"},
    
    ]

    

    
    function Categories (){
        const Navigate = useNavigate();
        const {openMenu } = useContext(menuContext); 
        
        const [sliderPosition, setSliderPosition] = useState(0);

        const sliderWidth = 200; // largura do slider
        const containerWidth = 400; // largura do contêiner

        const handleNextClick = () => {
            if (sliderPosition > -(sliderWidth * 12) + containerWidth) {
            setSliderPosition((prevPosition) => prevPosition - sliderWidth);
            }
        };

        const handleBackClick = () => {
            if (sliderPosition < 0) {
            setSliderPosition((prevPosition) => prevPosition + sliderWidth);
            }
        };
        
      
        
    return(
        <CategoriesContainer openMenu={openMenu} >
            <ButtonContainer onClick={handleBackClick} >
                <ButtonIcon src={ArrowIconR}/>
            </ButtonContainer>
            <CarouselContainer>
                <Container openMenu={openMenu} style={{transform: `translateX(${sliderPosition}px)`, transition: '0.5s ease-in-out',}} >
                    {Categorias.map((Categorias)=>(
                        <CategoriesItens key={null} onClick={()=> Navigate(Categorias.link)}>{Categorias.name}</CategoriesItens>
                    ))}
                </Container>
            </CarouselContainer>
            <ButtonContainer  onClick={handleNextClick} >
                <ButtonIcon src={ArrowIconL}/>
            </ButtonContainer>
        </CategoriesContainer>
    )
}

export default Categories;
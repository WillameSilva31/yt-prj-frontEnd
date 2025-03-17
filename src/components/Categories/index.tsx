import { ButtonContainer, ButtonIcon, CategoriesItens, Container,CategoriesContainer, CarouselContainer} from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { menuContext } from "../../contexts/menuUser";
import ArrowIconL from '../../assets/seta.png'
import ArrowIconR from '../../assets/setaD.png'
import { useCategoryContext } from "../../contexts/searchCategories";

    function Categories (){
        const Navigate = useNavigate();
        const {openMenu } = useContext(menuContext); 
        
        const [sliderPosition, setSliderPosition] = useState(0);

        const sliderWidth = 200; 
        const containerWidth = 400; 

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
        
        const {setCategoryId} = useCategoryContext()

        function searchCategory(id: string) {
          setCategoryId(id)
        }

        const categories = [
            {name: 'Tudo', id: '0'},
            {name: 'Games', id: '20'},
            {name: 'Futebol', id: '17'},
            {name: 'Entretenimento', id: '24'},
            {name: 'Música', id: '10'},
            {name: 'Pessoas e blogs', id: '21'},
            {name: 'Automóveis e veículos', id: '2'},
            {name: 'Animais e pets', id: '15'},
            {name: 'Notícias e política', id: '25'},
            {name: 'Comédia', id: '23'},
            {name: 'Shorts', id: '26'},
            {name: 'Infantil', id: '1'},
            {name: 'Vida a dois', id: '22'},
            {name: 'Esportes', id: '17'},
            {name: 'Memes', id: '23'},
            {name: 'Jogos pc', id: '20'},
            {name: 'Jornais', id: '25'},
            {name: 'Kids', id: '1'},
            {name: 'Hits do momento', id: '10'},
            {name: 'História das civilizações', id: '22'},
            {name: 'Ciências', id: '15'},
            {name: 'Viagens pelo mundo', id: '24'},
            {name: 'Séries', id: '23'},
            {name: 'Novidades', id: '24'},
            {name: 'Educação', id: '1'}, 
            {name: 'Ciência e tecnologia', id: '2'}, 
            {name: 'Documentários', id: '26'}, 
            {name: 'Economia', id: '25'}, 
            {name: 'Investimentos e finanças', id: '20'}, 
            {name: 'Moda e estilo', id: '23'},
            {name: 'Comunicação', id: '10'},
            {name: 'Beleza', id: '24'},
          ];
      
        
    return(
        <CategoriesContainer openMenu={openMenu} >
            <ButtonContainer onClick={handleBackClick} >
                <ButtonIcon src={ArrowIconR}/>
            </ButtonContainer>
            <CarouselContainer>
                <Container openMenu={openMenu} style={{transform: `translateX(${sliderPosition}px)`, transition: '0.5s ease-in-out',}} >
                    {categories.map((button)=>(
                        <CategoriesItens key={null} onClick={()=> searchCategory(button.id)}>{button.name}</CategoriesItens>
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
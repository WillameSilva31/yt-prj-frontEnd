import { ButtonContainer, ButtonIcon, CategoriesItens, Container,CategoriesContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { menuContext } from "../../contexts/menuUser";
import ArrowIconR from '../../assets/seta.png'
import ArrowIconL from '../../assets/setaD.png'

    const Categorias = [
        {name:"Tudo", link:"/"},
        {name:"Jogos", link:"/games"},
        {name:"Ao vivo", link:"/lives"},
        {name:"Resident-evil", link:"/history"},
        {name:"Resident-evil", link:"/history"},
        {name:"Resident-evil", link:"/history"},
        {name:"Resident-evil", link:"/history"},
        {name:"Resident-evil", link:"/history"},{name:"Resident-evil", link:"/history"},{name:"Resident-evil", link:"/history"},{name:"Resident-evil", link:"/history"},{name:"Resident-evil", link:"/history"},{name:"Resident-evil", link:"/history"},{name:"Resident-evil", link:"/history"},{name:"Resident-evil", link:"/history"},{name:"Resident-evil", link:"/history"},
        {name:"Resident-evil", link:"/history"}
    
    ]

function Categories (){
    const Navigate = useNavigate();
    const {openMenu } = useContext(menuContext); 
    
    return(
        <CategoriesContainer openMenu={openMenu} >
            <ButtonContainer>
                <ButtonIcon src={ArrowIconL}/>
            </ButtonContainer>
        <Container openMenu={openMenu}>
            {Categorias.map((Categorias)=>(
                <CategoriesItens key={null} onClick={()=> Navigate(Categorias.link)}>
                    <span>{Categorias.name}</span>
                </CategoriesItens>
            ))}
        </Container>
            <ButtonContainer>
                <ButtonIcon src={ArrowIconR}/>
            </ButtonContainer>
        </CategoriesContainer>
    )
}

export default Categories;
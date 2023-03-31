import { CategoriesItens, Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { menuContext } from "../../contexts/menuUser";

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
        <Container openMenu={openMenu}>
            {Categorias.map((Categorias)=>(
                <CategoriesItens key={null} onClick={()=> Navigate(Categorias.link)}>
                    <span>{Categorias.name}</span>
                </CategoriesItens>
            ))}
        </Container>
    )
}

export default Categories;
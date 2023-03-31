import { ButtonContainer, ButtonIcon, Container,LogoContainer,SearchContainer, SearchBar, SearchInput, SearchButton, HeaderButtons } from "./style";
import HamburguerIcon from "../../assets/hamburguer.png";
import YoutubeIcon from "../../assets/logo.png";
import Mic from "../../assets/microphone.png";
import Lupa from "../../assets/lupa.png";
import Camera from "../../assets/camera.png";
import Sino from "../../assets/sino.png";
import { useContext } from 'react';
import { menuContext} from "../../contexts/menuUser";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/UserContext";

interface Iprops {
    openDropMenu: boolean,
    setOpenDropMenu: (openDropMenu:boolean) => void,
}


function Header ({openDropMenu, setOpenDropMenu}: Iprops){

    
    const {openMenu, setOpenMenu} = useContext(menuContext);
    const {login} = useContext(userContext);
    const Navigate = useNavigate();


    return (
        <Container>

            <LogoContainer>
                <ButtonContainer margin ='0 10px 0 0' onClick={()=> setOpenMenu(!openMenu)}>
                    <ButtonIcon alt="" src={HamburguerIcon} />
                </ButtonContainer>
                <img style={{cursor:'pointer',width:'100px'}} alt="" src={YoutubeIcon} />
            </LogoContainer>

            <SearchContainer>
                <SearchBar>
                    <SearchInput placeholder="Pesquisar"/>
                </SearchBar>
                <SearchButton>
                    <ButtonIcon alt="" src={Lupa}/>
                </SearchButton>
                <ButtonContainer margin=' 0 0 0 10px'>
                    <ButtonIcon alt="" src={Mic}/>
                </ButtonContainer>
            </SearchContainer>

            <HeaderButtons>
                <ButtonContainer margin ='0 10px 0 0' onClick={()=> Navigate('/Upload')}>
                    <ButtonIcon alt="" src={Camera}/>
                </ButtonContainer>
                <ButtonContainer margin ='0 10px 0 0'>
                    <ButtonIcon alt="" src={Sino}/>
                </ButtonContainer>

                {login?
                <>
                    <ButtonContainer margin ='0 0 0 0' onClick={()=> setOpenDropMenu(!openDropMenu)} >
                       kk
                    </ButtonContainer >
                </>
                :
                <button style={{padding:'5px'}} onClick={()=>Navigate('/login')}>Fazer Login</button>
                }
            </HeaderButtons>      
        </Container>
    )
}

export default Header;
import { ButtonContainer, ButtonIcon, Container,LogoContainer,SearchContainer, SearchBar, SearchInput, SearchButton, HeaderButtons } from "./style";
import HamburguerIcon from "../../assets/hamburguer.png";
import YoutubeIcon from "../../assets/logo.png";
import Mic from "../../assets/microphone.png";
import Lupa from "../../assets/lupa.png";
import Camera from "../../assets/camera.png";
import Sino from "../../assets/sino.png";
import { useContext } from 'react';
import { MenuContext } from "../../contexts/menuUser";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";



function Header (){
    const { openMenu, setOpenMenu} = useContext(MenuContext);
    const Navigate = useNavigate();
    const {login} = useContext(UserContext);


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
                <ButtonContainer margin ='0 10px 0 0'>
                    <ButtonIcon alt="" src={Camera}/>
                </ButtonContainer>
                <ButtonContainer margin ='0 10px 0 0'>
                    <ButtonIcon alt="" src={Sino}/>
                </ButtonContainer>

                {login?
                <ButtonContainer margin ='0 0 0 0' >
                    KK
                </ButtonContainer> 
                :
                <button style={{padding:'5px'}} onClick={()=>Navigate('/login')}>Fazer Login</button>
                }
            </HeaderButtons>      
        </Container>
    )
}

export default Header;
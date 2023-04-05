import { ButtonContainer, ButtonIcon, Container,LogoContainer, HeaderButtons, LoginButton, ButtonIconLogin } from "./style";
import HamburguerIcon from "../../assets/hamburguer.png";
import YoutubeIcon from "../../assets/logo.png";
import Camera from "../../assets/camera.png";
import Sino from "../../assets/sino.png";
import MyAccountIcon from '../../assets/minhaconta.png'
import { useContext, useState } from 'react';
import { menuContext} from "../../contexts/menuUser";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/UserContext";
import SearchContent from "../SearchBar";



interface Iprops {
    openDropMenu: boolean,
    setOpenDropMenu: (openDropMenu:boolean) => void,
}
interface Video {
    id: number;
    title: string;
    description: string;
  }


function Header ({openDropMenu, setOpenDropMenu}: Iprops){

    const [videos, setVideos] = useState<Video[]>([]);
    const [busca, setBusca] = useState<string>('');
    const {openMenu, setOpenMenu} = useContext(menuContext);
    const {login} = useContext(userContext);
    const Navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');
  
    const handleSearch = () => {
      Navigate(`/results?q=${searchValue}`);
    };
  
    

    return (
        <Container>

            <LogoContainer>
                <ButtonContainer margin ='0 10px 0 0' onClick={()=> setOpenMenu(!openMenu)}>
                    <ButtonIcon alt="" src={HamburguerIcon} />
                </ButtonContainer>
                <img style={{cursor:'pointer',width:'100px'}} alt="" src={YoutubeIcon} />
            </LogoContainer>

            <SearchContent/>

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
                <LoginButton onClick={()=>Navigate('/login')}> <ButtonIconLogin src={MyAccountIcon}/> Fazer Login</LoginButton>
                }
            </HeaderButtons>      
        </Container>
    )
}

export default Header;
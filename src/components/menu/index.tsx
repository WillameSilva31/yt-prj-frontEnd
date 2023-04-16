import {ButtonIcon, Container, MenuItens} from "./styles";
import { useContext } from 'react';
import { menuContext } from "../../contexts/menuUser";
import HomeIcon from '../../assets/home.png';
import ShortsIcon from '../../assets/shorts.png';
import InscriptionIcon from '../../assets/inscricoes.png';
import LibraryIcon from '../../assets/biblioteca.png';
import ClockIcon from '../../assets/relogio.png';
import MyVideosIcon from '../../assets/meusvideos.png';
import WatchLaterIcon from '../../assets/assistirmaistarde.png';
import LikeIcon from '../../assets/like.png';
import FireIcon from '../../assets/fire.png';
import MallIcon from '../../assets/mall.png';
import MusicIcon from '../../assets/note.png';
import MovieIcon from '../../assets/tablete.png';
import LiveIcon from '../../assets/live.png';
import GameIcon from '../../assets/game.png';
import NewsIcon from '../../assets/journal.png';
import SportIcon from '../../assets/cup.png';
import LearnIcon from '../../assets/lamp.png';
import ConfigIcon from '../../assets/config.png';
import DenunciationIcon from '../../assets/flag.png';
import HelpIcon from '../../assets/help.png';
import FeedbackIcon from '../../assets/feedback.png';
import { useNavigate } from "react-router-dom";

 const itens = [
    {name:"início", icon:HomeIcon, link:"/"},
    {name:"shorts",icon:ShortsIcon, link:"/shorts" },
    {name:"inscrições",icon:InscriptionIcon, link:"/inscription"},
    {name:"biblioteca",icon:LibraryIcon, link:"/library"},
    {name:"histórico",icon:ClockIcon, link:"/history"}
 ]
 const itensEscondidos1 = [
    {name:"Meus vídeos",icon:MyVideosIcon, link:"/myvideos"},
    {name:"Assistir mais tarde",icon:WatchLaterIcon, link:"/watchlater"},
    {name:"Vídeos marcados com gostei",icon:LikeIcon, link:"/likevideos"},   
]
  const itensEscondidos2 = [{name:"Em alta",icon:FireIcon, link:"/onburn"},
    {name:"Shopping",icon:MallIcon, link:"/shopping"},
    {name:"Músicas",icon:MusicIcon, link:"/music"},
    {name:"Filmes",icon:MovieIcon, link:"/movies"},
    {name:"Ao vivo",icon:LiveIcon, link:"/lives"},
    {name:"Jogos",icon:GameIcon, link:"/games"},
    {name:"Notícias",icon:NewsIcon, link:"/news"},
    {name:"Esportes",icon:SportIcon, link:"/sports"},
    {name:"Aprender",icon:LearnIcon, link:"/learn"},
]
 const itensEscondidos3 = [
    {name:"Configurações",icon:ConfigIcon, link:"/config"},
    {name:"Histórico de denúncias",icon:DenunciationIcon, link:"/denunciation"},
    {name:"Ajuda",icon:HelpIcon, link:"/help"},
    {name:"Enviar feedback",icon:FeedbackIcon, link:"/feedback"}
]

function Menu () {
    const {openMenu } = useContext(menuContext);
    const Navigate = useNavigate();
    
    return(
        <Container openMenu = {openMenu} >
        
        {itens.map((itens)=>(              
            <MenuItens openMenu={openMenu}  onClick={()=> Navigate(itens.link)} >
                <ButtonIcon  src={itens.icon}/>
                <span>{itens.name}</span>  
            </MenuItens>
        ))}
        <hr id="esconder"/>
        {itensEscondidos1.map((itensEscondidos1)=>(
            <MenuItens  openMenu={openMenu} id="esconder" onClick={()=>Navigate(itensEscondidos1.link)} >
                <ButtonIcon src={itensEscondidos1.icon}/>
                <span >{itensEscondidos1.name}</span>
            </MenuItens>
        ))}
        <hr id="esconder" />
        {itensEscondidos2.map((itensEscondidos2)=>(
            <MenuItens  openMenu={openMenu} id="esconder" onClick={()=>Navigate(itensEscondidos2.link)} >
                <ButtonIcon src={itensEscondidos2.icon}/>
                <span >{itensEscondidos2.name}</span>
            </MenuItens>
        ))}
        <hr id="esconder" />
        {itensEscondidos3.map((itensEscondidos3)=>(
            <MenuItens  openMenu={openMenu} id="esconder" onClick={()=>Navigate(itensEscondidos3.link)} >
                <ButtonIcon src={itensEscondidos3.icon}/>
                <span >{itensEscondidos3.name}</span>
            </MenuItens>
        ))} 
        <hr id="esconder" />
        </Container>
    )
}

export default Menu;
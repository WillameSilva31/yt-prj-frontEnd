import { Container, DropDownMenuItem, ButtonIcon } from './styles';
import MyaccountIcon from '../../assets/minhaconta.png';
import ClockIcon from '../../assets/relogio.png';
import InscriptionIcon from '../../assets/inscricoes.png';
import LibraryIcon from '../../assets/biblioteca.png';
import HelpIcon from '../../assets/help.png';
import FeedbackIcon from '../../assets/feedback.png';
import GoOutIcon from '../../assets/porta.png'
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../contexts/UserContext';
import { useContext } from 'react';


const itensdropmenu = [
    {name:"Minha conta", icon:MyaccountIcon, link:"/myaccount"},
    {name:"Histórico",icon:ClockIcon, link:"/history" },
    {name:"Inscrições",icon:InscriptionIcon, link:"/inscription"},
    {name:"Biblioteca",icon:LibraryIcon, link:"/library"},
    {name:"Ajuda",icon:HelpIcon, link:"/help"},
    {name:"Enviar feedback",icon:FeedbackIcon, link:"/feedback"}
 ]

const sair = [
   {name: "Sair", icon:GoOutIcon}
]
interface Iprops {
   openDropMenu:boolean;
}


function DropDownMenu({openDropMenu}:Iprops) {
   const {login, logOut} = useContext(userContext);
   const Navigate = useNavigate();

   return(
      <div style={{width:'100%',display:'flex', justifyContent:'flex-end'}}>
         <Container openDropMenu={openDropMenu}>
         {itensdropmenu.map((itensdropmenu)=>(
               <DropDownMenuItem key={null} onClick={()=> Navigate(itensdropmenu.link)}>
                  <ButtonIcon src={itensdropmenu.icon}/>
                  <span>{itensdropmenu.name}</span>
               </DropDownMenuItem>
            ))}
         {sair.map((sair)=>(
            <DropDownMenuItem key={null} onClick={()=> logOut()}>
               <ButtonIcon src={sair.icon} />
               <span>{sair.name}</span>
            </DropDownMenuItem>
         ))}
         </Container>
      </div> 

   )
}

export default DropDownMenu;


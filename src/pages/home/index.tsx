import VideoComponent from "../../components/VideoComponent";
import { Container, ShortsContainer, } from "./styles";
import { menuContext } from "../../contexts/menuUser";
import { useContext } from "react";
import ShortsPage from "../../components/Shorts/Shorts";


const videos = [{
    image:"https://i.ytimg.com/vi/GHLjUTumEbA/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCKGpBDWqqWOvEAB-SLbWmcuG53ew",
    title:'Cocielo batendo em ninjas',
    channel:'Julio Cocielo',
    sigla:'JU',
    views:'109 mi',
    time:'2 anos'
},{
    image:"https://i.ytimg.com/vi/wvg0M57cakc/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDZotPentpkNpavkWyYY-bGpQwfRw",
    title:'rap do lampiao',
    channel:'playerTauz',
    sigla:'TZ',
    views:'10 mi',
    time:'2 meses'
},{
    image:"https://i.ytimg.com/vi/fEQRXl0odVQ/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCxVFS3EXLlk_475UaOXb14FrtARQ",
    title:'24 jogos imperdíveis no ano de 2023',
    channel:'EnriqueGames20',
    sigla:'HG',
    views:'1 mil',
    time:'5 meses'
},{
    image:"https://i.ytimg.com/vi/nQmd6Y--x9g/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBuom117LJtX-88n0K52-_2TCmK8A",
    title:'É o FIM do TIKTOK nos ESTADOS UNIDOS? DEU RUIM! Entenda a TRETA!',
    channel:'BeTech',
    sigla:'BT',
    views:'120 mil',
    time:'3 meses'
},{
    image:"https://i.ytimg.com/vi/mnbr8jvnK3k/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAZ9l5LhOWBU-mp1g97S9FBv6fUcQ",
    title:'5 JOGOS NO BRASIL DE MUNDO ABERTO',
    channel:'Sidão do game',
    sigla:'SD',
    views:'19 mi',
    time:'2 anos'
},{
    image:"https://i.ytimg.com/vi/IdzO-_F7Y3E/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBaExEjn33PD03pjZ4POIUH6X-pPg",
    title:'Ervilha de Plasma é uma ótima ervilha! - Plants vs zombies Garden Warfare 1',
    channel:'TheDockBr',
    sigla: 'TD',
    views:'13 mil',
    time:'1 ano'
}]

const Shorts = [
    {
        image:"https://i.ytimg.com/vi/tu6alZXS5pQ/hq720.jpg?sqp=-oaymwEkCJUDENAFSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLB1etJXBFkT5tt4qu69XfyTP-QaQw",
        title:"BRIGADEIRO INCRIBEL",
        views:"30 mi"
    },
    {
        image:"https://i.ytimg.com/vi/Xrm2o9EfetU/hq720_2.jpg?sqp=-oaymwEkCJYDENAFSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLBPASPKZBXyNX4qJPAqtIa02ZFvxQ",
        title:"Se apruma não jão",
        views:"3 mi"
    },
    {
        image:"https://i.ytimg.com/vi/5Ioh1Tcpks8/hq720_2.jpg?sqp=-oaymwEkCJUDENAFSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLCB04LAKKa9dIY5N2o2_Lyd4ojCMw",
        title:"TOP 10 MAIORES BOMBAS",
        views:"4 mil"
    },
    {
        image:"https://i.ytimg.com/vi/27hAyVXY1K0/hq720_2.jpg?sqp=-oaymwEkCJYDENAFSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLD2vgD_tgMvOsotKUFDMIEk1LiRFA",
        title:"Ataque de cobra em primeria mão",
        views:"7 mi"
    },
    {
        image:"https://i.ytimg.com/vi/POM9spljP0Q/hq720_2.jpg?sqp=-oaymwEkCJUDENAFSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLCIVt_p2HKGtm3dQKI7liW0O2J9ig",
        title:"GOLS DO BRASIL DE FALTA",
        views:"10 mil"
    },
    {
        image:"https://i.ytimg.com/vi/sODuzNnz3kg/hq720_2.jpg?sqp=-oaymwEkCJUDENAFSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLCQ8Cmb4yiQLkofwvuTg220t8CXhQ",
        title:"Como fazer ovo de pascóa caseiro ",
        views:"1 mi"
    },
    {
        image:"https://i.ytimg.com/vi/DMlsF_7Br3k/hq720_2.jpg?sqp=-oaymwEkCJUDENAFSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLCKu4Z738NH8CKb4U6ztyyMSqocJw",
        title:'"Nunca tive muito quando criança."😭 - Gato de Botas 2: O Último Pedido',
        views:"3 mil"
    },
    {
        image:"https://i.ytimg.com/vi/buUjNSA0yAg/hq720_2.jpg?sqp=-oaymwEkCJUDENAFSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLDnfvs2u0UfkO8wB8n-FVEwFhtrtQ",
        title:"COMI O MAIOR PASTELÃO DO BRASIL!!!!",
        views:"30 mil"
    },
    {
        image:"https://i.ytimg.com/vi/Vo5WmP2EA6Y/hq720.jpg?sqp=-oaymwEkCJUDENAFSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLDhYwSyaTw-zbXAewYGgm3RbFDVng",
        title:"Neymar odeia esse jogador!",
        views:"30 mi"
    },
    {
        image:"https://i.ytimg.com/vi/kzA7r0OJAcM/hq720_2.jpg?sqp=-oaymwEkCI4CEOADSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLAy2t_cflSgDxVYYgKklO6Y0p_scQ",
        title:"GUDAN ESCAVANDO PETRÓLIO",
        views:"30,5 mil"
    }]

function Home () {
    const {openMenu } = useContext(menuContext); 


    return(
        <div id="Home">
        <Container openMenu={openMenu} >
            {videos.map((video)=>(
                <VideoComponent video={video}/>
            ))}
        </Container>
        <hr  style={{background:'gray',height:'5px', margin:'20px 0px'}}/>
        <h3 >Shorts</h3>
        <ShortsContainer openMenu={openMenu}>
            {Shorts.map((shorts)=>(
                <ShortsPage shorts={shorts}/>
            ))}
        </ShortsContainer>
        <hr style={{background:'gray',height:'5px', margin:'20px 0px'}}/>
        <Container openMenu={openMenu}>
            {videos.map((video)=>(
                <VideoComponent video={video}/>
            ))}
        </Container>
        </div>
        
    )

}

export default Home;
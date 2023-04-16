import styled from "styled-components";

export const Container = styled.div`
display:flex;
justify-content: center;
flex-direction:column;
top: 55px;
width:80%;
height:auto;
background-color:white;
border-radius: 10px;
`;
export const VideoComponent = styled.div`
display:flex;
width:90%;
height:230px;
background-color:white;
margin:10px;
cursor: pointer;`;

export const ImageBanner = styled.img`
width:38%;
height:230px;
border-radius:20px;
background-color:black;

:hover{
    border-radius: 0px;
    transition: 1s;
}`;

export const TitleContainer = styled.div`
width:100%;
display:flex;
flex-direction: column;
padding:10px;
background-color: white;
margin-left: 10px;
`;

export const Title = styled.span`
font-weight:400;
font-size: 22px;
margin-bottom: 5px;
color:#0f0f0f;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;`;

export const ChanelImage = styled.div`
background-color:aquamarine;
width:30px;
height:30px;
display:flex;
justify-content: center;
align-items:center;
border-radius:50%;
margin-right:10px;
background-color:black;`;

export const Chanel = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 10px;
`;

export const TextContainer = styled.div`
display:flex;
flex-direction: column;
width:80%;
margin-bottom:10px ;
`;



export const TextCard = styled.span`
color:gray;
font-size: 14px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;
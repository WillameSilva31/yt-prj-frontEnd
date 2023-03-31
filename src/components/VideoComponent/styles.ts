import styled from "styled-components";

export const Container = styled.div`
width:350px;
max-width: 100%;
margin-left:10px;
border-radius: 10px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
cursor: pointer;
`;

export const ImageBanner = styled.img`
width:100%;
height:200px;
border-radius:10px;`;

export const TitleContainer = styled.div`
width:100%;
display:flexbox;
align-items:center;
padding:10px;

`;

export const Title = styled.span`
font-weight:600;
color:#0f0f0f;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;`;

export const ChanelImage = styled.div`
background-color:blue;
width:40px;
height:40px;
display:flex;
justify-content: center;
align-items:center;
border-radius:50%;
margin-right:10px;`;

export const TextContainer = styled.div`
display:flex;
flex-direction: column;
width:80% ;
`;


export const TextCard = styled.span`
color:0c0c0c;
font-size: 14px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;
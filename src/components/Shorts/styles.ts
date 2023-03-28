import styled from "styled-components";

export const ShortsContainer = styled.div`
width:150px;
max-width: 1600px;
height:auto;
margin: 40px 0px;
border-radius: 10px;
cursor: pointer;
:hover{
    background-color: gray;
}
`;

export const ImageBanner = styled.img`
width:100%;
height:280px;
border-radius:10px;`;

export const TitleContainer = styled.div`
width:80%;
display:flex;
justify-content: flex-start;
flex-direction:column;
padding:10px 5px;
`;

export const Title = styled.span`
font-weight:600;
color:#0f0f0f;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;`;

export const TextCard = styled.span`
color:0c0c0c;
font-size: 14px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;`;
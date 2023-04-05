import styled from "styled-components";

export const CategoriesContainer = styled.div<{openMenu: boolean}>`
position:sticky;
background-color: white;
align-items: center;
padding: 10px;
top:55px;
bottom: 45px;
width:${({openMenu})=> openMenu? '114.0625rem' : '121.875rem'} ;
height:45px;
display:flex;
text-overflow: ellipsis;
white-space: nowrap;
overflow-y: hidden;
background-color:white ;
`;

export const Container = styled.div<{openMenu: boolean}>`
background-color: white;
width: auto;
align-items: center;
top:55px;
bottom: 45px;
height:45px;
display:flex;
text-overflow: ellipsis;
white-space: nowrap;
overflow-y: hidden;
overflow-x: hidden;
`;

export const CategoriesItens = styled.div`
background-color:gray;
width:auto;
height:30px;
display:flex;
align-items:center;
border-radius:10px;
margin: 10px;
cursor: pointer;
:hover {
    background-color: black;
    color: white;
}

span{
    margin: 20px 10px;
}`;

export const ButtonContainer = styled.div<{ margin?: string}>`
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;


:hover {
    background-color: gray;
}`;


export const ButtonIcon = styled.img`
width: 20px;`;
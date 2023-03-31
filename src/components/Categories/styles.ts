import styled from "styled-components";

export const Container = styled.div<{openMenu: boolean}>`
position: sticky;
background-color: white;
min-width:100%;
align-items: center;
margin-left: 0px;
padding: 10px;
top:55px;
bottom: 45px;
max-width: 1600px;
height:45px;
display:flex;
text-overflow: ellipsis;
white-space: nowrap;
overflow-y: hidden;
overflow-x: auto;
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
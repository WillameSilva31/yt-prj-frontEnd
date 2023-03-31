import styled from "styled-components";

export const Container = styled.div<{openDropMenu: boolean}>`
display: ${({openDropMenu})=> openDropMenu? 'flex' : 'none'};
background-color: aliceblue;
border-radius: 10px;
width:250px;
height:auto;
padding: 5px 10px 10px 10px;
flex-direction:column;
align-items:center;
margin-right: 30px;
position: fixed;
z-index: 1;
`;

export const DropDownMenuItem = styled.div`
display: flex;
width:90%;
height:30px;
border-radius:10px;
cursor:pointer;
padding: 10px;
flex-direction: row;
align-items: center;
padding-right:20px;

span {
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    margin-left: 20px;
    font-size:  16px;
}

:hover{
    background-color: gray;
}

`;

export const ButtonIcon = styled.img`
padding-left: 10px ;
width:25px`;
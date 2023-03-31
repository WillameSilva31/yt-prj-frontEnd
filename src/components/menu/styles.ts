import styled from 'styled-components'


export const Container = styled.div<{openMenu : boolean}>`
width: ${({openMenu})=> openMenu? '250px' : '100px'};
height: calc(100vh - 55px);
box-sizing: border-box;
padding: 10px 0px 0px 0px;
display:flex;
align-items: center;
flex-direction: column;
overflow-y: auto;
overflow-x: hidden;
position: sticky;
top: 55px;

#esconder {
    display: ${({openMenu})=> openMenu? 'flex' : 'none'};
}
`;

export const MenuItens = styled.div<{openMenu: boolean}>`
display: flex;
width: 90%;
min-height: ${({openMenu})=> openMenu? '45px' : '70px'};
border-radius: 10px;
cursor:pointer;
padding: 2px 15px;
box-sizing: border-box;
display: flex;
flex-direction: ${({openMenu})=> openMenu? 'row' : 'column'};
align-items: center;
justify-content: ${({openMenu})=> openMenu? 'none' : 'center'};

span {
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight:  ${({openMenu})=> openMenu? '700' : '400'};
    margin-left:  ${({openMenu})=> openMenu? '20px' : 'none'};
    font-size:  ${({openMenu})=> openMenu? '16px' : '12px'};
}

:hover{
    background-color: grey;
}`;

export const ButtonIcon = styled.img`
width:25px;
`;



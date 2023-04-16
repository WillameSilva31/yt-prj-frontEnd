import styled from "styled-components";

export const CategoriesContainer = styled.div<{openMenu: boolean}>`
position:sticky;
background-color: white;
right: 0;
align-items: center;
padding: 10px;
top:55px;
bottom: 45px;
width:${({openMenu})=> openMenu?  '114.0625rem' : '121.875rem'} ;
height:45px;
display:flex;
background-color:white ;
`;

export const CarouselContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  column-gap: 20px;
  height: 70%;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const Container = styled.div<{openMenu: boolean}>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 20px;
  height: 100%;
  padding: 10px;

`;

export const CategoriesItens = styled.button`
  background-color:gray;
  min-height: 90%;
  max-height: 90%;
  display: inline-block;
  white-space: nowrap;
  align-items: center;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 400;
cursor: pointer;
:hover {
    background-color: black;
    color: white;
}

span{
    margin: 20px 10px;
}`;

export const ButtonContainer = styled.div<{ margin?: string}>`
  min-width: 40px;
  max-width: 40px;
  min-height: 40px;
  max-height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;



:hover {
    background-color: gray;
}`;

export const ButtonIcon = styled.img`
width: 25px;
height: 25px;
border-radius: 50%`;
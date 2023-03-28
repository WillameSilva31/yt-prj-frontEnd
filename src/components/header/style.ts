import styled from "styled-components";

export const Container = styled.header`
width:100%;
height: 55px;
background-color: white;
padding: 0 0.625rem;
box-sizing: border-box;
display:flex;
align-items: center;
justify-content: space-between;
position: sticky;
top: 0;
`;

export const LogoContainer = styled.div`
display:flex;
align-items: center;
`;

export const ButtonContainer = styled.div<{ margin?: string}>`
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
margin: ${({margin}) => margin? margin: 0};

:hover {
    background-color: gray;
}`;

export const ButtonIcon = styled.img`
width: 20px;`;

export const SearchContainer = styled.div`
display:flex;`;

export const SearchBar = styled.div`
width: 28.125rem;
height: 40px;
border: 1px solid gray;
border-radius: 40px 0 0 40px ;
display: flex;
align-items: center;
padding: 0 16px;`;

export const SearchInput = styled.input`
width: 100%;
height: 25px;
outline: none;
border: none;`;

export const SearchButton = styled.div`
border-radius: 0 40px 40px 0;
height: 40px;
width: 70px;
background-color: #f8f8f8;
border: 1px solid grey;
display:flex;
justify-content: center;
align-items: center;

:hover {
    cursor:pointer
}`;

export const HeaderButtons = styled.div`
width: 200px;
display: flex;`;
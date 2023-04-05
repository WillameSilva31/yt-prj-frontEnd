import styled from "styled-components";

export const Container = styled.div`
display:flex;
justify-content: center;
flex-direction:column;
align-items:center;
width:auto;
height:auto;
background-color: white;
border-style:groove;
border-radius: 10px;
margin-top: 30px;
`;

export const Title = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const Input = styled.input`
    min-width: 600px ;
    width: calc(90% - 5px);
    height: 30px;
    display: flexbox;
    align-items: center;
    padding-left: 5px;
    margin:10px;
    border-radius: 5px;

`;

export const InputDate = styled.input`
    width: 125px;
    height: 30px;
    display: flexbox;
    align-items: center;
    padding-left: 5px;
    margin:10px;
    border-radius: 5px;

`;

export const Text = styled.textarea`
    min-width: 600px ;
    width: calc(90% - 5px);
    min-height:100px;
    display: flexbox;
    align-items: center;
    padding: 5px;
    margin:10px;
    border-radius: 5px; 
    resize:none;
`;

export const ButtonIcon = styled.button`
    width: 97%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin: 20px 0px;
`;

export const FieldInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export const Label = styled.label`
    display: flex;
    align-items: flex-start;
    margin-left: 17px;  
`;
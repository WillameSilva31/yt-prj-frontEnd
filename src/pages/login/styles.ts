import styled from "styled-components";

export const Container = styled.div`
display:flex;
justify-content: center;
flex-direction:column;
width:400px;
height:300px;
background-color: white;
border-style:groove;
border-radius: 10px;
margin-top: 30px;

h3{
    display: flex;
    align-items: center;
    justify-content: center;
}

span{
    display: flex;
    align-items: flex-start;
    margin-left: 17px;
}



button{
    width: 90%;
    height: 40px;
    display: flexbox;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
}

a {
    margin-top: 20px;
    display: flex;
    align-items: center;
    
}

`;

export const FieldInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
input{
    width: calc(90% - 5px);
    height: 30px;
    display: flexbox;
    align-items: center;
    padding-left: 5px;
    margin:10px;
    border-radius: 5px;
}`;
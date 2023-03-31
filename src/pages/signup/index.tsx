import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpContext } from "../../contexts/UserContext";
import { Container,FieldInput } from "./styles";

function SignUp(){
    const {handleSignUp} = useContext(SignUpContext)

    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const Navigate = useNavigate();

    return(
        <Container>
            <h3>Criar Cadastro</h3>
            <span>Seu nome</span>
            <FieldInput>
                <input type='name' value={name} onChange={(e)=> setName(e.target.value)} placeholder="ex: Fábio" />
            </FieldInput>
            <span>Seu e-mail</span>
            <FieldInput>
                <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="ex: umcaraqualquer@hotmail.com" />
            </FieldInput>
            <span>Sua senha</span>
            <FieldInput>
                <input type='password' onChange={(e)=> setPassword(e.target.value)} value={password} placeholder="ex: do1atéo8"/>
                <button onClick={() => handleSignUp(name, email, password)}> Realizar cadastro </button>
            </FieldInput>
            <div style={{margin:'15px 0px',display:'flex',justifyContent:'center'}} >
                <span> Voltar pra tela de login?<span style={{color:'blue',cursor:'pointer'}} onClick={()=> Navigate('/login')}>Login</span> </span>
            </div>
        </Container>
    )
}

export default SignUp;
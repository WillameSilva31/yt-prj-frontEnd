import { useState,useContext } from 'react'
import { userContext } from '../../contexts/UserContext';
import { Container, FieldInput } from './styles';
import { useNavigate } from 'react-router-dom';


function Login(){
    const {handleLogin} = useContext(userContext);
    const Navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    return(
        <Container>
            <h3>Login</h3>
            <span>Seu e-mail</span>
            <FieldInput>
                <input type='email' value={email} placeholder="ex: umcaraqualquer@hotmail.com" onChange={(e)=> setEmail(e.target.value)}/>
            </FieldInput>
            <span>Sua senha</span>
            <FieldInput>
                <input type='password' value={password} placeholder="ex: 1231456" onChange={(e)=> setPassword(e.target.value)}/>
                <button onClick={()=>handleLogin(email,password)}>Login</button>
            </FieldInput>
            <div style={{marginTop:'10px',display:'flex',justifyContent:'center'}} >
                <span> Não tem um login?<span style={{color:'blue',cursor:'pointer'}} onClick={()=> Navigate('/signup')}>cadastre-se</span> </span>
            </div>
        </Container>
    )
}

export default Login;
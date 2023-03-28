import { useState,useContext } from 'react'
import { UserContext } from '../../contexts/UserContext';
function Login(){
    const {handleLogin} = useContext(UserContext);

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    return(
        <div>
            <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <button onClick={()=>handleLogin(email,password)}>Login</button>
        </div>
    )
}

export default Login;
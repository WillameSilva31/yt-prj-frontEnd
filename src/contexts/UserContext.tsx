import {createContext, useEffect, useState} from 'react';
import api from '../api';

export const userContext = createContext({} as any);

export const UserStorage = ({ children }:any) => {
    const [ login, setLogin] = useState(false);
    const [ user,setUser] = useState({});
    const [ token, setToken] = useState(localStorage.getItem('token') as string);
    

    const getUser = (token: string) => {
        api.get('/user/get-user', {headers:{Authorization: token}}).then((data) =>{
            setUser(data)
            setLogin(true);
            
        }).catch((error)=>{
            console.log('usuário não encontrado',error)
        })
    }

    useEffect(() => {
        getUser(token);
    },[]); 

    const logOut = () =>{
        localStorage.removeItem('token');
        setLogin(false);
        setUser({});
    }

    const handleLogin = (email:string, password:string) =>{
       api.post('/user/sign-in',{email, password}).then(({data})=>{
        setLogin(true);
        localStorage.setItem('token',data.token);
        setToken(data.token);
        getUser(data.token);
       }).catch((error)=>{
        console.log('não foi possível fazer o login', error)
       })

    
    }


    return(
        <userContext.Provider value ={{login,user,handleLogin, logOut}}>
           {children} 
        </userContext.Provider>
    )
}

export const SignUpContext = createContext({} as any);

export const SignUpStorage = ({children}:any) => {
    const [signUp, setSignUp] = useState(false);
    const [signUpUser, setSignUpUser] = useState({});
    

    const handleSignUp = (name: string, email:string , password:string) => {
        api.post('/user/sign-up', {name, email, password}).then(()=>{
            setSignUp(true);
            alert('CADASTRO CRIADO COM SUCESSO!')
        }).catch((error)=>{
            console.log('não foi possível fazer o cadastro',error);
        })
    }
    return(
        <SignUpContext.Provider value ={{signUp, signUpUser, handleSignUp}}>
            {children}
        </SignUpContext.Provider>
    )
} 
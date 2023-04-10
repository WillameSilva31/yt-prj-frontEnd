import {createContext,useEffect, useState} from 'react';
import api from '../api';


export const VideoUpContext = createContext({} as any);

export const VideoStorage = ({ children }: any) => {
   
    const [token] = useState(localStorage.getItem('token') as string);
    const [videoSearch, setVideoSearch] = useState([]);

    
    

    const handleVideoUp = ( user_id:string, title: string, description:string) => {
        
        api.post('/videos/create-videos', {user_id, title, description},{headers:{Authorization: token}}).then(({})=>{
            alert('VIDEO CRIADO!') 
        }).catch((error)=>{
            console.log('não foi possível fazer o cadastro',error);
            alert('nao deu pra criar o video')
        })
    }
    

    
    return(
        <VideoUpContext.Provider value ={{ handleVideoUp}}>
            {children}
        </VideoUpContext.Provider>
    )
    
}








